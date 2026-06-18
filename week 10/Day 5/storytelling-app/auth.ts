import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: number;
  };
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(403).json({ message: 'Authentication required. No token provided.' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Invalid or expired token.' });
      return;
    }
    req.user = user as { userId: number };
    next();
  });
};

export const refreshAccessToken = (
  req: AuthenticatedRequest,
  res: Response
): void => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    res.status(403).json({ message: 'Refresh token not found.' });
    return;
  }

  jwt.verify(refreshToken, process.env.REFRESH_SECRET!, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Invalid or expired refresh token.' });
      return;
    }

    const newAccessToken = jwt.sign(
      { userId: (user as { userId: number }).userId },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });
  });
};