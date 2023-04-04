import { Request, Response } from "express";
import { CriarDistritoUseCase } from "./CriarDistritoUseCase";
import { criarDistritoSchema } from "../../../../schemas/distrito";
import { AppError } from "../../../../errors/AppError";


class CriarDistritoController{

    async handle(req:Request, res:Response){
        const distritoUseCase = new CriarDistritoUseCase();

        if(!(await criarDistritoSchema.isValid(req.body)))
        throw new AppError("Preencha Os Dados Necessários!", 400)

        const result = await distritoUseCase.execute(req.body)

        return res.status(200).json(result)
    }
}

export{CriarDistritoController}