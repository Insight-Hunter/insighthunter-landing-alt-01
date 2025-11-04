import { D1, KV } from '../lib/cfBindings';

await D1.blog_posts.put({
  slug: 'ai-trends-2025',
  title: 'Top 5 AI Trends for 2025',
  excerpt: 'Explore predictive analytics, generative models, and decision engines.',
  author: 'James M. Turner',
  content: '## AI Trend 1\n\nReal-time predictive modeling...',
});

await KV.setToken('demo@user.com', 'preview-token');

console.log('Preview content seeded.');
