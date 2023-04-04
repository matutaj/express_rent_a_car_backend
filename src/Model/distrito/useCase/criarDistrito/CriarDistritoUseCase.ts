import { Distrito } from "@prisma/client";
import { DistritoRepositorio } from "../../repositorio/implementacao/DistritoRepositorio";
import { ITipo } from "../../repositorio/IDistrito";
import { AppError } from "../../../../errors/AppError";


class CriarDistritoUseCase{
    async execute({nome, bairro, rua, municipioId}:ITipo):Promise<Distrito>{
        const repositorio = new DistritoRepositorio();

        const existDistrito = await repositorio.listarUmDistristo(nome)
        const existMunicipioId =  await repositorio.listarMunicipioId(municipioId);

        if(existDistrito)
        throw new AppError("Já Existe Este Distrito!", 400)

        if(!existMunicipioId)
        throw new AppError("Não Existe Este Município!", 400)
        
        const reuslt = await repositorio.criar({nome, bairro,rua, municipioId});

        return reuslt;
        
    }
}

export {CriarDistritoUseCase}