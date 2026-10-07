"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex min-h-[70vh] items-center bg-white">
            <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-6 lg:px-8">
                <div className="max-w-[680px]">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-7 bg-[#FF9D00]" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B86F00]">
                            BİR ŞEYLER TERS GİTTİ
                        </span>
                    </div>

                    <h1 className="mt-6 text-[40px] font-extrabold leading-[1.05] tracking-[-0.05em] text-[#101828] sm:text-[54px]">
                        Bu sayfayı şu anda
                        <span className="block text-[#FF9D00]">
                            görüntüleyemiyoruz.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-[540px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px]">
                        Geçici bir sorun oluşmuş olabilir. İşlemi tekrar
                        deneyebilir veya ana sayfaya dönebilirsiniz.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={reset}
                            className="inline-flex h-11 items-center justify-center rounded-full bg-[#101828] px-6 text-[12px] font-extrabold text-white transition-colors hover:bg-[#1D2939]"
                        >
                            Tekrar dene
                        </button>

                        <Link
                            href="/"
                            className="inline-flex h-11 items-center justify-center rounded-full border border-[#D0D5DD] px-6 text-[12px] font-extrabold text-[#344054] transition-colors hover:bg-[#F9FAFB]"
                        >
                            Ana sayfaya dön
                        </Link>
                    </div>

                    {error.digest && (
                        <p className="mt-8 text-[10px] font-semibold text-[#98A2B3]">
                            Hata kodu: {error.digest}
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}