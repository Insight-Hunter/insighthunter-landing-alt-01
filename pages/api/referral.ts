import { Durable } from '../../lib/cfBindings';

export default async function handler(req, res) {
  const { code } = req.query;
  await Durable.trackReferral(code as string);
  res.status(200).json({ success: true });
}
