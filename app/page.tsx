"use client";

import React from "react";
import {
  Users,
  Target,
  FileText,
  BookOpen,
  Handshake,
  Award,
  Book,
  Building,
  Globe,
  Layout,
  Lightbulb,
  MapPin,
  Phone,
  BarChart2,
  PieChart,
  Clock,
  Mail,
  ChevronRight,
  ArrowUpRight,
  Linkedin,
  Instagram,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
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

  const COLORS = ["#2563eb", "#0891b2", "#f59e0b", "#64748b"];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-brand-900 text-white p-2 rounded-lg">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-brand-900 leading-none">
                  PPD
                </h1>
                <p className="text-xs text-brand-500 font-medium">
                  Universitas Brawijaya
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-brand-700 transition-colors">
                Beranda
              </a>
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-brand-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold mb-6">
                <Award className="w-3 h-3 mr-2" />
                Mitra Strategis Pemerintahan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-900 tracking-tight leading-tight mb-6">
                Membangun Daerah{" "}
                <span className="text-brand-500">Inklusif</span> &{" "}
                <span className="text-green-600">Berkelanjutan</span>
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
                <div className="flex items-center text-slate-500 text-sm font-medium px-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Sejak 2021
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <img
                src="https://placehold.co/800x600/1e3a8a/FFFFFF?text=PPD+Research+Activites"
                alt="Research Activity"
                className="relative rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Floating */}
      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
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
      </div>

      {/* About Us Section */}
      <section
        id="tentang"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Sekilas */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <img
                src="https://placehold.co/600x700/e2e8f0/1e293b?text=Gedung+PPD+FIA+UB"
                alt="Gedung PPD"
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-brand-500 uppercase tracking-widest mb-2">
                Tentang Kami
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                SEKILAS
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6 text-justify">
                Pusat Kajian Pembangunan Daerah (PPD) Fakultas Ilmu Administrasi
                Universitas Brawijaya, sebuah lembaga riset yang didedikasikan
                untuk memajukan pemahaman inovasi dalam perencanaan pembangunan
                dan kebijakan publik yang mendukung pembangunan daerah di
                Indonesia.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                Didirikan di bawah naungan Fakultas Ilmu Administrasi,
                Universitas Brawijaya, PPD berkomitmen untuk menjadi pusat
                keunggulan dalam studi kebijakan publik yang berdampak pada
                pembangunan yang berkelanjutan dan inklusif di seluruh negeri.
              </p>
            </div>
          </div>

          {/* Visi Misi */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-900 rounded-3xl overflow-hidden">
              <img
                src="https://placehold.co/1200x600/1e293b/FFFFFF?text=Background+Boats"
                alt="Background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>

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
                    Menjadi pemimpin dalam penelitian dan pengembangan
                    perencanaan pembangunan dan kebijakan publik yang mendukung
                    transformasi pembangunan daerah yang inklusif dan
                    berkelanjutan di Indonesia.
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Layanan & Keahlian
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Beragam solusi riset dan pendampingan strategis untuk menjawab
              tantangan pembangunan daerah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-brand-300 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {program.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-brand-100 mb-4 border border-white/10">
              Data &amp; Statistik
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Jejak Langkah & Dampak
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Chart 1 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <BarChart2 className="mr-3 text-brand-500" /> Pertumbuhan Proyek
              </h3>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={collaborationData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#ffffff20"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="year"
                      stroke="#94a3b8"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F2854",
                        border: "none",
                        borderRadius: "8px",
                        color: "white",
                      }}
                      itemStyle={{ color: "white" }}
                      cursor={{ fill: "#ffffff10" }}
                    />
                    <Bar
                      dataKey="projects"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <PieChart className="mr-3 text-emerald-400" /> Distribusi Klien
              </h3>
              <div className="h-72 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={clientDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {clientDistribution.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          stroke="rgba(0,0,0,0)"
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F2854",
                        border: "none",
                        borderRadius: "8px",
                        color: "white",
                      }}
                      itemStyle={{ color: "white" }}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      iconType="circle"
                      wrapperStyle={{ color: "#cbd5e1", fontSize: "12px" }}
                    />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="tim" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-brand-900 mb-6">
                Tim Ahli & Praktisi
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Didukung oleh akademisi dan praktisi berpengalaman dari Fakultas
                Ilmu Administrasi Universitas Brawijaya yang memiliki dedikasi
                tinggi dalam pengembangan keilmuan dan praktik administrasi
                publik.
              </p>

              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 mb-8">
                <h4 className="font-bold text-brand-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" /> Pimpinan
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <img
                      src="https://ui-avatars.com/api/?name=Abdullah+Said&background=1e40af&color=fff"
                      alt="AS"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-slate-800">
                        Prof. Dr. Abdullah Said, M.Si
                      </div>
                      <div className="text-xs text-brand-500 font-semibold uppercase">
                        Ketua PPD
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <img
                      src="https://ui-avatars.com/api/?name=Yuniadi+Mayowan&background=d97706&color=fff"
                      alt="YM"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-slate-800">
                        Dr. Yuniadi Mayowan, S.Sos., M.AB
                      </div>
                      <div className="text-xs text-amber-600 font-semibold uppercase">
                        Bendahara
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <img
                      src="https://ui-avatars.com/api/?name=Andhyka+Muttaqin&background=047857&color=fff"
                      alt="AM"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-slate-800">
                        Andhyka Muttaqin, S.AP., MPA
                      </div>
                      <div className="text-xs text-green-600 font-semibold uppercase">
                        Sekretaris
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-4">
                  Daftar Tim Ahli
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experts.map((expert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 rounded-lg hover:bg-brand-50 transition-colors border border-transparent hover:border-brand-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-500 mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium text-slate-700">
                        {expert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="kontak"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Siap membantu kebutuhan riset dan kebijakan pembangunan daerah
              Anda.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-brand-900 mb-6">
                  Informasi Kontak
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-lg text-brand-700 mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Alamat Kantor
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Fakultas Ilmu Administrasi, Universitas Brawijaya
                        <br />
                        JL. MT. Haryono 163, Malang 65145, Jawa Timur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-lg text-brand-700 mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Telepon</h4>
                      <p className="text-slate-600">0812-3583-5150</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-lg text-brand-700 mr-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                      <p className="text-slate-600">ppd@ub.ac.id</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 lg:h-auto bg-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.469848447585!2d112.61196057524336!3d-7.95030099207412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788276d7eb437f%3A0xd8df90ce2e2f59f6!2sFaculty%20of%20Administrative%20Sciences!5e0!3m2!1sen!2ssg!4v1767947928114!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients - Marquee Style (Simulated) */}
      <section className="py-12 border-y border-slate-100 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Mitra Strategis
          </h3>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using Placeholders for Logos */}
            <div className="h-12 w-auto flex items-center font-bold text-slate-400 text-xl">
              <Building className="mr-2" />
              BAPPEDA MIMIKA
            </div>
            <div className="h-12 w-auto flex items-center font-bold text-slate-400 text-xl">
              <Building className="mr-2" />
              KAB TANA TIDUNG
            </div>
            <div className="h-12 w-auto flex items-center font-bold text-slate-400 text-xl">
              <Building className="mr-2" />
              DPRD BALIKPAPAN
            </div>
            <div className="h-12 w-auto flex items-center font-bold text-slate-400 text-xl">
              <Building className="mr-2" />
              PEMKAB NABIRE
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-100 pt-20 pb-10 px-4 sm:px-6 lg:px-8 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Building className="w-8 h-8 text-brand-500" />
              <span className="text-xl font-bold">PPD</span>
            </div>
            <p className="mb-6 leading-relaxed text-brand-100">
              Mitra terpercaya dalam riset kebijakan dan perencanaan pembangunan
              daerah yang berkelanjutan.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors text-white"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                <span>
                  Fakultas Ilmu Administrasi,
                  <br />
                  Universitas Brawijaya, Malang
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                <span>0812-3583-5150</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                <span>ppd@ub.ac.id</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Menu</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#tentang"
                  className="hover:text-brand-300 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:text-brand-300 transition-colors"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#tim"
                  className="hover:text-brand-300 transition-colors"
                >
                  Tim Ahli
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className="hover:text-brand-300 transition-colors"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Jam Operasional</h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Senin - Jumat</span>
                <span className="text-white">08:00 - 16:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sabtu</span>
                <span className="text-white">08:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu</span>
                <span className="text-red-400">Tutup</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-500">
          <p>
            © {new Date().getFullYear()} Pusat Kajian Perencanaan Pembangunan
            Daerah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
