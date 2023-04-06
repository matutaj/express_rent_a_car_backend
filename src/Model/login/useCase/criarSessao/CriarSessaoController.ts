import { AppError } from "../../../../errors/AppError";
import { criarSessaoSchema } from "../../../../schemas/login";
import { CriaSessaoUseCase } from "./CriarSessaoUseCase";
import { Request, Response} from "express"

class CriarSessaoController {
    async handle(req: Request, res: Response) {
      const criarSessaoUseCase = new CriaSessaoUseCase();
      const { email, password } = req.body;
  
      if (!(await criarSessaoSchema.isValid(req.body)))
        throw new AppError("Preencha Os Dados Necessários!", 400);
  
      const result = await criarSessaoUseCase.execute({ email, password });
      res.status(200).json(result);
    }
  }
  
  export { CriarSessaoController };
  