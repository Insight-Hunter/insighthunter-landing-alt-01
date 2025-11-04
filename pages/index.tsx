import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import BlogTeaser from '../components/BlogTeaser';
import PricingTable from '../components/PricingTable';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>InsightHunter.app | AI-Powered Business Intelligence</title>
        <meta name="description" content="Unlock actionable insights in minutes with AI-powered analytics. Start your free trial today." />
        <meta property="og:image" content="/images/og-banner.webp" />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <HowItWorks />
        <Testimonials />
        <BlogTeaser />
        <PricingTable />
      </main>
      <Footer />
    </>
  );
}

