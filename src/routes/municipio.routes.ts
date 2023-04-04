import { Router } from "express";


import { CriarMunicipiocontroller } from "../Model/municipio/usecase/criarMunicipio/CriarMunicipiocontroller";
import { ListarMunicipiocontroller } from "../Model/municipio/usecase/listarmunicipio/ListarMunicipioController";


const criarMunicipio = new CriarMunicipiocontroller();
const listarMunicipio = new ListarMunicipiocontroller();


const municipioRoutes = Router();

municipioRoutes.post("/", criarMunicipio.handle)
municipioRoutes.get("/", listarMunicipio.handle)
export {municipioRoutes}