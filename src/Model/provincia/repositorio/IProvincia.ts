import { Provincia } from "@prisma/client";

export interface IAtualizar {
  id: string;
  nome: string;
}
export interface ITipo {
  nome: string;
}
export interface IProvincia {
  criar({}: ITipo): Promise<Provincia>;
  listarProvinciaId(id: string): Promise<Provincia | undefined>;
  listarTodaProvincia(): Promise<Provincia[]>;
  listarUmaProvincia(designacao: string): Promise<Provincia | undefined>;
  apagar(id: string): Promise<void>;
  atualizar({}: IAtualizar): Promise<Provincia>;
}
