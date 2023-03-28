import { Cliente, Contato, Empresa, TipoContato } from "@prisma/client";

export interface ITipo {
  contacto: string;
  tipoContactoId: string;
  clienteId?: string;
  empresaId?: string;
}
export interface IAtualizar {
  id: string;
  contacto: string;
  tipoContactoId: string;
  clienteId?: string;
  empresaId?: string;
}
export interface IContato {
  criar({}: ITipo): Promise<Contato>;
  listarEmprasaId(id: string): Promise<Empresa | undefined>;
  listarClienteId(id: string): Promise<Cliente | undefined>;
  listarTipoContato(id: string): Promise<TipoContato | undefined>;
  listarContato(designacao: string): Promise<Contato | undefined>;
  apagar(id: string): Promise<void>;
  atualizar({}: IAtualizar): Promise<Contato>;
}
