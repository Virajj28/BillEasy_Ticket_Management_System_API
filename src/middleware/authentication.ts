import { Request, Response, NextFunction } from 'express';

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    //   TODO : auth check
  next();
}

export default authenticationMiddleware;