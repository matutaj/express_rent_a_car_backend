import { Reserva } from "@prisma/client";
import { AgendamentoRepositorio } from "../../repositorio/implementacao/AgendamentoRepositorio";
import { DadoAgendamento } from "../../repositorio/IAgendamento";
import { AppError } from "../../../../errors/AppError";
import { ClienteRepositorio } from "../../../cliente/repositorio/Implementacao/ClienteRepository";
import { compareAsc, parseISO } from "date-fns"

class CriarAgendamentoUseCase {
    async execute({ clienteId,
        carroId,
        dataEntrega,
        dataDevolucao,
        comprovativoUrl,
        nomeAuroporto,
        nAviao,
        nAcento,
        motorista,
        nomeHotel,
        nQuarto, }: DadoAgendamento): Promise<Reserva> {
        const repositorio = new AgendamentoRepositorio();
        const repositorioClient = new ClienteRepositorio();

        const existClient = await repositorioClient.listarUmCliente(clienteId)
        const existCarroId = await repositorio.listarCarro(carroId);
        const verificarAgenda = await repositorio.listarAgendamentoPorCliente(clienteId)


        if (!clienteId)
            throw new AppError("Usuário Não Existe!", 400)

        if (!existCarroId)
            throw new AppError("Não existe Este Carro!", 400)

        const existEmpresaId = await repositorio.listarEmpresa(existCarroId.empresaId)

        if (nomeAuroporto && nomeHotel)
            throw new AppError("Local do Usuário Não Está Determinado!", 400);

        if (!nomeAuroporto && !nomeHotel)
            throw new AppError("Determina Um Local de Entrega!", 400);

        if (nAviao && nQuarto)
            throw new AppError("Dados Inválidos", 400)

        if (!nAviao && !nQuarto)
            throw new AppError("Precisamos de Uma informação!", 400)

        if (nomeAuroporto && !nAcento)
            throw new AppError("Preencha O número do Acento", 400)

        if (!comprovativoUrl)
            throw new AppError("Envie o Comprovativo!", 400)

        const dataAgenda = parseISO(`${dataEntrega}`);
        const dataDev = parseISO(`${dataDevolucao}`)
        const dataAtual = Date.now();
        //comparando a data do agendamento com a data atual
        const horaValida = compareAsc(dataAgenda, dataAtual);
        console.log(horaValida)
        if (horaValida == -1)
            throw new AppError("Digite Uma data Válida!", 400);

        //  comparando a data da devolução com a data de Entrega

        const validarDataDevolucao = compareAsc(dataDev, dataAgenda);
        if (validarDataDevolucao == -1)
            throw new AppError("Data Inválida!", 400)
        // if (verificarAgenda.filter(item => item.dataEntrega == dataAgenda))
        //     throw new AppError("Já Tens Uma Reserva Nesta Data", 400)
        const result = await repositorio.criar({
            clienteId,
            carroId,
            dataEntrega: dataAgenda,
            dataDevolucao: dataDev,
            comprovativoUrl,
            nomeAuroporto,
            nAviao,
            nAcento,
            motorista,
            nomeHotel,
            nQuarto
        })
        return result

    }
}

export { CriarAgendamentoUseCase }