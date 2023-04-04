import { Municipio } from "@prisma/client";
import { MunicipioRepositorio } from "../../repositorio/implementacao/MunicipioRepositorio";
import { ITipo } from "../../repositorio/IMunicipio";
import { AppError } from "../../../../errors/AppError";

class CriarMunicipioUseCase{

    async execute({nome, provinciaId}:ITipo):Promise<Municipio>{
        const repositorio = new MunicipioRepositorio();
        
        const existMunicipio = await repositorio.listarMunicipio(nome);
        if(existMunicipio) throw new AppError("Já Existe Este Munípio ", 400);

        const existProvinciaId = await repositorio.listarProvinciaId(provinciaId);
        if(!existProvinciaId) throw new AppError("Não Existe Esta Provincia ", 400);

        const result =await repositorio.criar({nome, provinciaId})
        return result;
    }
}

export {CriarMunicipioUseCase}