import { Request, Response } from "express";
import { ListarDistritoUseCase } from "./ListarDistritoUseCase";


class ListarDistritoController{

    async handle(req:Request, res:Response){
        const distritoUseCase = new ListarDistritoUseCase();

        const result = await distritoUseCase.execute();

        return res.status(200).json(result);
    }

}

export {ListarDistritoController}