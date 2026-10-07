import Link from "next/link";
import Container from "@/components/ui/Container";

export default function FinalCta() {
    return (
        <section id="demo" className="relative scroll-mt-24 pt-4 sm:pt-8 lg:pt-12">
            <Container>
                <div className="mx-auto max-w-[1000px] text-center">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B9C0CC]">ENOKSİS İLE TANIŞIN</span>
                    </div>

                    <h2 className="mx-auto mt-4 max-w-[950px] text-[39px] font-extrabold leading-[1.03] tracking-[-0.055em] text-[#1D2939] sm:text-[54px] lg:text-[68px] xl:text-[76px]">
                        Her öğrenciyi anlamanın
                        <span className="block text-[#FF9D00]">daha iyi bir yolu var.</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[680px] text-[14px] font-medium leading-7 text-[#98A2B3] sm:text-[16px] sm:leading-8">Öğrenciyi tanımaktan doğru rehberlik yaklaşımını belirlemeye kadar ENOKSİS'in okulunuzdaki sürece nasıl dahil olabileceğini birlikte keşfedelim.</p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href="https://wa.me/905435406443?text=Merhaba%2C%20ENOKS%C4%B0S%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-[58px] w-full items-center justify-center gap-3 rounded-[16px] bg-[#FF9D00] px-8 text-[13px] font-extrabold !text-[#101828] shadow-[0_15px_45px_rgba(255,157,0,0.18)] transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-[#FFAA1F] sm:w-auto"
                        >
                            <span aria-hidden="true" className="text-[17px]">
                                ↗
                            </span>
                            WhatsApp&apos;tan Yazın
                        </a>

                        <a
                            href="tel:+905435406443"
                            className="inline-flex h-[58px] w-full items-center justify-center gap-3 rounded-[16px] border border-[#475467] bg-[#1D2939] px-8 text-[13px] font-extrabold !text-white transition-[transform,background-color,border-color] duration-200 hover:-translate-y-1 hover:border-[#667085] hover:bg-[#344054] sm:w-auto"
                        >
                            <span aria-hidden="true" className="text-[16px]">
                                ☎
                            </span>
                            Hemen Arayın
                        </a>
                    </div>
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:mt-14">
                        <MiniFeature text="Sistemi yakından inceleyin" />
                        <MiniFeature text="Okulunuza uygun yapıyı konuşalım" />
                        <MiniFeature text="Uygulama sürecini planlayalım" />
                    </div>
                </div>

                <div className="relative mt-20 sm:mt-24 lg:mt-28">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </div>
            </Container>
        </section>
    );
}

function MiniFeature({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#FF9D00]/30 bg-[#FF9D00]/10 text-[9px] font-black text-[#FFB84D]">✓</span>
            <span className="text-[10px] font-bold text-[#7F8A9A] sm:text-[11px]">{text}</span>
        </div>
    );
}