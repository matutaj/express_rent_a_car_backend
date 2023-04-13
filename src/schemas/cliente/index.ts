import * as Yup from "yup";

const criarClienteSchema = Yup.object().shape({
  nome: Yup.string().required(),
  numeroBI: Yup.string().required(),
  imagemUrl: Yup.string()
});

const listarClienteBI = Yup.object().shape({
  id: Yup.string().required(),
});
export { criarClienteSchema, listarClienteBI };
