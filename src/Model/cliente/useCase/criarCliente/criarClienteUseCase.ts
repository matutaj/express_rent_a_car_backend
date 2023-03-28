import { Cliente } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorio/Implementacao/ClienteRepository";
import { AppError } from "../../../../errors/AppError";
import { ContatoRpositorio } from "../../../contato/repositorio/Implementacao/ContatoRepositorio";
import { TipoContatoRepositorio } from "../../../tipoContato/repositorio/implementacao/TipoContatoRepositotio";

export interface IContato {
  contato: string;
  tipoContactoId: string;
}
export interface TipoCliente {
  nome: string;
  numeroBI: string;
  imagemUrl?: string;
}
export interface ITodo {
  iContato: IContato[];
  tipo: TipoCliente;
}
class CriarClienteUseCase {
  async execute({
    tipo: { nome, numeroBI, imagemUrl },
    iContato,
  }: ITodo): Promise<Cliente> {
    const repositorio = new ClienteRepositorio();
    const repositorioContato = new ContatoRpositorio();
    const repositorioTipoContato = new TipoContatoRepositorio();

    const ExistNumenroBI = await repositorio.pegarPeloBI(numeroBI);

    if (ExistNumenroBI)
      throw new AppError("Já existe alguém com esse número de BI!");

    await Promise.all(
      iContato.map(async (item) => {
        const contacto = await repositorioContato.listarContato(item.contato);
        if (contacto)
          throw new AppError(`Esse Contato ${item.contato} Já Existe`, 400);
      })
    );

    await Promise.all(
      iContato.map(async (item) => {
        const tipoContato = await repositorioTipoContato.listarUmTipoContato(
          item.tipoContactoId
        );
        if (!tipoContato)
          throw new AppError("Tipo de Contato Não Encontrado!", 400);
      })
    );
    const result = await repositorio.criar({
      nome,
      numeroBI,
      imagemUrl,
    });

    return result;
  }
}
export { CriarClienteUseCase };
