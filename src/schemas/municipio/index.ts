import * as Yup from "yup"

const criarMunicipioSchema = Yup.object().shape({
    nome:Yup.string().required(),
    provinciaId:Yup.string().uuid().required()
})
export{criarMunicipioSchema}