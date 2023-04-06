import { Cliente } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorio/Implementacao/ClienteRepository";
import { AppError } from "../../../../errors/AppError";
import { ContatoRpositorio } from "../../../contato/repositorio/Implementacao/ContatoRepositorio";
import { TipoContatoRepositorio } from "../../../tipoContato/repositorio/implementacao/TipoContatoRepositotio";
import { LoginRepositorio } from "../../../login/reositorio/implementacao/LoginRepositorio";
import bcrypt from "bcrypt"


export interface IContato {
  contacto: string;
  tipoContactoId: string;
}
export interface TipoCliente {
  nome: string;
  numeroBI: string;
  imagemUrl?: string;
  password:string;
}

export interface ITodo {
  contatoCliente: IContato[];
  cliente: TipoCliente;
}
class CriarClienteUseCase {
  async execute({
    cliente: { nome, numeroBI, imagemUrl, password },
    contatoCliente,
  }: ITodo): Promise<Cliente> {
    const repositorio = new ClienteRepositorio();
    const repositorioContato = new ContatoRpositorio();
    const repositorioTipoContato = new TipoContatoRepositorio();
    const repositorioLogin = new LoginRepositorio();

    const ExistNumenroBI = await repositorio.pegarPeloBI(numeroBI);

    if (ExistNumenroBI)
      throw new AppError("Já existe alguém com esse número de BI!");

    await Promise.all(
      contatoCliente.map(async (item) => {
        const contacto = await repositorioContato.listarContato(item.contacto);
        if (contacto)
          throw new AppError(`Esse Contato ${item.contacto} Já Existe`, 400);
      })
    );

    await Promise.all(
      contatoCliente.map(async (item) => {
        const tipoContato = await repositorioTipoContato.listarTipoContatoId(
          item.tipoContactoId
        );
        if (!tipoContato)
          throw new AppError(
            `Tipo de Contato ${item.tipoContactoId} Não Encontrado!`,
            400
          );
      })
    );

    const result = await repositorio.criar({
      nome,
      numeroBI,
      imagemUrl,
    });

    await Promise.all(
      contatoCliente.map(async ({ contacto, tipoContactoId }) => {
        await repositorioContato.criar({
          contacto,
          tipoContactoId,
          clienteId: result.id,
        });
      })
    );
    const hashPassword = await bcrypt.hash(password, 8)

    await repositorioLogin.criar({
      email:contatoCliente[0].contacto,
      clientId:result.id,
      password:hashPassword
    })

    return result;

  }

}
export { CriarClienteUseCase };
