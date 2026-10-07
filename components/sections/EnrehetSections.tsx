"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const filters = [
    {
        label: "Eğitim Kademesi",
        value: "Ortaokul",
    },
    {
        label: "Sınıf",
        value: "7. Sınıf",
    },
    {
        label: "Mizaç",
        value: "Mizaç 6",
    },
    {
        label: "Konu",
        value: "Sınav Kaygısı",
    },
];

export default function EnrehetSection() {
    const [activeFilter, setActiveFilter] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveFilter((current) => (current + 1) % (filters.length + 1));
        }, 1500);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <section id="enrehet" className="relative overflow-hidden bg-[#101828] py-20 sm:py-24 lg:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-[300px] top-[100px] h-[650px] w-[650px] rounded-full bg-[#FF9D00]/10 blur-[140px]" />
                <div className="absolute -right-[280px] bottom-[-150px] h-[650px] w-[650px] rounded-full bg-[#344054]/30 blur-[150px]" />
                <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            </div>

            <Container className="relative">
                {/* Header */}
                <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#D0D5DD] sm:text-[11px]">ENREHET</span>
                        </div>

                        <h2 className="mt-6 max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.05em] text-white sm:text-[46px] lg:text-[58px]">
                            Doğru öğrenciye,
                            <br />
                            doğru zamanda,
                            <br />
                            <span className="text-[#FF9D00]">doğru çalışma.</span>
                        </h2>
                    </div>

                    <div className="lg:pb-2">
                        <p className="max-w-[520px] text-[14px] font-medium leading-7 text-[#98A2B3] sm:text-[16px] sm:leading-8">
                            ENREHET, rehberlik çalışmalarını öğrencinin eğitim kademesi, sınıfı, mizacı ve ihtiyacına göre filtreleyerek uygun çalışmaya ulaşmayı kolaylaştırır.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF9D00]/10 text-[#FFB84D]">✓</span>
                            <span className="text-[12px] font-bold text-[#D0D5DD] sm:text-[13px]">ENOKSİS'in rehberlik etkinlik bankası</span>
                        </div>
                    </div>
                </div>

                {/* Main Product Area */}
                <div className="mt-14 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_40px_100px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:rounded-[36px] lg:mt-20 lg:grid-cols-[0.36fr_0.64fr]">
                    {/* Filter simulation */}
                    <div className="relative border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#667085]">AKILLI FİLTRELEME</span>
                                <h3 className="mt-2 text-[20px] font-extrabold tracking-[-0.035em] text-white sm:text-[23px]">Çalışmayı birlikte bulalım.</h3>
                            </div>

                            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[15px] text-[#FFB84D]">⌕</span>
                        </div>

                        <div className="relative mt-8">
                            <div className="absolute bottom-6 left-[19px] top-6 w-px bg-white/10" />

                            <div className="relative space-y-3">
                                {filters.map((filter, index) => {
                                    const completed = index < activeFilter;
                                    const active = index === activeFilter;
                                    const waiting = index > activeFilter;

                                    return (
                                        <div key={filter.label} className={`relative flex min-h-[74px] items-center gap-4 rounded-[16px] border px-4 transition-all duration-500 sm:px-5 ${active ? "border-[#FF9D00]/50 bg-[#FF9D00]/10 shadow-[0_8px_30px_rgba(255,157,0,0.08)]" : completed || activeFilter === filters.length ? "border-white/10 bg-white/[0.06]" : "border-white/[0.06] bg-white/[0.025]"}`}>
                                            <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[11px] font-extrabold transition-all duration-500 ${completed || activeFilter === filters.length ? "border-[#12B76A]/30 bg-[#12B76A]/15 text-[#6CE9A6]" : active ? "border-[#FF9D00] bg-[#FF9D00] text-[#101828]" : "border-white/10 bg-[#101828] text-[#667085]"}`}>
                                                {completed || activeFilter === filters.length ? "✓" : `0${index + 1}`}
                                            </span>

                                            <div className={`transition-opacity duration-500 ${waiting ? "opacity-45" : "opacity-100"}`}>
                                                <span className="block text-[9px] font-bold uppercase tracking-[0.11em] text-[#667085]">{filter.label}</span>
                                                <span className={`mt-1 block text-[13px] font-extrabold sm:text-[14px] ${active ? "text-[#FFB84D]" : completed || activeFilter === filters.length ? "text-white" : "text-[#98A2B3]"}`}>{filter.value}</span>
                                            </div>

                                            {active && <span className="ml-auto flex h-6 items-center rounded-full bg-[#FF9D00]/10 px-2 text-[8px] font-extrabold uppercase tracking-[0.08em] text-[#FFB84D]">Seçiliyor</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Result */}
                        <div className={`mt-5 overflow-hidden transition-all duration-700 ${activeFilter === filters.length ? "max-h-[150px] translate-y-0 opacity-100" : "max-h-0 translate-y-3 opacity-0"}`}>
                            <div className="rounded-[18px] border border-[#12B76A]/20 bg-[#12B76A]/10 p-4">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#12B76A] text-[13px] font-extrabold text-white">✓</span>

                                    <div>
                                        <span className="block text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#6CE9A6]">HAZIR</span>
                                        <span className="mt-0.5 block text-[12px] font-bold text-white sm:text-[13px]">Uygun rehberlik çalışmaları görüntüleniyor.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product screenshot */}
                    <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-[#F2F4F7] p-5 sm:min-h-[560px] sm:p-8 lg:p-10 xl:p-12">
                        <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-[350px] w-[350px] rounded-full bg-[#FF9D00]/10 blur-[90px]" />

                        <div className="relative z-10 mx-auto w-full max-w-[820px]">
                            {/* Browser */}
                            <div className="overflow-hidden rounded-[18px] border border-[#D0D5DD] bg-white shadow-[0_30px_80px_rgba(16,24,40,0.18)] sm:rounded-[24px]">
                                <div className="flex h-[42px] items-center border-b border-[#EAECF0] bg-[#FCFCFD] px-4 sm:h-[48px] sm:px-5">
                                    <div className="flex gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#FDA29B]" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#FEC84B]" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#6CE9A6]" />
                                    </div>

                                    <div className="mx-auto hidden h-6 w-[42%] items-center justify-center rounded-md border border-[#EAECF0] bg-white sm:flex">
                                        <span className="text-[8px] font-bold text-[#98A2B3]">ENREHET • Rehberlik Çalışmaları</span>
                                    </div>

                                    <span className="text-[8px] font-extrabold text-[#FF9D00] sm:hidden">ENREHET</span>
                                </div>

                                <div className="relative">
                                    <Image src="/images/process/ssenrehet.png" alt="ENREHET rehberlik etkinlik bankası ekranı" width={1400} height={950} sizes="(max-width: 1024px) 100vw, 65vw" className="h-auto w-full object-contain" />
                                    <div className={`pointer-events-none absolute inset-0 bg-[#101828]/10 transition-opacity duration-700 ${activeFilter === filters.length ? "opacity-0" : "opacity-100"}`} />
                                </div>
                            </div>

                            {/* Floating result */}
                            <div className={`absolute -bottom-5 left-1/2 w-[88%] max-w-[470px] -translate-x-1/2 rounded-[16px] border border-[#EAECF0] bg-white p-3.5 shadow-[0_16px_40px_rgba(16,24,40,0.16)] transition-all duration-700 sm:-bottom-6 sm:p-4 ${activeFilter === filters.length ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF4DF] text-[#D98200]">✓</span>

                                    <div className="min-w-0">
                                        <span className="block text-[9px] font-extrabold uppercase tracking-[0.11em] text-[#98A2B3]">FİLTRELEME TAMAMLANDI</span>
                                        <span className="mt-0.5 block truncate text-[11px] font-extrabold text-[#101828] sm:text-[12px]">Öğrenciye uygun çalışmalar hazır.</span>
                                    </div>

                                    <span className="ml-auto hidden rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[8px] font-extrabold text-[#027A48] sm:block">HAZIR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Flow */}
                <div className="mt-10">
                    <div className="mx-auto flex max-w-[900px] flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-2">
                        <FlowItem number="01" label="Kademe" />
                        <Arrow />
                        <FlowItem number="02" label="Sınıf" />
                        <Arrow />
                        <FlowItem number="03" label="Mizaç" />
                        <Arrow />
                        <FlowItem number="04" label="Konu" />
                        <Arrow />
                        <div className="flex min-h-[58px] flex-1 items-center justify-center rounded-[15px] bg-[#FF9D00] px-5 text-center">
                            <span className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#101828]">Uygun Çalışma</span>
                        </div>
                    </div>
                </div>

                {/* Bottom statement */}
                <div className="mx-auto mt-14 max-w-[760px] text-center sm:mt-16">
                    <p className="text-[21px] font-extrabold leading-[1.4] tracking-[-0.03em] text-white sm:text-[27px]">Her öğrenciye aynı etkinliği vermek yerine, <span className="text-[#FF9D00]">ihtiyacına uygun olanı bulun.</span></p>
                </div>
            </Container>
        </section>
    );
}

function FlowItem({ number, label }: { number: string; label: string }) {
    return (
        <div className="flex min-h-[58px] flex-1 items-center justify-center gap-2 rounded-[15px] border border-white/10 bg-white/[0.05] px-4">
            <span className="text-[8px] font-extrabold text-[#667085]">{number}</span>
            <span className="text-[11px] font-extrabold text-[#D0D5DD]">{label}</span>
        </div>
    );
}

function Arrow() {
    return <span className="hidden shrink-0 text-[13px] font-bold text-[#475467] sm:block">→</span>;
}