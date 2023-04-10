import * as Yup from "yup";

const criarEmpresaSchema = Yup.object().shape({
    nome: Yup.string().required(),
    nif: Yup.string().required(),
    descriacao: Yup.string(),
    quantidadeCar: Yup.number().required(),
})

export { criarEmpresaSchema }