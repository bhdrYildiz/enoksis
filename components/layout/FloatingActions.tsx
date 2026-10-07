"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 180);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`pointer-events-none fixed inset-x-0 bottom-5 z-40 transition-all duration-300 sm:bottom-6 ${visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
                }`}
            aria-hidden={!visible}
        >
            {/* WhatsApp */}
            <a
                href="https://wa.me/905435406443?text=Merhaba%2C%20ENOKS%C4%B0S%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={visible ? 0 : -1}
                aria-label="ENOKSİS WhatsApp hattına yazın"
                className="group pointer-events-auto absolute bottom-0 left-4 flex h-14 items-center sm:left-6"
            >
                {/* Hover ile açılan alan */}
                <span className="absolute left-7 hidden h-12 w-0 items-center overflow-hidden rounded-r-full border border-l-0 border-[#E4E7EC] bg-white opacity-0 shadow-[0_10px_35px_rgba(16,24,40,0.14)] transition-[width,opacity] duration-300 ease-out group-hover:w-[178px] group-hover:opacity-100 group-focus-visible:w-[178px] group-focus-visible:opacity-100 sm:flex">
                    <span className="ml-9 whitespace-nowrap pr-5">
                        <span className="block text-[12px] font-extrabold leading-none text-[#101828]">
                            Bize Yazın
                        </span>

                        <span className="mt-1.5 block text-[9px] font-bold leading-none text-[#98A2B3]">
                            WhatsApp Hattımız
                        </span>
                    </span>
                </span>

                {/* WhatsApp ikon */}
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_28px_rgba(37,211,102,0.30)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_34px_rgba(37,211,102,0.38)]">
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-[27px] w-[27px] fill-white"
                    >
                        <path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.92L2.05 22l5.2-1.52A9.94 9.94 0 1 0 12.04 2Zm0 17.98a8.03 8.03 0 0 1-4.1-1.12l-.3-.18-3.08.9.92-3-.2-.31a7.92 7.92 0 1 1 6.76 3.71Zm4.36-5.94c-.24-.12-1.41-.69-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18a7.2 7.2 0 0 1-1.33-1.65c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                    </svg>
                </span>
            </a>

            {/* Yukarı çık */}
            <button
                type="button"
                onClick={scrollToTop}
                tabIndex={visible ? 0 : -1}
                aria-label="Sayfanın başına dön"
                className="pointer-events-auto cursor-pointer absolute bottom-0 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#344054] shadow-[0_8px_28px_rgba(16,24,40,0.12)] transition-[transform,border-color,color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#FF9D00]/60 hover:text-[#C77800] hover:shadow-[0_12px_32px_rgba(16,24,40,0.16)] sm:right-6 sm:h-14 sm:w-14"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5"
                >
                    <path
                        d="M12 19V5M6.5 10.5 12 5l5.5 5.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}