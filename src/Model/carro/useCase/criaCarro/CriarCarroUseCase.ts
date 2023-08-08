import { Carro } from "@prisma/client";
import { DadosCarro } from "../../repositorio/ICarro";
import { CarroRepositorio } from "../../repositorio/implementacao/CarroRepositorio";
import { AppError } from "../../../../errors/AppError";


class CriarCarroUseCase {
    async exucete({
        nome,
        modelo,
        imagemUrl,
        valorAluguel,
        caucao,
        fraquia,
        empresaId, }: DadosCarro): Promise<Carro> {
        const repositorio = new CarroRepositorio();

        const existEmpresa = await repositorio.listarEmpresaId(empresaId);

        if (!existEmpresa)
            throw new AppError("Não Existe Está Empresa!", 400)


        const result = await repositorio.criar({
            nome,
            modelo,
            imagemUrl,
            valorAluguel,
            caucao,
            fraquia,
            empresaId,
        })

        return result;
    }
}

export { CriarCarroUseCase }