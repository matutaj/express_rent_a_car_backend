import { Carro, Empresa, Reserva } from "@prisma/client";
import { DadoAgendamento, IAgendamento } from "../IAgendamento";
import { prisma } from "../../../../prisma/client";


class AgendamentoRepositorio implements IAgendamento {

    async criar({
        clienteId,
        carroId,
        dataEntrega,
        dataDevolucao,
        comprovativoUrl,
        nomeAuroporto,
        nAviao,
        nAcento,
        motorista,
        nomeHotel,
        nQuarto,
    }: DadoAgendamento): Promise<Reserva> {
        const agendar = await prisma.reserva.create({
            data: {
                clienteId,
                carroId,
                dataEntrega,
                dataDevolucao,
                comprovativoUrl,
                nomeAuroporto,
                nAviao,
                nAcento,
                motorista,
                nomeHotel,
                nQuarto,
            }
        })
        return agendar;
    }

    async listarAgendamentoPorCliente(clienteId: string): Promise<Reserva[]> {
        const listarAgendamentoCliente = await prisma.reserva.findMany({ where: { clienteId }, include: { Carro: true } });

        return listarAgendamentoCliente;
    }

    async listarAgendamentoPorDate(dia: string): Promise<Reserva[]> {
        const listarAgendamentoData = await prisma.reserva.findMany({ where: { createdAt: dia }, include: { Carro: true, Cliente: true } });

        return listarAgendamentoData;
    }

    async listarAgendamentoPorEmpresa(empresaId: string): Promise<Reserva[]> {
        const listarAgendaPorEmpresa = await prisma.reserva.findMany({ where: { Carro: { empresaId: empresaId } }, include: { Carro: true, Cliente: true } })

        return listarAgendaPorEmpresa;
    }
    async listarCarro(carroId: string): Promise<Carro | undefined> {
        const carro = await prisma.carro.findUnique({ where: { id: carroId }, include: { Empresa: true } }) || undefined;

        return carro;
    }

    async listarEmpresa(empresaId: string): Promise<Empresa | undefined> {
        const empresa = await prisma.empresa.findUnique({ where: { id: empresaId }, include: { Carro: true, Contato: true } }) || undefined;

        return empresa;
    }
    async atualizarAgendamento({ id,
        clienteId,
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
        const atualizar = await prisma.reserva.update({
            where: { id }, data: {
                clienteId,
                carroId,
                dataEntrega,
                dataDevolucao,
                comprovativoUrl,
                nomeAuroporto,
                nAviao,
                nAcento,
                motorista,
                nomeHotel,
                nQuarto,
            }
        });

        return atualizar;
    }

    async apagar(id: string): Promise<void> {
        await prisma.reserva.delete({ where: { id } })
    }
}

export { AgendamentoRepositorio }