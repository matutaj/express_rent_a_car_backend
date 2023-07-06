import { Carro } from "@prisma/client";
import { CarroRepositorio } from "../../repositorio/implementacao/CarroRepositorio";


class ListarCarroUseCase {
    async execute(): Promise<Carro[]> {
        const carroRepositorio = new CarroRepositorio();

        const result = await carroRepositorio.listarCarro();

        return result;
    }
}
export { ListarCarroUseCase }