import { Provincia } from "@prisma/client";

export interface IAtualizar {
  id: string;
  nome: string;
}

export interface IProvincia {
  criar(nome: string): Promise<Provincia>;
  listarProvinciaId(id: string): Promise<Provincia | undefined>;
  listarTodaProvincia(): Promise<Provincia[]>;
  listarUmaProvincia(nome: string): Promise<Provincia | undefined>;
  apagar(id: string): Promise<void>;
  atualizar({}: IAtualizar): Promise<Provincia>;
}
