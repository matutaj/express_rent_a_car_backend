import { TipoContato } from "@prisma/client";
import { TipoContatoRepositorio } from "../../repositorio/implementacao/TipoContatoRepositotio";


class ListarTipoContactoUseCase{
    async execute():Promise<TipoContato[]>{
        const reprositorio = new TipoContatoRepositorio();

        const result =await reprositorio.listarTipoContato();

        return result;
    }
}

export{ListarTipoContactoUseCase}