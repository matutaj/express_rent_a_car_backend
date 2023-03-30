import { Provincia } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ProvinciaRpositorio } from "../../repositorio/implementacao/ProvinciaRepositorio";

class CriarProvinciaUsaCase {
  async execute(nome: string): Promise<Provincia> {
    const repositorioProvincia = new ProvinciaRpositorio();

    const existeProvincia = await repositorioProvincia.listarUmaProvincia(nome);

    if (existeProvincia) throw new AppError("Já Existe Esta Provincia!", 400);

    const result = await repositorioProvincia.criar(nome);

    return result;
  }
}

export { CriarProvinciaUsaCase };
