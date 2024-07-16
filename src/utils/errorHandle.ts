import {
  ErrorRequestHandler,
  RequestHandler,
  RequestParamHandler,
} from 'express';
import { messageError } from '../constants/messages';
import { StatusCodes } from 'http-status-codes';

export const errorHandleNotFound: RequestHandler = (req, res, next) => {
  const error = new Error(messageError.NOT_FOUND);
  (error as any).status = StatusCodes.NOT_FOUND;
  next(error);
};

export const errorHandle: ErrorRequestHandler = (err, req, res) => {
  return res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: {
      name: err,
      message: err.message || messageError.ERROR_SERVER,
    },
  });
};