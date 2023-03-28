import { Contato } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ClienteRepositorio } from "../../../cliente/repositorio/Implementacao/ClienteRepository";
import { TipoContatoRepositorio } from "../../../tipoContato/repositorio/implementacao/TipoContatoRepositotio";
import { ContatoRpositorio } from "../../repositorio/Implementacao/ContatoRepositorio";

export interface Tipo {
  contacto: string;
  tipoContactoId: string;
  clienteId: string;
  empresaId: string;
}

class CriarContatoUseCase {
  async execute({
    contacto,
    tipoContactoId,
    empresaId,
    clienteId,
  }: Tipo): Promise<Contato> {
    const contatoRepositorio = new ContatoRpositorio();
    const tipoContatoRepositorio = new TipoContatoRepositorio();
    const clienteRepositorio = new ClienteRepositorio();
    const existContato = await contatoRepositorio.listarContato(contacto);

    if (existContato) throw new AppError("Já existe este contacto!", 400);

    const existeTipoContato = await tipoContatoRepositorio.listarTipoContatoId(
      tipoContactoId
    );
    if (!existeTipoContato)
      throw new AppError("Não existe este tipo de contato!", 400);

    if (clienteId && empresaId)
      throw new AppError("Define apenas um usuário!", 400);

    if (!clienteId && empresaId) throw new AppError("Define Um Usuário", 400);

    const existClient = await clienteRepositorio.listarUmCliente(clienteId);
    if (!existClient) throw new AppError("Não existe este Cliente ");

    //Falta validar a empresa

    const result = await contatoRepositorio.criar({
      contacto,
      tipoContactoId,
      empresaId,
      clienteId,
    });

    return result;
  }
}
export { CriarContatoUseCase };
