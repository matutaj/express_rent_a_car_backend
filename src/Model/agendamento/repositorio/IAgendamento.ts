import { Carro, Empresa, Motorista, Reserva } from "@prisma/client";

export interface DadoAgendamento {
    id?: string;
    clienteId: string;
    carroId: string;
    dataEntrga: Date
    dataDevolucao: Date
    comprovativoUrl: string;
    nomeAuroporto?: string;
    nAviao?: string;
    nAcento?: string;
    motorista: Motorista
    nomeHotel?: string;
    nQuarto?: number
}

export interface IAgendamento {
    criar({ }: DadoAgendamento): Promise<Reserva>;
    listarAgendamentoPorEmpresa(empresaId: string): Promise<Reserva[]>;
    listarEmpresa(empresaId: string): Promise<Empresa | undefined>;
    listarCarro(carroId: string): Promise<Carro | undefined>;
    listarAgendamentoPorCliente(clienteId: string): Promise<Reserva[]>;
    listarAgendamentoPorDate(dia: string): Promise<Reserva[]>
    atualizarAgendamento({ }: DadoAgendamento): Promise<Reserva>;
    apagar(id: string): Promise<void>
}