import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "../config/auth";
import { Requester } from "./types";

const AuthMiddleware = {
  async auth(
    req: Request<
      {},
      {},
      {},
      {
        requester: Requester;
      }
    >,
    res: Response,
    next: NextFunction
  ) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ status: 401, message: "Token not provided" });
    }

    const [, token] = authHeader.split(" ");

    try {
      const decoded: any = await Promise.resolve(
        jwt.verify(token, authConfig.key)
      );
      req.query.requester = {
        clientId: decoded.id,
        nome: decoded.nome,
      };
      return next();
    } catch (error) {
      return res.status(498).json({ status: 498, message: "Token invalid" });
    }
  },
};

export { AuthMiddleware };
