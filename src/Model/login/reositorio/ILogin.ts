import { Cliente, Empresa, Login } from "@prisma/client";

export interface TipagemDado{
    email:string;
    clientId?:string;
    empresaId?:string;
    password:string;
    passwordTokenSet?:string

}
export interface DataSessao{
    email:string;
    password:string;
}
export interface RetornaSessao{
    usuario:{
        id:string;
        nome:string;
        email:string;
    };
    token:string
}
export interface ILogin{
    criar({}:TipagemDado):Promise<Login>;
    listarEmail(email:string):Promise<Login | undefined>
    apagar(email:string):Promise<void>;
    atualizar({}:TipagemDado):Promise<Login>
}