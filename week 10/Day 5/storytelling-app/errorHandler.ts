import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', err.message);

  // Don't expose technical details in production
  const isProduction = process.env.NODE_ENV === 'production';

  res.status(err.status || 500).json({
    message: isProduction
      ? 'An error occurred while processing your request.'
      : err.message,
  });
};