import { Empresa } from "@prisma/client";
import { EmpresaRepositorio } from "../../repositorio/implementacao/EmpresaRepositorio";
import { ContatoRpositorio } from "../../../contato/repositorio/Implementacao/ContatoRepositorio";
import { DistritoRepositorio } from "../../../distrito/repositorio/implementacao/DistritoRepositorio";
import { MunicipioRepositorio } from "../../../municipio/repositorio/implementacao/MunicipioRepositorio";
import { TipoContatoRepositorio } from "../../../tipoContato/repositorio/implementacao/TipoContatoRepositotio";
import { AppError } from "../../../../errors/AppError";
import bcrypt from "bcrypt";


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

export interface AtualizarEmpresa {
    dadoEmpresa: DadosEmpresa;
    endereco: Endereco[];
    contacto: ContactoEmpresa[];
}


class AtualizarEmpresaUseCase {
    async execute(id: string, {
        dadoEmpresa: { nome, imagemUrl, nif, quantidadeCar, descricao },
        contacto,
        endereco
    }: AtualizarEmpresa): Promise<Empresa> {
        const repositorioEmpresa = new EmpresaRepositorio();
        const repositorioContacto = new ContatoRpositorio();
        const repositorioDistrito = new DistritoRepositorio();


        const existeEmpresa = await repositorioEmpresa.listarEmpresaId(id)
        if (!existeEmpresa)
            throw new AppError("Não existe está Empresa", 400)


        const result = await repositorioEmpresa.atualizar({
            id,
            nome,
            imagemUrl,
            nif,
            quantidadeCar,
            descricao
        })

        await Promise.all(
            contacto.map(async ({ contacto, tipoContactoId }) => {
                await repositorioContacto.atualizar({
                    id,
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
                await repositorioDistrito.atualizar({
                    id,
                    municipioId,
                    nome: distrito,
                    bairro,
                    rua,
                    empresaId: result.id
                })
            })
        )

        return result

    }
}

export { AtualizarEmpresaUseCase }