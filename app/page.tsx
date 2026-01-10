"use client";

import React, { useState } from "react";
import { Clock, ChevronRight, Award, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy load sections
const AboutSection = dynamic(() => import("./components/home/AboutSection"), {
  loading: () => (
    <div className="h-96 w-full flex items-center justify-center bg-slate-50">
      <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const ServicesSection = dynamic(
  () => import("./components/home/ServicesSection")
);
const StatsSection = dynamic(() => import("./components/home/StatsSection"));
const TeamSection = dynamic(() => import("./components/home/TeamSection"));
const ContactSection = dynamic(
  () => import("./components/home/ContactSection")
);
const FooterSection = dynamic(() => import("./components/home/FooterSection"));

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <a href="#">
                <Image
                  src="/images/brand/logo-header.png"
                  alt="PPD Logo"
                  width={150}
                  height={48}
                  className="h-12 w-auto object-contain cursor-pointer"
                  priority
                />
              </a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a
                href="#tentang"
                className="hover:text-brand-700 transition-colors"
              >
                Tentang
              </a>
              <a
                href="#layanan"
                className="hover:text-brand-700 transition-colors"
              >
                Layanan
              </a>
              <a
                href="#portofolio"
                className="hover:text-brand-700 transition-colors"
              >
                Portofolio
              </a>
              <a href="#tim" className="hover:text-brand-700 transition-colors">
                Tim Ahli
              </a>
              <a
                href="#kontak"
                className="px-5 py-2.5 bg-brand-700 hover:bg-brand-900 text-white rounded-full transition-colors"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-brand-700 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full z-50 shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a
                href="#tentang"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang
              </a>
              <a
                href="#layanan"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Layanan
              </a>
              <a
                href="#tim"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tim Ahli
              </a>
              <a
                href="#portofolio"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portofolio
              </a>
              <a
                href="#kontak"
                className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-brand-700 text-white hover:bg-brand-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section / Jumbotron */}
      <section className="relative overflow-hidden bg-brand-50 flex min-h-[75vh]">
        <div className="absolute inset-0 bg-brand-50 opacity-7">
          <Image
            src="/images/backgrounds/batik.png"
            alt="Batik Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold mb-6">
                <Award className="w-3 h-3 mr-2" />
                Mitra Strategis Pemerintahan
              </div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight leading-tight mb-6">
                Membangun Daerah{" "}
                <span className="text-brand-500">Inklusif</span> &{" "}
                <span className="text-brand-700">Berkelanjutan</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Pusat kajian riset dan inovasi kebijakan publik untuk mendukung
                transformasi pembangunan daerah di Indonesia yang lebih baik.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#tentang"
                  className="px-7 py-3.5 bg-brand-700 hover:bg-brand-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center"
                >
                  Pelajari Lebih Lanjut
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              className="relative w-full h-full flex justify-center items-center"
            >
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="relative w-full aspect-video bg-brand-900 rounded-2xl shadow-2xl border-4 border-white flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <Image
                  src="/images/home/research.jpg"
                  alt="PPD Research Activities"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Floating */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto px-4 -mt-12 relative z-20"
      >
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:border-r border-slate-100">
            <div className="text-4xl font-bold text-brand-700 mb-1">35+</div>
            <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
              Proyek Selesai
            </div>
          </div>
          <div className="text-center md:border-r border-slate-100">
            <div className="text-4xl font-bold text-green-600 mb-1">15+</div>
            <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
              Tim Ahli
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-500 mb-1">5+</div>
            <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
              Tahun Pengalaman
            </div>
          </div>
        </div>
      </motion.div>

      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
