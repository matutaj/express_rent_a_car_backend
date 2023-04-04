import { Request, Response } from "express";
import { ListarMunicipioUseCase } from "./ListarMunicipioUseCase";


class ListarMunicipiocontroller{
    async handle(req:Request, res:Response){
        const municipioUseCase = new ListarMunicipioUseCase();

        const result = await municipioUseCase.execute();

        return res.status(200).json(result);
    }
}

export {ListarMunicipiocontroller}