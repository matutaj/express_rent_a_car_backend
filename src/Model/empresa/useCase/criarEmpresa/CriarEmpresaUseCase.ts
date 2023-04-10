import { Empresa } from "@prisma/client";
import { EmpresaRepositorio } from "../../repositorio/implementacao/EmpresaRepositorio";
import { ContatoRpositorio } from "../../../contato/repositorio/Implementacao/ContatoRepositorio";
import { DistritoRepositorio } from "../../../distrito/repositorio/implementacao/DistritoRepositorio";
import { AppError } from "../../../../errors/AppError";
import { TipoContatoRepositorio } from "../../../tipoContato/repositorio/implementacao/TipoContatoRepositotio";
import { MunicipioRepositorio } from "../../../municipio/repositorio/implementacao/MunicipioRepositorio";

export interface DadosEmpresa {
    nome: string;
    imagemUrl?: string;
    nif: string;
    quantidadeCar: number;
    descricao: string;
}
export interface Endereco {
    municipioId: string;
    distrito: string;
    bairro: string;
    rua: string;

}
export interface ContactoEmpresa {
    contacto: string;
    tipoContactoId: string;
}

export interface CriarEmpresa {
    dadoEmpresa: DadosEmpresa;
    endereco: Endereco[];
    contacto: ContactoEmpresa[];
}

class CriarEmpresaUseCase {
    async execute({
        dadoEmpresa: { nome, imagemUrl, nif, quantidadeCar, descricao },
        endereco,
        contacto
    }: CriarEmpresa): Promise<Empresa> {
        const repositorio = new EmpresaRepositorio();
        const repositorioContacto = new ContatoRpositorio();
        const repositorioDistrito = new DistritoRepositorio();
        const repositorioTipocontacto = new TipoContatoRepositorio();
        const repositorioMunicipio = new MunicipioRepositorio();

        const existeEmpresa = await repositorio.listarNifEmpesa(nif)
        if (existeEmpresa)
            throw new AppError("Esta Empresa Já Foi Criada", 400)

        await Promise.all(
            contacto.map(async (item) => {
                const contacto = await repositorioContacto.listarContato(item.contacto);
                if (contacto)
                    throw new AppError(`Esse Contato ${item.contacto} Já Existe`, 400);
            })
        );

        await Promise.all(
            contacto.map(async (item) => {
                const tipoContato = await repositorioTipocontacto.listarTipoContatoId(
                    item.tipoContactoId
                );
                if (!tipoContato)
                    throw new AppError(
                        `Tipo de Contato ${item.tipoContactoId} Não Encontrado!`,
                        400
                    );
            })
        );
        await Promise.all(
            endereco.map(async (item) => {
                const municipio = await repositorioMunicipio.listarMunicipioId(item.municipioId);

                if (!municipio)
                    throw new AppError('Id do Município Não foi encontrado!', 400)
            })
        );

        const result = await repositorio.criar({
            nome,
            imagemUrl,
            nif,
            quantidadeCar,
            descricao
        })


        await Promise.all(
            contacto.map(async ({ contacto, tipoContactoId }) => {
                await repositorioContacto.criar({
                    contacto,
                    tipoContactoId,
                    empresaId: result.id,
                });
            })
        );
        await Promise.all(
            endereco.map(async ({
                municipioId,
                distrito,
                bairro,
                rua,
            }) => {
                await repositorioDistrito.criar({
                    municipioId,
                    nome: distrito,
                    bairro,
                    rua,
                    empresaId: result.id
                })
            })
        )

        return result;
    }
}

export { CriarEmpresaUseCase }