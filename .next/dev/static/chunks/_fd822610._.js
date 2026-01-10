(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/home/StatsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Lazy load chart components
const ProjectChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/components/ProjectChart.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/app/components/ProjectChart.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full bg-white/5 animate-pulse rounded-lg"
        }, void 0, false, {
            fileName: "[project]/app/components/home/StatsSection.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ProjectChart;
const ClientChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/components/ClientChart.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/app/components/ClientChart.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full bg-white/5 animate-pulse rounded-lg"
        }, void 0, false, {
            fileName: "[project]/app/components/home/StatsSection.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = ClientChart;
function StatsSection() {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    const fadeInUp = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };
    const staggerContainer = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const collaborations = [
        {
            year: "2021",
            title: "Kajian Evaluasi RPJMD Kab. Mimika",
            client: "Bappeda Kab. Mimika"
        },
        {
            year: "2025",
            title: "RPJMD Kab. Mimika 2025-2029",
            client: "Bappeda Kab. Mimika"
        },
        {
            year: "2025",
            title: "Renstra Dinas Lingkungan Hidup",
            client: "DLH Kab. Mimika"
        },
        {
            year: "2025",
            title: "KLHS RPJMD Kab. Nabire",
            client: "DLH Kab. Nabire"
        },
        {
            year: "2026",
            title: "Rancangan Awal RKPD 2027",
            client: "Bappeda Tana Tidung"
        }
    ];
    // Data for charts
    const collaborationData = [
        {
            year: "2021",
            projects: 3
        },
        {
            year: "2022",
            projects: 8
        },
        {
            year: "2023",
            projects: 14
        },
        {
            year: "2024",
            projects: 20
        },
        {
            year: "2025",
            projects: 35
        },
        {
            year: "2026",
            projects: 1
        }
    ];
    const clientDistribution = [
        {
            name: "Bappeda Mimika",
            value: 18
        },
        {
            name: "Bappeda Tana Tidung",
            value: 22
        },
        {
            name: "DPRD Balikpapan",
            value: 2
        },
        {
            name: "Lainnya",
            value: 12
        }
    ];
    const projectHistory = [
        // 2021
        {
            year: "2021",
            title: "Kajian Evaluasi RPJMD dan Renstra Perangkat Daerah Kabupaten Mimika",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2021",
            title: "Kajian Naskah Akademik Tentang Penyelenggaraan Reklame Di Kota Balikpapan",
            client: "DPRD Kota Balikpapan"
        },
        {
            year: "2021",
            title: "Kajian Analisis Kondisi Makro Ekonomi Daerah Kabupaten Tana Tidung 2022",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        // 2022
        {
            year: "2022",
            title: "Penyusunan Naskah Akademik dan Ranperda Kota Balikpapan",
            client: "DPRD Kota Balikpapan"
        },
        {
            year: "2022",
            title: "Review RPJMD Kabupaten Mimika 2020-2024",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2022",
            title: "Penyusunan LAKIP Kabupaten Mimika 2021",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2022",
            title: "Penyusunan Analisis Kondisi Makro Kabupaten Tana Tidung Tahun 2023",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        {
            year: "2022",
            title: "Penyusunan Laporan Isu Strategis Kabupaten Tana Tidung Tahun 2023",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        // 2023
        {
            year: "2023",
            title: "Penyusunan Perubahan RPJMD Kabupaten Tana Tidung 2021-2026",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        {
            year: "2023",
            title: "Pendampingan Perubahan Renstra Dinas Pendidikan dan Kebudayaan Kabupaten Tana Tidung 2021-2026",
            client: "Disdikbud Kabupaten Tana Tidung"
        },
        {
            year: "2023",
            title: "Penyusunan LAKIP Dinas Pendidikan dan Kebudayaan Kabupaten Tana Tidung 2022",
            client: "Disdikbud Kabupaten Tana Tidung"
        },
        {
            year: "2023",
            title: "Evaluasi RKPD Kabupaten Mimika Tahun 2022",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2023",
            title: "Evaluasi RPJMD Kabupaten Mimika Tahun 2020-2024",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2023",
            title: "Penyusunan Naskah Teknokratik RPJMD Kabupaten Mimika Tahun 2025-2029",
            client: "Bappeda Kabupaten Mimika"
        },
        // 2024
        {
            year: "2024",
            title: "Penyusunan RKPD Kabupaten Tana Tidung Tahun 2025",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        {
            year: "2024",
            title: "Penyusunan Evaluasi RKPD Kabupaten Mimika 2023",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2024",
            title: "Penyusunan Rencana Induk Penelitian dan Pengembangan Kabupaten Tana Tidung 2025-2029",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        {
            year: "2024",
            title: "Penyusunan Dokumen Percepatan Penurunan Kemiskinan Ekstrem Kabupaten Tana Tidung",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        {
            year: "2024",
            title: "Rancangan Awal Renstra Bappeda Kabupaten Mimika Tahun 2025-2029",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2024",
            title: "Rancangan Awal RKPD 2026 Kabupaten Tana Tidung",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        // 2025
        {
            year: "2025",
            title: "Rancangan Akhir RKPD 2026 Kabupaten Tana Tidung",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        {
            year: "2025",
            title: "RKPD Perubahan 2025 Kabupaten Tana Tidung",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        },
        {
            year: "2025",
            title: "Pengukuran Indeks Pembangunan Kabupaten Mimika",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Pengukuran IPEMAS, IDI, Angka Kriminalitas 2025 Kabupaten Mimika",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "RPJMD Kabupaten Mimika 2025-2029",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Bappeda dan Asistensi Renstra OPD 2025 Kabupaten Mimika",
            client: "Bappeda Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Disparbudpora Kabupaten Mimika 2025-2029",
            client: "Disparbudpora Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Badan Kesbangpol Kabupaten Mimika 2025-2029",
            client: "Kesbangpol Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Dinas Lingkungan Hidup Kabupaten Mimika 2025-2029",
            client: "Dinas Lingkungan Hidup Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Dinas Ketahanan Pangan 2025-2029",
            client: "Dinas Ketahanan Pangan Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Dinas Sosial 2025-2029",
            client: "Dinas Sosial Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Dinas Tenaga Kerja 2025-2029",
            client: "Dinas Tenaga Kerja Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Dinas Perikanan 2025-2029",
            client: "Dinas Perikanan Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan Renstra Distrik Iwaka 2025-2029",
            client: "Distrik Iwaka Kabupaten Mimika"
        },
        {
            year: "2025",
            title: "Penyusunan KLHS RPJMD Kabupaten Nabire 2025-2029",
            client: "Dinas Lingkungan Hidup Kabupaten Nabire"
        },
        // 2026
        {
            year: "2026",
            title: "Penyusunan Rancangan Awal RKPD Tahun 2027 Kabupaten Tana Tidung",
            client: "Bappeda dan Litbang Kabupaten Tana Tidung"
        }
    ].sort((a, b)=>Number(b.year) - Number(a.year));
    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = projectHistory.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(projectHistory.length / itemsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portofolio",
        className: "py-20 bg-brand-900 text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[500px] h-[500px] bg-brand-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            }, void 0, false, {
                fileName: "[project]/app/components/home/StatsSection.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            }, void 0, false, {
                fileName: "[project]/app/components/home/StatsSection.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true
                        },
                        variants: fadeInUp,
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-brand-100 mb-4 border border-white/10",
                                children: "Portofolio"
                            }, void 0, false, {
                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold mb-4",
                                children: "Rekam Jejak & Dampak"
                            }, void 0, false, {
                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-brand-100 max-w-2xl mx-auto text-lg leading-relaxed",
                                children: "Data pertumbuhan proyek dan jangkauan kerjasama kami."
                            }, void 0, false, {
                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/home/StatsSection.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-8 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true
                                },
                                variants: fadeInUp,
                                className: "bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white mb-6 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                                                className: "mr-3 text-brand-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                                lineNumber: 330,
                                                columnNumber: 15
                                            }, this),
                                            " Pertumbuhan Proyek"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-72 w-full min-w-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectChart, {
                                            data: collaborationData
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/StatsSection.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true
                                },
                                variants: fadeInUp,
                                className: "bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white mb-6 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                                className: "mr-3 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, this),
                                            " Distribusi Klien"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-72 w-full min-w-0 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientChart, {
                                            data: clientDistribution
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/StatsSection.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/home/StatsSection.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-12 gap-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true
                                },
                                variants: staggerContainer,
                                className: "bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border-b border-white/10 flex justify-between items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white",
                                            children: "Histori Kerjasama"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/StatsSection.tsx",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-sm text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-white/5 text-brand-100 uppercase tracking-wider text-xs font-semibold",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4",
                                                                children: "Tahun"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4",
                                                                children: "Sektor/Kegiatan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-6 py-4",
                                                                children: "Mitra/Klien"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/StatsSection.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-white/10",
                                                    children: currentItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-white/5 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 font-medium text-white",
                                                                    children: item.year
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/home/StatsSection.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/home/StatsSection.tsx",
                                                                    lineNumber: 387,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 text-brand-100",
                                                                    children: item.client
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/home/StatsSection.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/components/home/StatsSection.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/StatsSection.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/StatsSection.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-t border-white/10 flex justify-between items-center bg-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-300",
                                                children: [
                                                    "Halaman ",
                                                    currentPage,
                                                    " dari ",
                                                    totalPages
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                                                        disabled: currentPage === 1,
                                                        className: "px-3 py-1 text-sm bg-brand-700 text-white rounded hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                        children: "Previous"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                                                        disabled: currentPage === totalPages,
                                                        className: "px-3 py-1 text-sm bg-brand-700 text-white rounded hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                        children: "Next"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                                lineNumber: 401,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/home/StatsSection.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/home/StatsSection.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/StatsSection.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/home/StatsSection.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/home/StatsSection.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/home/StatsSection.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
_s(StatsSection, "6xAUoJ2motYJ38x4zeUWisA+X/4=");
_c2 = StatsSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProjectChart");
__turbopack_context__.k.register(_c1, "ClientChart");
__turbopack_context__.k.register(_c2, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/home/StatsSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/components/home/StatsSection.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChartNoAxesColumn
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 21v-6",
            key: "1hz6c0"
        }
    ],
    [
        "path",
        {
            d: "M12 21V3",
            key: "1lcnhd"
        }
    ],
    [
        "path",
        {
            d: "M19 21V9",
            key: "unv183"
        }
    ]
];
const ChartNoAxesColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chart-no-axes-column", __iconNode);
;
 //# sourceMappingURL=chart-no-axes-column.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChartPie
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
            key: "pzmjnu"
        }
    ],
    [
        "path",
        {
            d: "M21.21 15.89A10 10 0 1 1 8 2.83",
            key: "k2fpak"
        }
    ]
];
const ChartPie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chart-pie", __iconNode);
;
 //# sourceMappingURL=chart-pie.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PieChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_fd822610._.js.map