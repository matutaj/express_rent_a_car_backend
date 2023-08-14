import { Reserva } from "@prisma/client";
import { AgendamentoRepositorio } from "../../repositorio/implementacao/AgendamentoRepositorio";
import { EmpresaRepositorio } from "../../../empresa/repositorio/implementacao/EmpresaRepositorio";
import { AppError } from "../../../../errors/AppError";


class ListarAgendamentoUseCase {
    async execute(empresaId: string): Promise<Reserva[]> {
        const repositorio = new AgendamentoRepositorio();
        const repositorioEmpresa = new EmpresaRepositorio();

        const existEmpresa = await repositorioEmpresa.listarEmpresaId(empresaId);

        if (!existEmpresa) throw new AppError("Não existe Esta Empresa!", 400)

        const result = await repositorio.listarAgendamentoPorEmpresa(empresaId)

        return result;

    }
}
export { ListarAgendamentoUseCase }