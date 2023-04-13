import { Carro } from "@prisma/client";
import { CarroRepositorio } from "../../repositorio/implementacao/CarroRepositorio";
import { AppError } from "../../../../errors/AppError";

class ListarCarroModeloUseCase {
    async execute(modelo: string): Promise<Carro[]> {
        const repositorio = new CarroRepositorio();

        const existModelo = await repositorio.listarModeloCarro(modelo)

        if (!existModelo)
            throw new AppError("Não Existe Este MOdelo", 400)

        const result = await repositorio.listarModeloCarro(modelo)

        return result;
    }
}

export { ListarCarroModeloUseCase }