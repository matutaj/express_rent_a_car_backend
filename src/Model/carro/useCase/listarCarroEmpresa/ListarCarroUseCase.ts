import { Carro } from "@prisma/client";
import { CarroRepositorio } from "../../repositorio/implementacao/CarroRepositorio";
import { AppError } from "../../../../errors/AppError";

class ListarCarroEmpresaUseCase {
    async execute(empresaId: string): Promise<Carro[]> {
        const repositorio = new CarroRepositorio();

        const existEmpresa = await repositorio.listarEmpresaId(empresaId)

        if (!existEmpresa)
            throw new AppError("Não Existe Este MOdelo", 400)

        const result = await repositorio.listarCarroPelaEmpresa(empresaId)

        return result;
    }
}

export { ListarCarroEmpresaUseCase }