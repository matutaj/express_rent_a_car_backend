import { Router } from "express";


import { CriarMunicipiocontroller } from "../Model/municipio/usecase/criarMunicipio/CriarMunicipiocontroller";

const criarMunicipio = new CriarMunicipiocontroller();

const municipioRoutes = Router();
municipioRoutes.post("/", criarMunicipio.handle)
export {municipioRoutes}