import { Request, Response, NextFunction } from 'express';

const authorizationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    //   TODO : authorization check
  next();
}

export default authorizationMiddleware;
