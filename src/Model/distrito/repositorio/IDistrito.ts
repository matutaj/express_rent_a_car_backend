import { Distrito, Municipio } from "@prisma/client";

export interface ITipo {
    id?: string;
    nome: string;
    bairro: string;
    rua?: string;
    municipioId: string;
    empresaId: string;
}

export interface IDistrito {
    criar({ }: ITipo): Promise<Distrito>
    listarDistritoId(id: string): Promise<Distrito | undefined>
    listarUmDistristo(nome: string): Promise<Distrito | undefined>
    listarTodoDistrito(): Promise<Distrito[]>
    listarMunicipioId(id: string): Promise<Municipio | undefined>
    apagar(id: string): Promise<void>
    atualizar({ }: ITipo): Promise<Distrito>
}