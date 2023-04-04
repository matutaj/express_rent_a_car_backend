import { Municipio, Provincia } from "@prisma/client";

export interface ITipo{
    id?: string;
    nome:string;
    provinciaId:string;

}

export interface IMunicipio{
    criar({}:ITipo):Promise<Municipio>;
    listaTodoMunicipio():Promise<Municipio[]>
    listarProvinciaId(id:string):Promise<Provincia | undefined>
    listarMunicipioId(id:string):Promise<Municipio | undefined>
    listarMunicipio(nome:string):Promise<Municipio | undefined>
    apagar(id:string):Promise<void>
    atualizar({}:ITipo):Promise<Municipio>
}