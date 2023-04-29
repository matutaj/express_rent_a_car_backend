import * as Yup from "yup"

const agendamentoschema = Yup.object().shape({
    clienteId: Yup.string().uuid().required(),
    carroId: Yup.string().uuid().required(),
    dataEntrga: Yup.date().required(),
    dataDevolucao: Yup.date().required(),
    comprovativoUrl: Yup.string().required()
})

export { agendamentoschema }