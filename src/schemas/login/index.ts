import * as Yup from "yup"

const criarLoginSchema = Yup.object().shape({
    email:Yup.string().email().required(),
    password:Yup.string().required(),
    clientId:Yup.string(),
    empresaId:Yup.string()
})

const criarSessaoSchema = Yup.object().shape({
    email:Yup.string().email().required(),
    password:Yup.string().required()
})

export {criarLoginSchema, criarSessaoSchema}