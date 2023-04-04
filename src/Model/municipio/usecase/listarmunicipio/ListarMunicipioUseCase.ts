import { Municipio } from "@prisma/client";
import { MunicipioRepositorio } from "../../repositorio/implementacao/MunicipioRepositorio";

class ListarMunicipioUseCase{
    async execute():Promise<Municipio[]>{
        const repositotio = new MunicipioRepositorio();

        const result = await repositotio.listaTodoMunicipio();

        return result
    }
}

export{ListarMunicipioUseCase}