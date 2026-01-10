"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function TeamSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leaders = [
    {
      name: "Prof. Dr. Abdullah Said, M.Si",
      role: "Ketua PPD",
      image: "/images/team/abdullah.png",
      roleColor: "text-brand-600",
    },
    {
      name: "Dr. Yuniadi Mayowan, S.Sos., M.AB",
      role: "Bendahara",
      image: "/images/team/yuniadi.png",
      roleColor: "text-amber-600",
    },
    {
      name: "Andhyka Muttaqin, S.AP., MPA",
      role: "Sekretaris",
      image: "/images/team/andhyka.png",
      roleColor: "text-emerald-600",
    },
  ];

  const experts = [
    "Prof. Dr. Abdullah Said, M.Si",
    "Dr. Yuniadi Mayowan, S.Sos., M.AB",
    "Andhyka Muttaqin, S.AP., MPA",
    "M. Chazienul Ulum, S.Sos., MAP",
    "Rizki Yudhi Dewantara, S.Sos., M.AP., MPA",
    "Lusy Deasyana Rahma Devita, S.AB., M.AB",
    "Moch. Zainal Mustofa, S.AP., M.AP",
    "Nur Yudiono, S.AB., M.AB",
    "Wildhan Putra Mahirya, S.AP., M.AP",
    "Fathir Achmad Sulaiman, S.AP., M.AP",
    "M. Robith Alil Fahmi, S.AB., M.AB",
    "Eliana Sandy, S.AB., M.AB",
    "Luqman Abdullah, S.E",
    "Reza Rachman Prasetyadi, S.AB",
    "Hawa Bunga Yowanda, S.AB",
  ];

  return (
    <section id="tim" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Tim Ahli & Praktisi"
          subtitle="Tim Kami"
          description="Didukung oleh akademisi dan praktisi berpengalaman dari Fakultas Ilmu Administrasi Universitas Brawijaya yang memiliki dedikasi tinggi dalam pengembangan keilmuan dan praktik administrasi publik."
        />

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-brand-100 rounded-full blur-xl opacity-50"></div>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full relative z-10 shadow-md border-4 border-white object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {leader.name}
              </h3>
              <span
                className={`text-sm font-bold uppercase tracking-wide ${leader.roleColor}`}
              >
                {leader.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Experts List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-slate-800 flex items-center justify-center">
              <Users className="w-6 h-6 mr-3 text-brand-600" />
              Daftar Tim Ahli
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {experts.map((expert, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-brand-500 mr-3 flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">
                  {expert}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
