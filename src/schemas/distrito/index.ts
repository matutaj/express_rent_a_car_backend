import * as Yup from "yup"

const criarDistritoSchema = Yup.object().shape({
    nome:Yup.string().required(),
    bairro :Yup.string().required(),
    rua:Yup.string(),
    municipioId:Yup.string().uuid().required()
})

export {criarDistritoSchema}