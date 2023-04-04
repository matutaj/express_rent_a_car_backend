import { Provincia } from "@prisma/client";
import { ProvinciaRpositorio } from "../../repositorio/implementacao/ProvinciaRepositorio";


class ListarProvinciaUseCase{
    async execute():Promise<Provincia[]>{
        const repositorio = new ProvinciaRpositorio();

        const result = await repositorio.listarTodaProvincia();

        return result;
    }
}

export{ListarProvinciaUseCase}