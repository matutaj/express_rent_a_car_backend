import * as Yup from "yup";

const criarEmpresaSchema = Yup.object().shape({
    nome: Yup.string().required(),
    nif: Yup.string().required(),
    descriacao: Yup.string(),
    quantidadeCar: Yup.number().required(),
})
const AtualizarEmpresaschema = Yup.object().shape({

    nome: Yup.string(),
    descriacao: Yup.string(),
    quantidadeCar: Yup.number().required(),
})
const listarNifEmpresaSchema = Yup.object().shape({
    nif: Yup.string().required(),
})
const EmpresaId = Yup.object().shape({
    id: Yup.string().required()
})
const listarEmpresapeloNomaSchema = Yup.object().shape({
    nome: Yup.string().required()
})
export { criarEmpresaSchema, EmpresaId, listarEmpresapeloNomaSchema, listarNifEmpresaSchema, AtualizarEmpresaschema }