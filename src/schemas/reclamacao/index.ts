
import * as Yup from "yup";

const reclamacaoSchema = Yup.object().shape({
    clienteId: Yup.string().required(),
    titulo: Yup.string(),
    descricao: Yup.string().required()
})

export { reclamacaoSchema }