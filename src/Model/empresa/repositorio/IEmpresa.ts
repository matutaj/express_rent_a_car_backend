import { Empresa } from "@prisma/client";

export interface Dados {
    id?: string;
    nome: string;
    imagemUrl?: string;
    nif: string;
    quantidadeCar: number;
    descricao: string;
}

export interface IEmpresa {
    criar({ }: Dados): Promise<Empresa>;
    listar(): Promise<Empresa[]>;
    listarEmpresaId(id: string): Promise<Empresa | undefined>;
    listarUmaEmpresa(nome: string): Promise<Empresa | undefined>;
    apagar(id: string): Promise<void>;
    atualizar({ }: Dados): Promise<Empresa>
}