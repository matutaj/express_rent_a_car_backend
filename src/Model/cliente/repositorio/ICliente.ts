import { Cliente } from "@prisma/client";

export interface TCriar {
  id?: string;
  nome: string;
  imagemUrl?: string;
}


export interface ICliente {
  criar({ }: TCriar): Promise<Cliente>;
  listarTodoCliente(): Promise<Cliente[]>;
  listarUmCliente(id: string): Promise<Cliente | undefined>;
  apagar(id: string): Promise<void>;
  atualizar({ }: TCriar): Promise<Cliente>;
}
