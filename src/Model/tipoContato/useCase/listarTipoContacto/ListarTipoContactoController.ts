import { Request, Response } from "express";
import { ListarTipoContactoUseCase } from "./ListarTipoContactoUseCase";


class ListarTipocontactoController{
    async handle(req:Request, res:Response){
        const tipoContatoUseCase = new ListarTipoContactoUseCase();
        
        const result = await tipoContatoUseCase.execute();
        return res.status(200).json(result)
        
    }
}
export{ListarTipocontactoController}