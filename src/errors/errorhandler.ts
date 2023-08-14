import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

function AppErrorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({

      status: "error",
      message: err.message,
    });
  }
  console.log(err)
  return response.status(500).json({
    status: "error",
    message: `Error - ${err.message}`,
  });

}

export default AppErrorHandler;
