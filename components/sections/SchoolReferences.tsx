import Image from "next/image";
import Container from "@/components/ui/Container";
import { schools } from "@/data/schools";

const firstRow = schools.slice(0, 9);
const secondRow = schools.slice(9);

export default function SchoolReferences() {
    return (
        <section className="relative overflow-hidden border-y border-[#EAECF0] bg-[#FCFCFD] py-14 sm:py-16 lg:py-20">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[260px] w-[700px] -translate-x-1/2 rounded-full bg-[#FF9D00]/[0.045] blur-[100px]" />
            </div>

            <Container className="relative">
                {/* Heading */}
                <div className="mx-auto max-w-[760px] text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#EAECF0] bg-white px-3.5 py-2 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#667085] sm:text-[11px]">BİRLİKTE BÜYÜYORUZ</span>
                    </div>

                    <h2 className="mt-5 text-[26px] font-extrabold leading-tight tracking-[-0.045em] text-[#101828] sm:text-[32px] lg:text-[38px]">
                        ENOKSİS&apos;i tercih eden
                        <span className="text-[#FF9D00]"> eğitim kurumları.</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-[600px] text-[14px] font-medium leading-6 text-[#667085] sm:text-[16px] sm:leading-7">
                        Farklı eğitim kurumları, aynı amaç: Her öğrenciyi daha yakından tanımak ve gelişim yolculuğunu doğru desteklemek.
                    </p>
                </div>
            </Container>

            {/* Marquee Area */}
            <div className="relative mt-10 sm:mt-12 lg:mt-14">
                {/* Left fade */}
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-[50px] bg-gradient-to-r from-[#FCFCFD] via-[#FCFCFD]/80 to-transparent sm:w-[120px] lg:w-[180px]" />

                {/* Right fade */}
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-[50px] bg-gradient-to-l from-[#FCFCFD] via-[#FCFCFD]/80 to-transparent sm:w-[120px] lg:w-[180px]" />

                {/* First Row */}
                <div className="marquee-group overflow-hidden">
                    <div className="marquee-track marquee-left flex w-max items-center gap-3 sm:gap-4">
                        <LogoRow schools={firstRow} />
                        <LogoRow schools={firstRow} ariaHidden />
                    </div>
                </div>

                {/* Second Row */}
                <div className="marquee-group mt-3 overflow-hidden sm:mt-4">
                    <div className="marquee-track marquee-right flex w-max items-center gap-3 sm:gap-4">
                        <LogoRow schools={secondRow} />
                        <LogoRow schools={secondRow} ariaHidden />
                    </div>
                </div>
            </div>

            {/* Bottom text */}
            <Container>
                <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12">
                    <span className="h-px w-8 bg-[#D0D5DD] sm:w-14" />
                    <p className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#98A2B3] sm:text-xs">Eğitimde öğrenciyi merkeze alan yaklaşım</p>
                    <span className="h-px w-8 bg-[#D0D5DD] sm:w-14" />
                </div>
            </Container>
        </section>
    );
}

type School = (typeof schools)[number];

function LogoRow({ schools, ariaHidden = false }: { schools: readonly School[]; ariaHidden?: boolean }) {
    return (
        <div aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center gap-3 sm:gap-4">
            {schools.map((school) => (
                <div key={school.name} className="group flex h-[78px] w-[142px] shrink-0 items-center justify-center rounded-2xl border border-[#EAECF0] bg-white px-5 shadow-[0_2px_8px_rgba(16,24,40,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD99A] hover:shadow-[0_12px_32px_rgba(16,24,40,0.09)] sm:h-[92px] sm:w-[170px] sm:px-6 lg:h-[98px] lg:w-[185px]">
                    <div className="relative h-[46px] w-full sm:h-[54px]">
                        <Image src={school.logo} alt={ariaHidden ? "" : `${school.name} logosu`} fill sizes="185px" className="object-contain opacity-65 grayscale transition-all duration-300 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0" />
                    </div>
                </div>
            ))}
        </div>
    );
}