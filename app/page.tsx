import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import BlogTeaser from "../components/BlogTeaser";
import Footer from "../components/Footer";
import NotificationPrompt from '../components/NotificationPrompt';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import PushPrompt from '../components/PushPrompt';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Header/>
      <main>
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Uncover Insights in <span className="text-primary">60 Seconds</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
          Join 10,000+ teams using AI to turn raw data into decisions — no code needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/signup"
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition"
          >
            Start Free Trial
          </Link>
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/10 transition">
            Watch Demo
          </button>
        </div>
      </section>

      <PushPrompt />
      <PWAInstallPrompt />
      <NotificationPrompt />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <BlogTeaser />
      </main>
      <Footer />
    </>
  );
}
