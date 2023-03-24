import { Cliente } from "@prisma/client";

export interface TCriar {
  nome: string;
  telefone: string;
  numeroBI: string;
  imagemUrl?: string;
  telefone2?: string;
}

export interface Atulizar {
  id: string;
  nome: string;
  telefone: string;
  numeroBI: string;
  imagemUrl?: string;
  telefone2?: string;
}

export interface ICliente {
  criar({}: TCriar): Promise<Cliente>;
  listarTodoCliente(): Promise<Cliente[]>;
  listarUmCliente(id: string): Promise<Cliente | undefined>;
  pegarPeloBI(BI: string): Promise<Cliente | undefined>;
  apagar(id: string): Promise<void>;
  atualizar({}: Atulizar): Promise<Cliente>;
}
