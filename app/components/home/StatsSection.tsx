"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { BarChart2, PieChart } from "lucide-react";
import SectionHeader from "../SectionHeader";

// Lazy load chart components
const ProjectChart = dynamic(() => import("../ProjectChart"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-white/5 animate-pulse rounded-lg"></div>
  ),
});
const ClientChart = dynamic(() => import("../ClientChart"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-white/5 animate-pulse rounded-lg"></div>
  ),
});

export default function StatsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const collaborations = [
    {
      year: "2021",
      title: "Kajian Evaluasi RPJMD Kab. Mimika",
      client: "Bappeda Kab. Mimika",
    },
    {
      year: "2025",
      title: "RPJMD Kab. Mimika 2025-2029",
      client: "Bappeda Kab. Mimika",
    },
    {
      year: "2025",
      title: "Renstra Dinas Lingkungan Hidup",
      client: "DLH Kab. Mimika",
    },
    {
      year: "2025",
      title: "KLHS RPJMD Kab. Nabire",
      client: "DLH Kab. Nabire",
    },
    {
      year: "2026",
      title: "Rancangan Awal RKPD 2027",
      client: "Bappeda Tana Tidung",
    },
  ];

  // Data for charts
  const collaborationData = [
    { year: "2021", projects: 3 },
    { year: "2022", projects: 8 },
    { year: "2023", projects: 14 },
    { year: "2024", projects: 20 },
    { year: "2025", projects: 35 },
    { year: "2026", projects: 1 },
  ];

  const clientDistribution = [
    { name: "Bappeda Mimika", value: 18 },
    { name: "Bappeda Tana Tidung", value: 22 },
    { name: "DPRD Balikpapan", value: 2 },
    { name: "Lainnya", value: 12 },
  ];

  const projectHistory = [
    // 2021
    {
      year: "2021",
      title:
        "Kajian Evaluasi RPJMD dan Renstra Perangkat Daerah Kabupaten Mimika",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2021",
      title:
        "Kajian Naskah Akademik Tentang Penyelenggaraan Reklame Di Kota Balikpapan",
      client: "DPRD Kota Balikpapan",
    },
    {
      year: "2021",
      title:
        "Kajian Analisis Kondisi Makro Ekonomi Daerah Kabupaten Tana Tidung 2022",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    // 2022
    {
      year: "2022",
      title: "Penyusunan Naskah Akademik dan Ranperda Kota Balikpapan",
      client: "DPRD Kota Balikpapan",
    },
    {
      year: "2022",
      title: "Review RPJMD Kabupaten Mimika 2020-2024",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2022",
      title: "Penyusunan LAKIP Kabupaten Mimika 2021",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2022",
      title:
        "Penyusunan Analisis Kondisi Makro Kabupaten Tana Tidung Tahun 2023",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    {
      year: "2022",
      title:
        "Penyusunan Laporan Isu Strategis Kabupaten Tana Tidung Tahun 2023",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    // 2023
    {
      year: "2023",
      title: "Penyusunan Perubahan RPJMD Kabupaten Tana Tidung 2021-2026",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    {
      year: "2023",
      title:
        "Pendampingan Perubahan Renstra Dinas Pendidikan dan Kebudayaan Kabupaten Tana Tidung 2021-2026",
      client: "Disdikbud Kabupaten Tana Tidung",
    },
    {
      year: "2023",
      title:
        "Penyusunan LAKIP Dinas Pendidikan dan Kebudayaan Kabupaten Tana Tidung 2022",
      client: "Disdikbud Kabupaten Tana Tidung",
    },
    {
      year: "2023",
      title: "Evaluasi RKPD Kabupaten Mimika Tahun 2022",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2023",
      title: "Evaluasi RPJMD Kabupaten Mimika Tahun 2020-2024",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2023",
      title:
        "Penyusunan Naskah Teknokratik RPJMD Kabupaten Mimika Tahun 2025-2029",
      client: "Bappeda Kabupaten Mimika",
    },
    // 2024
    {
      year: "2024",
      title: "Penyusunan RKPD Kabupaten Tana Tidung Tahun 2025",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    {
      year: "2024",
      title: "Penyusunan Evaluasi RKPD Kabupaten Mimika 2023",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2024",
      title:
        "Penyusunan Rencana Induk Penelitian dan Pengembangan Kabupaten Tana Tidung 2025-2029",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    {
      year: "2024",
      title:
        "Penyusunan Dokumen Percepatan Penurunan Kemiskinan Ekstrem Kabupaten Tana Tidung",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    {
      year: "2024",
      title: "Rancangan Awal Renstra Bappeda Kabupaten Mimika Tahun 2025-2029",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2024",
      title: "Rancangan Awal RKPD 2026 Kabupaten Tana Tidung",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    // 2025
    {
      year: "2025",
      title: "Rancangan Akhir RKPD 2026 Kabupaten Tana Tidung",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    {
      year: "2025",
      title: "RKPD Perubahan 2025 Kabupaten Tana Tidung",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
    {
      year: "2025",
      title: "Pengukuran Indeks Pembangunan Kabupaten Mimika",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Pengukuran IPEMAS, IDI, Angka Kriminalitas 2025 Kabupaten Mimika",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "RPJMD Kabupaten Mimika 2025-2029",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2025",
      title:
        "Penyusunan Renstra Bappeda dan Asistensi Renstra OPD 2025 Kabupaten Mimika",
      client: "Bappeda Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Penyusunan Renstra Disparbudpora Kabupaten Mimika 2025-2029",
      client: "Disparbudpora Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Penyusunan Renstra Badan Kesbangpol Kabupaten Mimika 2025-2029",
      client: "Kesbangpol Kabupaten Mimika",
    },
    {
      year: "2025",
      title:
        "Penyusunan Renstra Dinas Lingkungan Hidup Kabupaten Mimika 2025-2029",
      client: "Dinas Lingkungan Hidup Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Penyusunan Renstra Dinas Ketahanan Pangan 2025-2029",
      client: "Dinas Ketahanan Pangan Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Penyusunan Renstra Dinas Sosial 2025-2029",
      client: "Dinas Sosial Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Penyusunan Renstra Dinas Tenaga Kerja 2025-2029",
      client: "Dinas Tenaga Kerja Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Penyusunan Renstra Dinas Perikanan 2025-2029",
      client: "Dinas Perikanan Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Penyusunan Renstra Distrik Iwaka 2025-2029",
      client: "Distrik Iwaka Kabupaten Mimika",
    },
    {
      year: "2025",
      title: "Penyusunan KLHS RPJMD Kabupaten Nabire 2025-2029",
      client: "Dinas Lingkungan Hidup Kabupaten Nabire",
    },
    // 2026
    {
      year: "2026",
      title: "Penyusunan Rancangan Awal RKPD Tahun 2027 Kabupaten Tana Tidung",
      client: "Bappeda dan Litbang Kabupaten Tana Tidung",
    },
  ].sort((a, b) => Number(b.year) - Number(a.year));

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projectHistory.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projectHistory.length / itemsPerPage);

  return (
    <section
      id="portofolio"
      className="py-20 bg-brand-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          theme="dark"
          title="Rekam Jejak & Dampak"
          subtitle="Portofolio"
          description="Data pertumbuhan proyek dan jangkauan kerjasama kami."
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Chart 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <BarChart2 className="mr-3 text-brand-500" /> Pertumbuhan Proyek
            </h3>
            <div className="h-72 w-full min-w-0">
              <ProjectChart data={collaborationData} />
            </div>
          </motion.div>

          {/* Chart 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <PieChart className="mr-3 text-emerald-400" /> Distribusi Klien
            </h3>
            <div className="h-72 w-full min-w-0 flex items-center justify-center">
              <ClientChart data={clientDistribution} />
            </div>
          </motion.div>
        </div>

        {/* History Table */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  Histori Kerjasama
                </h3>
              </div>
              {/* Desktop View - Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-white/5 text-brand-100 uppercase tracking-wider text-xs font-semibold">
                    <tr>
                      <th className="px-6 py-4">Tahun</th>
                      <th className="px-6 py-4">Sektor/Kegiatan</th>
                      <th className="px-6 py-4">Mitra/Klien</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {currentItems.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-white">
                          {item.year}
                        </td>
                        <td className="px-6 py-4">{item.title}</td>
                        <td className="px-6 py-4 text-brand-100">
                          {item.client}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View - Cards */}
              <div className="md:hidden space-y-4 p-4">
                {currentItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-brand-300 font-bold text-lg">
                        {item.year}
                      </span>
                      <span className="text-xs font-medium text-brand-100 bg-white/10 px-2 py-1 rounded">
                        Project
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-base leading-snug mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400">{item.client}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination Controls */}
              <div className="p-4 border-t border-white/10 flex justify-between items-center bg-white/5">
                <span className="text-sm text-slate-300">
                  Halaman {currentPage} dari {totalPages}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm bg-brand-700 text-white rounded hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm bg-brand-700 text-white rounded hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
