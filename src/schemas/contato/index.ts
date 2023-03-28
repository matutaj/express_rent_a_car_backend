import * as Yup from "yup";

const CriarContatoSchema = Yup.object().shape({
  contacto: Yup.string().required(),
  tipoContactoId: Yup.string().uuid().required(),
  empresaId: Yup.string().uuid(),
  clienteId: Yup.string().uuid(),
});
export { CriarContatoSchema };
