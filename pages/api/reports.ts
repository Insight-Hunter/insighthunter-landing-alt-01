import { generateReport } from '../../lib/pdf';

export default async function handler(req, res) {
  const { name, score, insights } = req.body;
  const pdfBuffer = await generateReport({ name, score, insights });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${name}-report.pdf"`);
  res.send(pdfBuffer);
}
