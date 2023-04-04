import { Distrito } from "@prisma/client";
import { DistritoRepositorio } from "../../repositorio/implementacao/DistritoRepositorio";


class ListarDistritoUseCase{
 async execute():Promise<Distrito[]>{
    const repositorio = new DistritoRepositorio();

    const result = await repositorio.listarTodoDistrito();

    return result;
 }
}
export {ListarDistritoUseCase}