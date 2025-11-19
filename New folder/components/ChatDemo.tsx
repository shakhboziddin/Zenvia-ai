"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import DemoChat from "@/components/DemoChat";
import { ArrowRight, Zap, Workflow, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Background Layer (safe) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-900 opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-500/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[160px]" />
      </div>

      {/* Navbar */}
      <div className="relative z-[1000]">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-[2000] min-h-[95vh] flex flex-col justify-center items-center px-6 lg:px-20 pt-20 lg:pt-28 text-center">
        
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
          Automate your business with an{" "}
          <span className="text-primary-400">AI Agent</span>
          <br />
          that works <span className="text-indigo-400">24/7</span>
        </h1>

        <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl">
          Connect your systems, automate conversations, and boost revenue using intelligent AI workflows — without any engineering effort.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/demo"
            className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 transition text-white font-medium text-lg flex items-center gap-2"
          >
            Book a Live Demo <ArrowRight size={18} />
          </Link>

          <Link
            href="#"
            className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-600 hover:border-primary-500 hover:text-primary-400 transition text-white font-medium text-lg"
          >
            Learn More
          </Link>
        </div>

        {/* FIXED CHAT — now clickable ALWAYS */}
        <div className="relative hidden lg:block mt-16 z-[9999] pointer-events-auto">
          <DemoChat />
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-[2000] py-24 px-6 lg:px-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-14">
          Why businesses choose our AI Agents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-primary-400" />}
            title="Instant Automation"
            description="Turn repetitive tasks into autonomous AI workflows without writing a single line of code."
          />
          <FeatureCard
            icon={<Workflow className="w-8 h-8 text-indigo-400" />}
            title="Smart Integrations"
            description="Connect with CRM, WhatsApp, email, internal tools, and custom APIs effortlessly."
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-pink-400" />}
            title="Human-Level Experience"
            description="Provide personalized interactions that feel natural, consistent, and fast."
          />
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section className="relative z-[3000] py-24 px-6 lg:px-20 bg-slate-900/30 backdrop-blur-xl border-t border-slate-800">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-14">
          See the AI Agent in Action
        </h2>

        {/* FIXED CHAT — demo section */}
        <div className="max-w-md mx-auto relative z-[9999] pointer-events-auto">
          <DemoChat />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-[2000] p-10 text-center text-slate-400 border-t border-slate-800 mt-20">
        © 2025 Zenvia AI — All Rights Reserved.
      </footer>
    </div>
  );
}

/* SUB-COMPONENTS */
function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl p-7 rounded-2xl border border-slate-700 hover:border-primary-500 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}
