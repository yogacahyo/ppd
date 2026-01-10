"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = contactForm;
    const phone = "6281235835150";
    const text = `Halo, nama saya ${name}. Mengenai ${subject}: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const partners = [
    { name: "Pemkab Nabire", logo: "/images/partners/partner-1.png" },
    { name: "DPRD Balikpapan", logo: "/images/partners/partner-2.png" },
    { name: "Kab Tana Tidung", logo: "/images/partners/partner-3.png" },
    { name: "Bappeda Mimika", logo: "/images/partners/partner-4.png" },
    { name: "SIN", logo: "/images/partners/partner-5.png" },
    { name: "Universitas Brawijaya", logo: "/images/partners/partner-6.png" },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      } as any,
    },
  };

  return (
    <>
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
                    <div className="bg-brand-50 p-3 rounded-xl mr-4 text-brand-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Alamat Kantor
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Gedung B Lantai 2, Fakultas Ilmu Administrasi
                        <br />
                        Universitas Brawijaya
                        <br />
                        Jl. MT. Haryono 163, Malang 65145
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-50 p-3 rounded-xl mr-4 text-brand-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Telepon</h4>
                      <p className="text-slate-600">0812-3583-5150</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-50 p-3 rounded-xl mr-4 text-brand-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                      <p className="text-slate-600">ppd@ub.ac.id</p>
                    </div>
                  </div>
                </div>

                {/* Map Card */}
                <div className="mt-8">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-brand-600" /> Lokasi
                    Kami
                  </h4>
                  <div className="relative h-64 w-full bg-slate-200 rounded-xl overflow-hidden shadow-md border border-slate-200">
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
              <div className="p-8 lg:p-12 bg-slate-50">
                <h3 className="text-2xl font-bold text-brand-900 mb-6">
                  Kirim Pesan
                </h3>
                <form onSubmit={handleSendMessage} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="Masukkan nama anda"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="Subjek pesan"
                      value={contactForm.subject}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          subject: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={10}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tuliskan pesan anda..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-700 hover:bg-brand-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients - Marquee Style */}
      <section className="py-12 border-y border-slate-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Mitra Strategis
          </h3>
        </div>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center flex-nowrap">
                {partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="h-24 w-auto flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={100}
                      height={60}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
