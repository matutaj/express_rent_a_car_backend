import { Router } from "express";
import multer from "multer";
import { storage } from "../config/multer";
import { CriarCarroController } from "../Model/carro/useCase/criaCarro/CriarCarroController";
import { ListarCarroModeloCantroller } from "../Model/carro/useCase/listarModeloCarro/ListarCarroController";
import { ListarCarroEmpresaController } from "../Model/carro/useCase/listarCarroEmpresa/ListarCarroEmpresaController";
import { ListarCarroController } from "../Model/carro/useCase/listarCarro/ListarCarroController";

const criarCarro = new CriarCarroController();
const listarCarroModelo = new ListarCarroModeloCantroller();
const listarCarroEmpresa = new ListarCarroEmpresaController();
const listarCarro = new ListarCarroController();

const carroRoutes = Router();
const imagemRoutes = Router();

const upload = multer({ storage })

imagemRoutes.post("/", upload.array("imagem"), (req, res) => {
    return res.status(200).json(req.file?.filename)
})
carroRoutes.post("/", criarCarro.handle)
carroRoutes.get("/:modelo", listarCarroModelo.handle);
carroRoutes.get("listarCarro/:empresaId", listarCarroEmpresa.handle)
carroRoutes.get("/", listarCarro.handle)


export { carroRoutes, imagemRoutes }