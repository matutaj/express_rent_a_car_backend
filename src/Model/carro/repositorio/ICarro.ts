import { Carro, Empresa, Prisma } from "@prisma/client";


export interface DadosCarro {
    id?: string
    nome: string;
    modelo: string;
    imaemUrl?: string;
    valorAluguel: string;
    caucao: string;
    fraquia: string;
    empresaId: string;
}
export interface ICarro {
    criar({ }: DadosCarro): Promise<Carro>;
    listarEmpresaId(id: string): Promise<Empresa | undefined>
    listarCarroId(id: string): Promise<Carro | undefined>;
    listarNomeCarro(nome: string): Promise<Carro | undefined>;
    listarModeloCaroo(modelo: string): Promise<Carro | undefined>;
    apagar(id: string): Promise<void>
    atualizar({ }: DadosCarro): Promise<Carro>
}