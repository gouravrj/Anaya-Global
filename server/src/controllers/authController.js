import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function loginAdmin(req, res) {
  const { email, password } = req.body;

  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
    return res.status(500).json({ message: 'Admin environment variables are not configured.' });
  }

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const emailMatches = email.toLowerCase() === process.env.ADMIN_EMAIL.toLowerCase();
  const storedPassword = process.env.ADMIN_PASSWORD;
  const passwordMatches = storedPassword.startsWith('$2')
    ? await bcrypt.compare(password, storedPassword)
    : password === storedPassword;

  if (!emailMatches || !passwordMatches) {
    return res.status(401).json({ message: 'Invalid admin credentials.' });
  }

  const token = jwt.sign({ email: process.env.ADMIN_EMAIL, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.json({ token });
}
