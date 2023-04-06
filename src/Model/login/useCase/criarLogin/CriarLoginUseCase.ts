import { Login } from "@prisma/client";
import { LoginRepositorio } from "../../reositorio/implementacao/LoginRepositorio";
import { AppError } from "../../../../errors/AppError";
import { ClienteRepositorio } from "../../../cliente/repositorio/Implementacao/ClienteRepository";


export interface TipagemDado{
    email:string;
    clientId:string;
    empresaId:string;
    password:string;

}


class CriarLoginUseCase{
    async execute({email, clientId, empresaId, password}:TipagemDado):Promise<Login>{
        const repositorio = new LoginRepositorio();
        const repositorioClient = new ClienteRepositorio()
        // const repositorioEmpresa = new Repos

        const existClientId = await repositorioClient.listarUmCliente(clientId);

        if(!existClientId)
        throw new AppError("Não Existe Este Cliente", 400)

        // const existEmpresa = await repositorio.listarEmpresaId(empresaId);
        // if(!existEmpresa)
        // throw new AppError("Não Existe Esta Empresa",400)

        const existEmail = await repositorio.listarEmail(email);
        if(existEmail)
        throw new AppError("Já Existe Este E-mail",400)

        //if(existClientId && existEmpresa) throw new AppError("Você Só Pode Fazer Login Com Um Tipo de Usuário",400)

       // if(!existClientId && !existEmpresa) throw new AppError("Faça Login Com Um Usuário!",400)


        const result = await repositorio.criar({email, clientId, empresaId, password,})
        return result
        
    }
}

export{CriarLoginUseCase}