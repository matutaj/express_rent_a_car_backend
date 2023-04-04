import { Request, Response } from "express";
import { CriarMunicipioUseCase } from "./CriarMunicipioUseCase";
import { criarMunicipioSchema } from "../../../../schemas/municipio";
import { AppError } from "../../../../errors/AppError";

class CriarMunicipiocontroller{
    async handle(req:Request, res:Response){
        const municipioUsecase = new CriarMunicipioUseCase();

        if(!(await criarMunicipioSchema.isValid(req.body)))
        throw new AppError("Preencha os Campos Necessários!", 400)

        const result = await municipioUsecase.execute(req.body)

        return res.status(200).json(result);
    }
}

export {CriarMunicipiocontroller}