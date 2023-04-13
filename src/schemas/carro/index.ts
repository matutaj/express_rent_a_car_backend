import * as Yup from 'yup';

const criarcarroSchema = Yup.object().shape({
    nome: Yup.string().required(),
    modelo: Yup.string().required(),
    imagemUrl: Yup.string(),
    valorAluguel: Yup.number().required(),
    caucao: Yup.number(),
    fraquia: Yup.number(),
    empresaId: Yup.string().uuid().required()
})

const modeloCarroSchema = Yup.object().shape({
    modelo: Yup.string().required()
})
const empresaCarroSchema = Yup.object().shape({
    empresaId: Yup.string().uuid().required()
})
export { criarcarroSchema, modeloCarroSchema, empresaCarroSchema }
