import { TipoContato } from "@prisma/client";

export interface IAtualizar {
  id: string;
  descricao: string;
}

export interface ITipoContato {
  criar(descricao: string): Promise<TipoContato>;
  listarUmTipoContato(descricao: string): Promise<TipoContato | undefined>;
  listarTipoContato(): Promise<TipoContato[]>;
  apagar(id: string): Promise<void>;
  atualizar({}: IAtualizar): Promise<TipoContato>;
}
