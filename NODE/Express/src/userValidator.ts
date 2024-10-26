import { Request, Response, NextFunction } from 'express';

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  if (!name?.trim()) {
    return res.status(400).json({ message: 'Name is required' });
  }

  if (!email?.trim()) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!password?.trim()) {
    return res.status(400).json({ message: 'Password is required' });
  }

  next();
};

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email?.trim()) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!password?.trim()) {
    return res.status(400).json({ message: 'Password is required' });
  }

  next();
};
