import { Reclamacao } from "@prisma/client"

interface IDadoReclamacao {
    id?: string;
    clienteId: string;
    titulo: string;
    descricao: string;
}

export interface IReclamacao {
    criar({ }: IDadoReclamacao): Promise<Reclamacao>;
    listarReclamacao(): Promise<Reclamacao[] | undefined>;
    delete(id: string): Promise<void>;
}