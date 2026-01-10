"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Target,
  BookOpen,
  Lightbulb,
  Book,
  Globe,
  Handshake,
  Award,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerServices = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const smoothFadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0] as any,
      },
    },
  };

  const programs = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Analisis Kebijakan",
      desc: "Analisis mendalam terhadap kebijakan pemerintah dengan fokus dampak pada pembangunan daerah.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Evaluasi Program",
      desc: "Evaluasi berkala dan komprehensif terhadap efektivitas program pembangunan yang berlangsung.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Renstra Daerah",
      desc: "Pendampingan penyusunan rencana pembangunan jangka menengah & panjang berbasis data.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Inovasi Pembangunan",
      desc: "Pengembangan model baru pembangunan untuk pertumbuhan ekonomi dan inklusi sosial.",
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Publikasi Ilmiah",
      desc: "Diseminasi hasil riset melalui jurnal ilmiah dan media untuk peningkatan wawasan publik.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Jejaring Kolaborasi",
      desc: "Membangun ekosistem kerjasama dengan universitas, lembaga riset, dan pemerintah.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Advokasi Kebijakan",
      desc: "Kajian implikasi kebijakan publik sebagai bahan masukan strategis bagi pemangku kepentingan.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Capacity Building",
      desc: "Pelatihan intensif manajemen kebijakan publik bagi aparatur dan stakeholder terkait.",
    },
  ];

  return (
    <section id="layanan" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            Layanan & Keahlian
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Beragam solusi riset dan pendampingan strategis untuk menjawab
            tantangan pembangunan daerah.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerServices}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={smoothFadeInUp}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-600 transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                {program.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{program.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
