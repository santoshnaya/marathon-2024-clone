"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Collaboration from "@/components/Collaboration";
import TimeTracking from "@/components/TimeTracking";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Dashboard />
      <Features />
      <Collaboration />
      <TimeTracking />
      <BottomCTA />
      <Footer />
    </main>
  );
}
