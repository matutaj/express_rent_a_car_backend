import { authConfig } from "../../../../config/auth";
import { AppError } from "../../../../errors/AppError";
import { ClienteRepositorio } from "../../../cliente/repositorio/Implementacao/ClienteRepository";
import { DataSessao, RetornaSessao } from "../../reositorio/ILogin";
import { LoginRepositorio } from "../../reositorio/implementacao/LoginRepositorio";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class CriaSessaoUseCase{
async execute({email, password}:DataSessao):Promise<RetornaSessao | undefined>{
    const repositorioLogin = new LoginRepositorio();
    const repositorioCleint = new ClienteRepositorio()
    //const respositorioEmpresa

    const existLogin = await repositorioLogin.listarEmail(email);
    if(!existLogin)
    throw new AppError("Este E-mail Não Existe! ", 400);

    if(!(await bcrypt.compare(password, existLogin.password)))
    throw new AppError("Senha Inválida!",400)

    if(existLogin.clientId){
        const client = await repositorioCleint.listarUmCliente(existLogin.clientId);
        if(client)
        return {
            usuario:{
                email,
                id:client?.id,
                nome:client.nome,
            },
            token: jwt.sign({ ...client}, authConfig.key, {
                expiresIn:authConfig.expiresIn
            })
        }
    }

}

}

export{CriaSessaoUseCase}