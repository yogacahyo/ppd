"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Instagram, Globe, Mail, MapPin, Phone } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-brand-900 text-brand-100 pt-20 pb-10 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="mb-6">
            <Image
              src="/images/brand/logo-footer.png"
              alt="PPD Logo"
              width={150}
              height={48}
              className="h-12 w-auto object-contain"
            />
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
              <a href="#tim" className="hover:text-brand-300 transition-colors">
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
  );
}
