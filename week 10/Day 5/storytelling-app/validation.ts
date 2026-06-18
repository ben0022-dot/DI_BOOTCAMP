export const validateRegistration = (
  username: string,
  email: string,
  password: string
): { valid: boolean; message: string } => {
  if (!username || !email || !password) {
    return { valid: false, message: 'All fields are required.' };
  }

  if (username.trim().length < 3) {
    return { valid: false, message: 'Username must be at least 3 characters long.' };
  }

  if (username.trim().length > 50) {
    return { valid: false, message: 'Username must be less than 50 characters.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Invalid email format.' };
  }

  if (password.length < 6) {
    return { valid: false, message: 'Password must be at least 6 characters long.' };
  }

  return { valid: true, message: '' };
};

export const validateLogin = (
  email: string,
  password: string
): { valid: boolean; message: string } => {
  if (!email || !password) {
    return { valid: false, message: 'Email and password are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Invalid email format.' };
  }

  return { valid: true, message: '' };
};

export const validateStory = (
  title: string,
  content: string
): { valid: boolean; message: string } => {
  if (!title || !content) {
    return { valid: false, message: 'Title and content are required.' };
  }

  if (title.trim().length < 1) {
    return { valid: false, message: 'Title cannot be empty.' };
  }

  if (title.trim().length > 255) {
    return { valid: false, message: 'Title must be less than 255 characters.' };
  }

  if (content.trim().length < 1) {
    return { valid: false, message: 'Content cannot be empty.' };
  }

  return { valid: true, message: '' };
};

export const validateContributor = (
  storyId: number,
  userId: number
): { valid: boolean; message: string } => {
  if (!storyId || !userId) {
    return { valid: false, message: 'Story ID and User ID are required.' };
  }

  if (storyId <= 0 || userId <= 0) {
    return { valid: false, message: 'Story ID and User ID must be positive numbers.' };
  }

  return { valid: true, message: '' };
};