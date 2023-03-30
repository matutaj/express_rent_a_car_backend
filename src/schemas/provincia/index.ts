import * as Yup from "yup";

const criarProvinciaSchema = Yup.object().shape({
  nome: Yup.string().required(),
});

export { criarProvinciaSchema };
