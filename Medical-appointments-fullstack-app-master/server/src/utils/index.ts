import { Response } from "express";
import { IErrorMessage } from "../types";

export const showErrors = (err: unknown, message: IErrorMessage, res: Response) =>{
  console.log(err);
  res.status(500).json({
    message: `Something went wrong while ${message.message} the ${message.object}!`,
    err
  });
};
