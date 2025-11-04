import { KV } from '../../lib/cfBindings';

export default async function handler(req, res) {
  const { email } = req.body;
  const token = Math.random().toString(36).substring(2, 10);
  await KV.setToken(email, token);
  res.status(200).json({ success: true, token });
}
