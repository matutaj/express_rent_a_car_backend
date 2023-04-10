import { authConfig } from "../../../../config/auth";
import { AppError } from "../../../../errors/AppError";
import { ClienteRepositorio } from "../../../cliente/repositorio/Implementacao/ClienteRepository";
import { EmpresaRepositorio } from "../../../empresa/repositorio/implementacao/EmpresaRepositorio";
import { DataSessao, RetornaSessao } from "../../reositorio/ILogin";
import { LoginRepositorio } from "../../reositorio/implementacao/LoginRepositorio";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class CriaSessaoUseCase {
    async execute({ email, password }: DataSessao): Promise<RetornaSessao | undefined> {
        const repositorioLogin = new LoginRepositorio();
        const repositorioCleint = new ClienteRepositorio();
        const respositorioEmpresa = new EmpresaRepositorio();

        const existLogin = await repositorioLogin.listarEmail(email);
        if (!existLogin)
            throw new AppError("Este E-mail Não Existe! ", 400);

        if (!(await bcrypt.compare(password, existLogin.password)))
            throw new AppError("Senha Inválida!", 400)

        if (existLogin.clientId) {
            const client = await repositorioCleint.listarUmCliente(existLogin.clientId);
            if (client)
                return {
                    usuario: {
                        email,
                        id: client?.id,
                        nome: client.nome,
                    },
                    token: jwt.sign({ ...client }, authConfig.key, {
                        expiresIn: authConfig.expiresIn
                    })
                }
        } else if (existLogin.empresaId) {
            const empresa = await respositorioEmpresa.listarEmpresaId(existLogin.empresaId);
            if (empresa)
                return {
                    usuario: {
                        email,
                        id: empresa?.id,
                        nome: empresa.nome,
                    },
                    token: jwt.sign({ ...empresa }, authConfig.key, {
                        expiresIn: authConfig.expiresIn
                    })
                }
        }


    }

}

export { CriaSessaoUseCase }