import { TipoContato } from "@prisma/client";
import { TipoContatoRepositorio } from "../../repositorio/implementacao/TipoContatoRepositotio";

class CriarTipoContatoUseCase {
  async execute(descricao: string): Promise<TipoContato> {
    const repositorio = new TipoContatoRepositorio();

    const existeTipocontato = await repositorio.listarUmTipoContato(descricao);
    if (existeTipocontato) throw new Error("Já existe este tipo Contato!");

    const result = await repositorio.criar(descricao);

    return result;
  }
}
export { CriarTipoContatoUseCase };
