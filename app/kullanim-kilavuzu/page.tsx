import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kullanım Kılavuzları | ENOKSİS",
    description:
        "ENOKSİS öğrenci, rehber öğretmen, veli ve müdür panelleri için kullanım kılavuzları.",
};

const guides = [
    {
        number: "01",
        title: "Öğrenci Paneli",
        description:
            "Mizaç testi, raporlar ve öğrenci panelinin kullanımını adım adım inceleyin.",
        href: "/kullanim-kilavuzu/ogrenci",
    },
    {
        number: "02",
        title: "Rehber Öğretmen",
        description:
            "Öğrenci, sınıf, rehberlik ve ENREHET süreçlerini yönetin.",
        href: "/kullanim-kilavuzu/rehber-ogretmen",
    },
    {
        number: "03",
        title: "Veli Paneli",
        description:
            "Çocuğunuzun ENOKSİS sürecini ve mizaç raporlarını takip edin.",
        href: "/kullanim-kilavuzu/veli",
    },
    {
        number: "04",
        title: "Müdür Paneli",
        description:
            "Okul, kullanıcı, sınıf ve rehberlik süreçlerini yönetin.",
        href: "/kullanim-kilavuzu/mudur",
    },
];

export default function GuidesPage() {
    return (
        <main className="bg-white">
            <section className="border-b border-[#E4E7EC]">
                <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <div className="grid items-end gap-10 lg:grid-cols-[1fr_420px] lg:gap-16">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-7 bg-[#FF9D00]" />
                                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B86F00]">
                                    ENOKSİS KULLANIM KILAVUZLARI
                                </span>
                            </div>

                            <h1 className="mt-6 max-w-[700px] text-[40px] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#101828] sm:text-[52px] lg:text-[64px]">
                                ENOKSİS&apos;i
                                <br />
                                <span className="text-[#FF9D00]">
                                    adım adım keşfedin.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-[590px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[16px] sm:leading-8">
                                Kullandığınız paneli seçin; işlemleri açıklamalar
                                ve ekran görüntüleriyle kolayca takip edin.
                            </p>
                        </div>

                        <div className="border-t border-[#E4E7EC] pt-6 lg:border-l lg:border-t-0 lg:pb-2 lg:pl-10 lg:pt-0">
                            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                                {guides.map((guide) => (
                                    <Link
                                        key={guide.href}
                                        href={guide.href}
                                        className="group flex items-center gap-3"
                                    >
                                        <span className="text-[10px] font-extrabold text-[#C77800]">
                                            {guide.number}
                                        </span>

                                        <span className="text-[12px] font-bold text-[#475467] transition-colors lg:group-hover:text-[#101828]">
                                            {guide.title}
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-7 flex items-center gap-3 border-t border-[#EAECF0] pt-5">
                                <span className="text-[11px] font-extrabold text-[#101828]">
                                    4 PANEL
                                </span>
                                <span className="h-1 w-1 rounded-full bg-[#FF9D00]" />
                                <span className="text-[11px] font-bold text-[#98A2B3]">
                                    ADIM ADIM ANLATIM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-18 lg:py-20">
                <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
                    <div className="mb-8 flex items-end justify-between gap-6">
                        <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#98A2B3]">
                                PANELİNİZİ SEÇİN
                            </span>

                            <h2 className="mt-2 text-[25px] font-extrabold tracking-[-0.04em] text-[#101828] sm:text-[30px]">
                                Hangi paneli kullanıyorsunuz?
                            </h2>
                        </div>

                        <span className="hidden text-[11px] font-bold text-[#98A2B3] sm:block">
                            4 kullanım kılavuzu
                        </span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {guides.map((guide) => (
                            <Link
                                key={guide.href}
                                href={guide.href}
                                className="group flex min-h-[210px] flex-col justify-between rounded-[20px] border border-[#E4E7EC] bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 lg:p-7 lg:hover:-translate-y-1 lg:hover:border-[#FF9D00]/40 lg:hover:shadow-md"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4DF] text-[10px] font-extrabold text-[#B86F00]">
                                        {guide.number}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="text-[20px] text-[#98A2B3] transition-transform duration-200 lg:group-hover:translate-x-1 lg:group-hover:text-[#FF9D00]"
                                    >
                                        →
                                    </span>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-[20px] font-extrabold tracking-[-0.035em] text-[#101828]">
                                        {guide.title}
                                    </h3>

                                    <p className="mt-2 max-w-[390px] text-[13px] font-medium leading-6 text-[#667085]">
                                        {guide.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col gap-2 border-t border-[#EAECF0] pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[12px] font-semibold text-[#667085]">
                            Aradığınız cevabı bulamadınız mı?
                        </p>

                        <p className="text-[12px] font-bold text-[#101828]">
                            Kurumunuzun rehberlik servisiyle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}