import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="hero-premium relative isolate overflow-hidden bg-white">
            <div
                className="pointer-events-none absolute inset-0 -z-20"
                aria-hidden="true"
            >
                {/* Soft orange atmosphere */}
                <div className="hero-orb hero-orb-orange absolute left-[-18%] top-[-10%] h-[620px] w-[620px] rounded-full bg-[#FF9D00]/[0.10] blur-[130px]" />

                {/* Navy atmosphere */}
                <div className="hero-orb hero-orb-navy absolute right-[-20%] top-[0%] h-[720px] w-[720px] rounded-full bg-[#101828]/[0.055] blur-[150px]" />

                {/* Center glow */}
                <div className="absolute left-[52%] top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF9D00]/[0.035] blur-[100px]" />

                {/* Premium grid */}
                <div className="hero-grid absolute inset-0" />

                {/* Top radial light */}
                <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-[100%] bg-white blur-[40px]" />
            </div>

            <Container>
                <div className="grid min-h-[calc(100svh-72px)] items-center gap-14 pb-16 pt-12 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:pb-20 lg:pt-16 xl:gap-20">

                    {/* =====================================================
                        LEFT CONTENT
                    ====================================================== */}
                    <div className="relative z-20 mx-auto max-w-[680px] text-center lg:mx-0 lg:text-left">

                        {/* Eyebrow */}
                        <div className="hero-enter hero-enter-1 inline-flex items-center gap-2.5 rounded-full border border-[#FF9D00]/20 bg-white/70 px-3.5 py-2 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_14px_rgba(16,24,40,0.04)] backdrop-blur-xl">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF9D00] opacity-30" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF9D00]" />
                            </span>

                            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#7A4A00] sm:text-[11px]">
                                Mizaç Merkezli Eğitim Sistemi
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="hero-enter hero-enter-2 mt-6 text-[44px] font-extrabold leading-[0.98] tracking-[-0.058em] text-[#101828] sm:text-[58px] lg:text-[62px] xl:text-[74px]">
                            Her öğrenciyi
                            <span className="relative block text-[#FF9D00]">
                                kendi doğasıyla
                                <span
                                    className="absolute -bottom-1 left-[8%] hidden h-[7px] w-[84%] rounded-full bg-[#FF9D00]/10 blur-[1px] lg:block"
                                    aria-hidden="true"
                                />
                            </span>
                            tanıyın.
                        </h1>

                        {/* Description */}
                        <p className="hero-enter hero-enter-3 mx-auto mt-6 max-w-[600px] text-[16px] font-medium leading-[1.8] text-[#667085] sm:text-[18px] lg:mx-0 lg:max-w-[580px]">
                            Öğrencilerin bireysel farklılıklarını görünür hale getiren,
                            öğretmen, veli ve rehberlik servisini{" "}
                            <span className="font-bold text-[#344054]">
                                aynı anlayışta buluşturan
                            </span>{" "}
                            bütüncül okul rehberlik sistemi.
                        </p>

                        {/* CTA */}
                        <div className="hero-enter hero-enter-4 mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                            <Button
                                href="#demo"
                                className="group min-h-[56px] px-7 text-[15px] shadow-[0_10px_30px_rgba(255,157,0,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(255,157,0,0.28)]"
                            >
                                Ücretsiz Demo Al

                                <span
                                    className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </Button>

                            <Button
                                href="#enoksis"
                                variant="ghost"
                                className="min-h-[56px] px-7 text-[15px]"
                            >
                                ENOKSİS&apos;i Keşfet
                            </Button>
                        </div>

                        {/* Social proof */}
                        <div className="hero-enter hero-enter-5 mt-10 border-t border-[#EAECF0]/80 pt-6 sm:mt-12">
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#98A2B3]">
                                Binlerce kullanıcı tarafından deneyimlendi
                            </p>

                            <div className="grid grid-cols-3 divide-x divide-[#E4E7EC]">
                                <Stat value="50.000+" label="Öğrenci" />
                                <Stat value="3.000+" label="Öğretmen" />
                                <Stat value="100.000+" label="Ebeveyn" />
                            </div>
                        </div>
                    </div>

                    {/* =====================================================
                        PRODUCT VISUAL
                    ====================================================== */}
                    <div className="hero-enter hero-enter-visual relative mx-auto w-full max-w-[780px] py-4 sm:py-12 lg:mx-0 lg:max-w-none">

                        {/* Ambient glow */}
                        <div
                            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[78%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#FF9D00]/[0.12] blur-[80px]"
                            aria-hidden="true"
                        />

                        {/* Decorative orbit */}
                        <div
                            className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF9D00]/10 xl:block"
                            aria-hidden="true"
                        />

                        {/* ===============================================
                            MAIN DASHBOARD
                        ================================================ */}
                        <div className="hero-dashboard relative z-20 overflow-hidden rounded-[20px] border border-[#DDE2EA]/90 bg-white/90 shadow-[0_40px_100px_-25px_rgba(16,24,40,0.30)] backdrop-blur-xl sm:rounded-[28px]">

                            {/* Browser chrome */}
                            <div className="flex h-[46px] items-center border-b border-[#EAECF0] bg-[#FCFCFD]/95 px-3.5 sm:h-[56px] sm:px-5">

                                <div className="flex shrink-0 gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#FDA29B]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEC84B]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#6CE9A6]" />
                                </div>

                                <div className="mx-auto flex h-7 max-w-[290px] flex-1 items-center justify-center gap-2 rounded-lg border border-[#EAECF0] bg-white px-3 shadow-[0_1px_2px_rgba(16,24,40,0.03)] sm:h-8">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#12B76A]" />

                                    <span className="text-[8px] font-bold tracking-[0.02em] text-[#98A2B3] sm:text-[10px]">
                                        app.enoksis.com
                                    </span>
                                </div>

                                <div className="w-[32px] shrink-0 sm:w-[46px]" />
                            </div>

                            {/* Screenshot */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F8FAFC]">
                                <Image
                                    src="/images/process/ssenrehet.png"
                                    alt="ENOKSİS yönetim paneli"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 58vw"
                                    className="object-cover object-top"
                                />

                                {/* subtle image polish */}
                                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.02]" />
                            </div>
                        </div>

                        {/* ===============================================
                            LEFT FLOATING SCREEN
                        ================================================ */}
                        <div className="hero-float-left absolute -bottom-5 -left-5 z-30 hidden w-[42%] sm:block lg:-left-8 xl:-left-14">
                            <div className="overflow-hidden rounded-[19px] border border-white/90 bg-white/95 p-1.5 shadow-[0_24px_70px_-15px_rgba(16,24,40,0.28)] backdrop-blur-xl">
                                <div className="overflow-hidden rounded-[14px] border border-[#EAECF0] bg-[#F8FAFC]">
                                    <div className="flex h-7 items-center gap-1 border-b border-[#EAECF0] bg-white px-2.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FDA29B]" />
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FEC84B]" />
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#6CE9A6]" />

                                        <span className="ml-2 text-[7px] font-bold text-[#98A2B3]">
                                            Öğrenci Profili
                                        </span>
                                    </div>

                                    <div className="relative aspect-[16/10]">
                                        <Image
                                            src="/images/process/denemeogrenci.png"
                                            alt="ENOKSİS öğrenci ekranı"
                                            fill
                                            sizes="(max-width: 1024px) 40vw, 24vw"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===============================================
                            RIGHT FLOATING SCREEN
                        ================================================ */}
                        <div className="hero-float-right absolute -right-4 -top-3 z-30 hidden w-[36%] sm:block lg:-right-5 xl:-right-10">
                            <div className="overflow-hidden rounded-[19px] border border-white/90 bg-white/95 p-1.5 shadow-[0_24px_70px_-15px_rgba(16,24,40,0.24)] backdrop-blur-xl">
                                <div className="overflow-hidden rounded-[14px] border border-[#EAECF0] bg-[#F8FAFC]">
                                    <div className="flex h-7 items-center gap-1 border-b border-[#EAECF0] bg-white px-2.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FDA29B]" />
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FEC84B]" />
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#6CE9A6]" />

                                        <span className="ml-2 text-[7px] font-bold text-[#98A2B3]">
                                            Mizaç Analizi
                                        </span>
                                    </div>

                                    <div className="relative aspect-[16/10]">
                                        <Image
                                            src="/images/process/enoksis123.png"
                                            alt="ENOKSİS mizaç analiz ekranı"
                                            fill
                                            sizes="(max-width: 1024px) 36vw, 22vw"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===============================================
                            FLOATING FEATURE CARD
                        ================================================ */}
                        <div className="hero-feature-card absolute -right-2 bottom-[7%] z-40 hidden items-center gap-3 rounded-[18px] border border-white/80 bg-white/90 px-4 py-3.5 shadow-[0_18px_55px_-12px_rgba(16,24,40,0.24)] backdrop-blur-xl md:flex lg:-right-6 xl:-right-8">
                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#ECFDF3]">
                                <span className="text-[15px] font-black text-[#12B76A]">
                                    ✓
                                </span>

                                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#12B76A]" />
                            </div>

                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#98A2B3]">
                                    Tek platform
                                </p>

                                <p className="mt-0.5 whitespace-nowrap text-[11px] font-extrabold tracking-[-0.02em] text-[#101828]">
                                    Bütüncül Rehberlik
                                </p>
                            </div>
                        </div>

                        {/* ===============================================
                            TOP MICRO BADGE
                        ================================================ */}
                        <div className="hero-mini-card absolute left-[8%] top-[1%] z-40 hidden items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3 py-2 shadow-[0_10px_35px_rgba(16,24,40,0.10)] backdrop-blur-xl md:flex">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF4DF] text-[10px] font-black text-[#C77800]">
                                9
                            </span>

                            <span className="pr-1 text-[9px] font-extrabold text-[#344054]">
                                Mizaç perspektifi
                            </span>
                        </div>

                        {/* Mobile label */}
                        <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">
                            <span className="h-1.5 w-6 rounded-full bg-[#FF9D00]" />
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D0D5DD]" />
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D0D5DD]" />
                        </div>
                    </div>
                </div>
            </Container>

            {/* bottom fade into next section */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
                aria-hidden="true"
            />
        </section>
    );
}

function Stat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="px-3 text-left first:pl-0 sm:px-5">
            <strong className="block text-[18px] font-extrabold tracking-[-0.045em] text-[#101828] sm:text-[23px]">
                {value}
            </strong>

            <span className="mt-1 block text-[10px] font-semibold text-[#98A2B3] sm:text-[11px]">
                {label}
            </span>
        </div>
    );
}