import * as Yup from "yup";

const criarClienteSchema = Yup.object().shape({
  nome: Yup.string().min(5).required(),
  numeroBI: Yup.string().max(16).required(),
  imagemUrl: Yup.string().url(),
});

const listarClienteBI = Yup.object().shape({
  id: Yup.string().required(),
});
export { criarClienteSchema, listarClienteBI };
