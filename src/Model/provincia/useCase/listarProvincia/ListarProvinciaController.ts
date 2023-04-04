import { Request, Response } from "express";
import { ListarProvinciaUseCase } from "./ListarProvinciaUseCase";

class ListarProvinciaController{

    async handle(req:Request, res:Response){
        const provinciaUseCase = new ListarProvinciaUseCase();

        const result = await provinciaUseCase.execute();

        return res.status(200).json(result);
        
    }

}

export {ListarProvinciaController}