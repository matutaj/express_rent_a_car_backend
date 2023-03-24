import { Cliente } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorio/Implementacao/ClienteRepository";
import { TCriar } from "../../repositorio/ICliente";

class CriarClienteUseCase {
  async execute({
    nome,
    numeroBI,
    imagemUrl,
    telefone,
    telefone2,
  }: TCriar): Promise<Cliente> {
    const repositorio = new ClienteRepositorio();

    const ExistNumenroBI = await repositorio.pegarPeloBI(numeroBI);

    if (ExistNumenroBI)
      throw new Error("Já existe alguém com esse número de BI!");

    const result = await repositorio.criar({
      nome,
      numeroBI,
      imagemUrl,
      telefone,
      telefone2,
    });

    return result;
  }
}
export { CriarClienteUseCase };
