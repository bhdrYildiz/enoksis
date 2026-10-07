import Link from "next/link";
import Image from "next/image";
import type { Guide } from "@/data/guides/types";

type GuidePageProps = {
    guide: Guide;
};

export default function GuidePage({ guide }: GuidePageProps) {
    return (
        <main className="bg-white">
            <section className="border-b border-[#E4E7EC] bg-white">
                <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-[760px]">
                            <Link
                                href="/kullanim-kilavuzu"
                                className="group inline-flex items-center gap-2 text-[11px] font-bold text-[#667085] transition-colors hover:text-[#101828]"
                            >
                                <span
                                    aria-hidden="true"
                                    className="transition-transform group-hover:-translate-x-0.5"
                                >
                                    ←
                                </span>
                                Tüm kullanım kılavuzları
                            </Link>

                            <div className="mt-7 flex items-center gap-3">
                                <span className="h-px w-6 bg-[#FF9D00]" />

                                <span className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#B86F00]">
                                    {guide.eyebrow}
                                </span>
                            </div>

                            <h1 className="mt-4 max-w-[720px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#101828] sm:text-[46px] lg:text-[54px]">
                                {guide.title}
                            </h1>

                            <p className="mt-5 max-w-[650px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px]">
                                {guide.description}
                            </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-5 border-t border-[#EAECF0] pt-5 lg:border-l lg:border-t-0 lg:pb-1 lg:pl-8 lg:pt-0">
                            <div>
                                <span className="block text-[24px] font-extrabold tracking-[-0.04em] text-[#101828]">
                                    {guide.sections.length}
                                </span>
                                <span className="mt-0.5 block text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#98A2B3]">
                                    Bölüm
                                </span>
                            </div>

                            <span className="h-8 w-px bg-[#E4E7EC]" />

                            <div>
                                <span className="block text-[12px] font-extrabold text-[#101828]">
                                    Adım adım
                                </span>
                                <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#98A2B3]">
                                    Görsel anlatım
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[230px_1fr] lg:px-8 lg:py-16">
                <aside className="hidden lg:block">
                    <nav
                        className="sticky top-28"
                        aria-label="Kılavuz içeriği"
                    >
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#98A2B3]">
                            İÇİNDEKİLER
                        </p>

                        <div className="mt-4 border-l border-[#E4E7EC]">
                            {guide.sections.map((section, index) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="flex gap-3 border-l-2 border-transparent py-2.5 pl-4 text-[12px] font-bold leading-5 text-[#667085] transition-colors hover:border-[#FF9D00] hover:text-[#101828]"
                                >
                                    <span className="text-[#C77800]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {section.title}
                                </a>
                            ))}
                        </div>
                    </nav>
                </aside>

                <article className="min-w-0 max-w-[820px]">
                    <div className="mb-10 lg:hidden">
                        <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#98A2B3]">
                            İÇİNDEKİLER
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {guide.sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="rounded-lg border border-[#E4E7EC] px-3 py-2 text-[11px] font-bold text-[#475467]"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-14">
                        {guide.sections.map((section, index) => (
                            <section
                                key={section.id}
                                id={section.id}
                                className="scroll-mt-28"
                            >
                                <span className="text-[10px] font-extrabold text-[#C77800]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h2 className="mt-2 text-[25px] font-extrabold tracking-[-0.04em] text-[#101828] sm:text-[29px]">
                                    {section.title}
                                </h2>

                                <p className="mt-4 text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px]">
                                    {section.description}
                                </p>

                                {section.steps && (
                                    <ol className="mt-6 space-y-3">
                                        {section.steps.map((step, stepIndex) => (
                                            <li
                                                key={step}
                                                className="flex gap-4 rounded-[14px] border border-[#EAECF0] bg-[#FCFCFD] p-4"
                                            >
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#101828] text-[9px] font-extrabold text-white">
                                                    {stepIndex + 1}
                                                </span>

                                                <p className="text-[13px] font-medium leading-6 text-[#475467]">
                                                    {step}
                                                </p>
                                            </li>
                                        ))}
                                    </ol>
                                )}

                                {section.note && (
                                    <div className="mt-6 rounded-[14px] border border-[#FFE1AD] bg-[#FFF8EC] px-5 py-4">
                                        <p className="text-[12px] font-semibold leading-6 text-[#805000]">
                                            {section.note}
                                        </p>
                                    </div>
                                )}

                                {section.link && (
                                    <Link
                                        href={section.link.href}
                                        className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#B86F00] transition-colors hover:text-[#101828]"
                                    >
                                        {section.link.label}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                )}

                                {section.image && (
                                    <div className="mt-7 overflow-hidden rounded-[18px] border border-[#E4E7EC] bg-[#F8FAFC]">
                                        <Image
                                            src={section.image}
                                            alt={`${section.title} ekran görüntüsü`}
                                            width={1440}
                                            height={900}
                                            sizes="(max-width: 1024px) 100vw, 820px"
                                            className="h-auto w-full"
                                        />
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>
                </article>
            </div>
        </main>
    );
}