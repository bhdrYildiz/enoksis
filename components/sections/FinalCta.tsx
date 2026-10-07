import Link from "next/link";
import Container from "@/components/ui/Container";

export default function FinalCta() {
    return (
        <section className="relative pt-4 sm:pt-8 lg:pt-12">
            <Container>
                <div className="mx-auto max-w-[1000px] text-center">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B9C0CC]">ENOKSİS İLE TANIŞIN</span>
                    </div>

                    <h2 className="mx-auto mt-4 max-w-[950px] text-[39px] font-extrabold leading-[1.03] tracking-[-0.055em] text-white sm:text-[54px] lg:text-[68px] xl:text-[76px]">
                        Her öğrenciyi anlamanın
                        <span className="block text-[#FF9D00]">daha iyi bir yolu var.</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[680px] text-[14px] font-medium leading-7 text-[#98A2B3] sm:text-[16px] sm:leading-8">Öğrenciyi tanımaktan doğru rehberlik yaklaşımını belirlemeye kadar ENOKSİS'in okulunuzdaki sürece nasıl dahil olabileceğini birlikte keşfedelim.</p>

                    <div className="mt-9 flex justify-center">
                        <Link href="/demo" className="group inline-flex h-[58px] items-center justify-center gap-4 rounded-[16px] bg-[#FF9D00] px-8 text-[13px] font-extrabold text-[#101828] shadow-[0_15px_45px_rgba(255,157,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFAA1F] hover:shadow-[0_20px_55px_rgba(255,157,0,0.28)]">
                            Demo Talep Et
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#101828] text-[13px] text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
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