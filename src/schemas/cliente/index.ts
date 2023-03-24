import * as Yup from "yup";

const criarClienteSchema = Yup.object().shape({
  nome: Yup.string().min(5).required(),
  numeroBI: Yup.string().max(12).required(),
  imagemUrl: Yup.string().url(),
  telefone: Yup.string().required(),
  telefone2: Yup.string(),
  email: Yup.string().email().required(),
});

const listarClienteBI = Yup.object().shape({
  id: Yup.string().required(),
});
export { criarClienteSchema, listarClienteBI };
