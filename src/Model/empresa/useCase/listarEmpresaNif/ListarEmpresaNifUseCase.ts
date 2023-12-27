import { Empresa } from "@prisma/client";
import { EmpresaRepositorio } from "../../repositorio/implementacao/EmpresaRepositorio";
import { AppError } from "../../../../errors/AppError";

class ListarEmpresaNifUseCase {
  async execute(nif: string): Promise<Empresa> {
    const repositorio = new EmpresaRepositorio();

    const existeNifEmpresa = await repositorio.listarNifEmpesa(nif);

    if (!existeNifEmpresa)
      throw new AppError("Não Existe Empresa Com Este Nif", 400);

    return existeNifEmpresa;
  }
}

export { ListarEmpresaNifUseCase };
