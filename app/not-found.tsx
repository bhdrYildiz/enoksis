import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center bg-white">
            <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
                    <div className="max-w-[680px]">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-7 bg-[#FF9D00]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B86F00]">
                                SAYFA BULUNAMADI
                            </span>
                        </div>

                        <h1 className="mt-6 text-[42px] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#101828] sm:text-[56px] lg:text-[64px]">
                            Aradığınız sayfa
                            <span className="block text-[#FF9D00]">
                                burada değil.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-[540px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px]">
                            Bağlantı değişmiş, kaldırılmış veya adres hatalı
                            yazılmış olabilir. Ana sayfaya dönebilir ya da
                            kullanım kılavuzlarını inceleyebilirsiniz.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/"
                                className="inline-flex h-11 items-center justify-center rounded-full bg-[#101828] px-6 text-[12px] font-extrabold !text-white transition-colors hover:bg-[#1D2939]"
                            >
                                Ana sayfaya dön
                            </Link>

                            <Link
                                href="/kullanim-kilavuzu"
                                className="inline-flex h-11 items-center justify-center rounded-full border border-[#D0D5DD] px-6 text-[12px] font-extrabold text-[#344054] transition-colors hover:border-[#98A2B3] hover:bg-[#F9FAFB]"
                            >
                                Kullanım kılavuzları
                            </Link>
                        </div>
                    </div>

                    <div
                        aria-hidden="true"
                        className="hidden select-none lg:block"
                    >
                        <span className="text-[150px] font-extrabold leading-none tracking-[-0.09em] text-[#F2F4F7] xl:text-[190px]">
                            404
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}