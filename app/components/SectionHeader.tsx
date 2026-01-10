import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string; // Allow extra classes if needed
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const alignmentClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 ${alignmentClass} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
            isDark
              ? "bg-white/10 text-brand-100 border border-white/10"
              : "bg-brand-50 text-brand-700 border border-brand-100"
          }`}
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            className={`text-lg leading-relaxed max-w-2xl ${
              align === "center" ? "mx-auto" : ""
            } ${isDark ? "text-brand-100" : "text-slate-600"}`}
          >
            {description}
          </p>
          {/* Decorative element for standard look */}
          <div
            className={`h-1.5 w-24 rounded-full mt-6 ${
              align === "center" ? "mx-auto" : ""
            } ${isDark ? "bg-brand-500" : "bg-brand-600"}`}
          ></div>
        </motion.div>
      )}
    </div>
  );
}
