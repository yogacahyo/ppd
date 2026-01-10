"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, FileText } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="tentang"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Sekilas */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <Image
              src="/images/about/building.png"
              alt="Gedung PPD"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionHeader
              align="left"
              subtitle="Sekilas PPD"
              title="Tentang Kami"
              className="!mb-6 bg-transparent"
            />
            <p className="text-slate-600 leading-relaxed text-lg mb-6 text-justify">
              Pusat Kajian Pembangunan Daerah (PPD) Fakultas Ilmu Administrasi
              Universitas Brawijaya, sebuah lembaga riset yang didedikasikan
              untuk memajukan pemahaman inovasi dalam perencanaan pembangunan
              dan kebijakan publik yang mendukung pembangunan daerah di
              Indonesia.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg text-justify">
              Didirikan di bawah naungan Fakultas Ilmu Administrasi, Universitas
              Brawijaya, PPD berkomitmen untuk menjadi pusat keunggulan dalam
              studi kebijakan publik yang berdampak pada pembangunan yang
              berkelanjutan dan inklusif di seluruh negeri.
            </p>
          </motion.div>
        </div>

        {/* Visi Misi */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-900 rounded-3xl overflow-hidden"></div>

          <div className="relative z-10 p-8 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                VISI & MISI
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-300">
                KAMI
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Visi Card */}
              <div className="bg-brand-500/90 backdrop-blur-sm p-8 rounded-2xl text-white shadow-lg transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold">VISI</h4>
                </div>

                <p className="text-lg leading-relaxed font-medium">
                  Menjadi pemimpin dalam penelitian dan pengembangan perencanaan
                  pembangunan dan kebijakan publik yang mendukung transformasi
                  pembangunan daerah yang inklusif dan berkelanjutan di
                  Indonesia.
                </p>
              </div>

              {/* Misi Card */}
              <div className="bg-brand-700/90 backdrop-blur-sm p-8 rounded-2xl text-white shadow-lg transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold">MISI</h4>
                </div>
                <p className="text-lg leading-relaxed font-medium">
                  Menghasilkan riset-riset berkualitas, menyediakan wawasan
                  kebijakan yang berbasis bukti, dan mengadvokasi
                  praktek-praktek terbaik dalam pengelolaan publik dan
                  pembangunan daerah.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
