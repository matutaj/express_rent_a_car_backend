import * as Yup from "yup";

const CriarTipoContatoSchema = Yup.object().shape({
  descricao: Yup.string().required(),
});
export { CriarTipoContatoSchema };
