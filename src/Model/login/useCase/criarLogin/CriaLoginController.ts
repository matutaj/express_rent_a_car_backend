import { Request, Response } from "express";
import { CriarLoginUseCase } from "./CriarLoginUseCase";
import { criarLoginSchema } from "../../../../schemas/login";
import { AppError } from "../../../../errors/AppError";
import bcrypt from "bcrypt"


class CriarLoginController{
    async handle(req:Request, res:Response){
        const loginUseCase = new CriarLoginUseCase();
        const {email, password, clientId, empresaId} = req.body

        if(!(await criarLoginSchema.isValid(req.body)))
        throw new AppError("Preencha Os Campos Necessários!",400)

        const hashPassword = await bcrypt.hash(password, 8)

        const result = await loginUseCase.execute({email, password:hashPassword, clientId,empresaId})

        return res.status(200).json(result)
    }
}

export{CriarLoginController}