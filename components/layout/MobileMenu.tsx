"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const openMenu = () => {
        setMounted(true);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setOpen(true);
            });
        });
    };

    const closeMenu = () => {
        setOpen(false);

        window.setTimeout(() => {
            setMounted(false);
        }, 350);
    };

    useEffect(() => {
        if (!mounted) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [mounted]);

    return (
        <>
            <button
                type="button"
                onClick={openMenu}
                aria-label="Menüyü aç"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E4E7EC] bg-white text-[#101828] transition-all duration-200 hover:border-[#D0D5DD] hover:bg-[#F8FAFC] active:scale-95 lg:hidden"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>

            {mounted && (
                <div className="fixed inset-0 z-[9999] lg:hidden">
                    {/* Overlay */}
                    <button
                        type="button"
                        aria-label="Menüyü kapat"
                        onClick={closeMenu}
                        className={`absolute inset-0 h-full w-full cursor-default bg-[#101828]/60 backdrop-blur-[3px] transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
                    />

                    {/* Drawer */}
                    <aside
                        id="mobile-navigation"
                        aria-label="Mobil menü"
                        className={`absolute right-0 top-0 z-10 flex h-[100dvh] w-[min(88vw,390px)] flex-col overflow-y-auto bg-white shadow-[-20px_0_60px_rgba(16,24,40,0.18)] transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
                    >
                        {/* Header */}
                        <div className="flex min-h-[80px] shrink-0 items-center justify-between border-b border-[#EAECF0] px-6">
                            <span className={`text-[23px] font-extrabold tracking-[-0.055em] text-[#101828] transition-all delay-75 duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
                                ENOKSİS
                            </span>

                            <button
                                type="button"
                                onClick={closeMenu}
                                aria-label="Menüyü kapat"
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F4F7] text-[#101828] transition-all duration-300 hover:rotate-90 hover:bg-[#EAECF0] active:scale-90 ${open ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 px-6 py-8">
                            {navigation.map((item, index) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    style={{
                                        transitionDelay: open ? `${80 + index * 45}ms` : "0ms",
                                    }}
                                    className={`flex min-h-[64px] items-center border-b border-[#EAECF0] text-[18px] font-bold tracking-[-0.025em] text-[#101828] transition-all duration-300 hover:pl-2 hover:text-[#FF9D00] ${open ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"}`}
                                >
                                    <span className="mr-3 text-[11px] font-bold tabular-nums text-[#B8BEC9]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Bottom Actions */}
                        <div className={`shrink-0 border-t border-[#EAECF0] bg-white px-6 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 transition-all delay-200 duration-300 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                            <Link
                                href="#demo"
                                onClick={closeMenu}
                                className="flex min-h-[54px] w-full items-center justify-center rounded-2xl bg-[#FF9D00] px-5 text-[15px] font-extrabold text-[#101828] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ED9200] hover:shadow-[0_10px_30px_rgba(255,157,0,0.25)] active:translate-y-0"
                            >
                                Ücretsiz Demo Al
                            </Link>

                            <a
                                href="https://app.enoksis.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex min-h-[54px] w-full items-center justify-center rounded-2xl bg-[#101828] px-5 text-[15px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D2939] active:translate-y-0"
                            >
                                Platforma Giriş
                                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                                    ↗
                                </span>
                            </a>

                            <p className="mt-5 text-center text-xs font-medium text-[#98A2B3]">
                                Mizaç Merkezli Eğitim
                            </p>
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
}