import { Cliente, Empresa, Login } from "@prisma/client";

export interface TipagemDado{
    email:string;
    clientId:string;
    empresaId:string;
    password:string;
    passwordTokenSet?:string

}

export interface ILogin{
    criar({}:TipagemDado):Promise<Login>;
    listarEmail(email:string):Promise<Login | undefined>
    listarClienteId(id:string):Promise<Cliente | undefined>;
    listarEmpresaId(id:string):Promise<Empresa | undefined>;
    apagar(email:string):Promise<void>;
    atualizar({}:TipagemDado):Promise<Login>
}