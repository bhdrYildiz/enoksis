import Container from "@/components/ui/Container";

const audiences = [
    {
        number: "01",
        title: "Rehber Öğretmen",
        eyebrow: "REHBERLİK",
        description:
            "Öğrenciyi yalnızca yaşadığı problem üzerinden değil; bireysel özellikleri, ihtiyaçları ve gelişim süreciyle birlikte değerlendirin.",
        features: [
            "Bütüncül öğrenci profili",
            "Görüşme ve gözlem takibi",
            "Mizaca uygun rehberlik",
        ],
        statement: "Kişiselleştirilmiş rehberlik",
        icon: GuidanceIcon,
    },
    {
        number: "02",
        title: "Okul Yöneticisi",
        eyebrow: "YÖNETİM",
        description:
            "Rehberlik çalışmalarını okul genelinde daha görünür, takip edilebilir ve sürdürülebilir bir yapıya dönüştürün.",
        features: [
            "Süreçlere bütüncül bakış",
            "Çalışmaların takibi",
            "Sürdürülebilir rehberlik",
        ],
        statement: "Sistemli okul rehberliği",
        icon: SchoolIcon,
    },
    {
        number: "03",
        title: "Öğretmen",
        eyebrow: "SINIF",
        description:
            "Aynı sınıftaki öğrencilerin öğrenme, iletişim ve motivasyon biçimlerindeki farklılıkları daha yakından tanıyın.",
        features: [
            "Bireysel farklılıkları tanıma",
            "Doğru iletişim yaklaşımı",
            "Motivasyon kaynaklarını anlama",
        ],
        statement: "Öğrenciye göre yaklaşım",
        icon: TeacherIcon,
    },
    {
        number: "04",
        title: "Veli",
        eyebrow: "AİLE",
        description:
            "Çocuğunuzun davranışlarının arkasındaki ihtiyaçları fark edin; onunla kurduğunuz iletişimi daha bilinçli hale getirin.",
        features: [
            "Çocuğun yapısını tanıma",
            "İhtiyaçları fark etme",
            "Okulla güçlü iş birliği",
        ],
        statement: "Anlamaya dayalı ebeveynlik",
        icon: FamilyIcon,
    },
    {
        number: "05",
        title: "Öğrenci",
        eyebrow: "BİREY",
        description:
            "Kendi özelliklerini, güçlü yönlerini ve gelişime açık taraflarını fark ederek kendini daha yakından tanı.",
        features: [
            "Kendini daha iyi tanıma",
            "Güçlü yönleri keşfetme",
            "Gelişim farkındalığı",
        ],
        statement: "Kendini tanıyan öğrenci",
        icon: StudentIcon,
    },
];

export default function WhoIsItFor() {
    return (
        <section
            id="kimler-icin"
            aria-labelledby="audience-title"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/2 top-[140px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#FF9D00]/[0.035] blur-[110px]" />
            </div>

            <Container className="relative">
                {/* Header */}
                <div className="mx-auto max-w-[840px] text-center">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E4E7EC] bg-[#FCFCFD] px-3.5 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />

                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#667085] sm:text-[11px]">
                            Kimler İçin?
                        </span>
                    </div>

                    <h2
                        id="audience-title"
                        className="mt-5 text-[35px] font-extrabold leading-[1.06] tracking-[-0.052em] text-[#101828] sm:text-[44px] lg:text-[54px]"
                    >
                        Bir öğrenciyi anlamak,
                        <span className="text-[#FF9D00]">
                            {" "}
                            birlikte mümkün.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-[680px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[16px] sm:leading-8">
                        ENOKSİS, öğrencinin gelişiminde rol alan herkesi aynı
                        mizaç perspektifinde buluşturur. Böylece okulda ve
                        evde kurulan yaklaşım birbirini tamamlar.
                    </p>
                </div>

                {/* Ecosystem */}
                <div className="relative mt-14 sm:mt-16 lg:mt-20">
                    {/* Desktop connection lines */}
                    <div
                        aria-hidden="true"
                        className="absolute left-[10%] right-[10%] top-[83px] hidden h-px bg-gradient-to-r from-transparent via-[#D0D5DD] to-transparent lg:block"
                    />

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
                        {audiences.map((audience) => {
                            const Icon = audience.icon;

                            return (
                                <article
                                    key={audience.number}
                                    className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-white p-5 transition-[transform,border-color,box-shadow] duration-300 sm:p-6 lg:min-h-[330px] lg:hover:-translate-y-1.5 lg:hover:border-[#FF9D00]/35 lg:hover:shadow-[0_20px_50px_-20px_rgba(16,24,40,0.22)]"
                                >
                                    {/* Number */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] font-extrabold tracking-[0.14em] text-[#B86F00]">
                                            {audience.eyebrow}
                                        </span>

                                        <span className="text-[10px] font-extrabold text-[#D0D5DD]">
                                            {audience.number}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="relative z-10 mt-5 flex h-12 w-12 items-center justify-center rounded-[16px] border border-[#FFE2B3] bg-[#FFF7E8] text-[#C77800] transition-[background-color,color,border-color] duration-300 lg:group-hover:border-[#FF9D00] lg:group-hover:bg-[#FF9D00] lg:group-hover:text-[#101828]">
                                        <Icon />
                                    </div>

                                    <h3 className="mt-5 text-[18px] font-extrabold tracking-[-0.035em] text-[#101828] sm:text-[20px]">
                                        {audience.title}
                                    </h3>

                                    <p className="mt-3 text-[12px] font-medium leading-6 text-[#667085] lg:text-[13px]">
                                        {audience.description}
                                    </p>

                                    <div className="mt-auto pt-5">
                                        <div className="border-t border-[#F2F4F7] pt-4">
                                            <div className="flex items-start gap-2">
                                                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#12B76A]" />

                                                <span className="text-[10px] font-extrabold leading-4 text-[#475467] xl:text-[11px]">
                                                    {audience.statement}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Shared language */}
                <div className="relative mt-6 overflow-hidden rounded-[28px] bg-[#101828] sm:mt-8 sm:rounded-[32px]">
                    {/* Background decoration */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                    >
                        <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#FF9D00]/10 blur-[100px]" />

                        <div className="absolute bottom-[-170px] left-[20%] h-[320px] w-[320px] rounded-full bg-white/[0.025] blur-[80px]" />
                    </div>

                    <div className="relative grid gap-10 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-14 lg:py-14 xl:px-16">
                        {/* Statement */}
                        <div>
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF9D00]">
                                    <LinkIcon />
                                </span>

                                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#FFB84D]">
                                    Ortak Bir Dil
                                </span>
                            </div>

                            <h3 className="mt-5 max-w-[620px] text-[27px] font-extrabold leading-[1.15] tracking-[-0.045em] text-white sm:text-[34px] lg:text-[39px]">
                                Herkes farklı bir yerden bakar.
                                <span className="text-[#FFB84D]">
                                    {" "}
                                    ENOKSİS aynı öğrencide buluşturur.
                                </span>
                            </h3>

                            <p className="mt-4 max-w-[600px] text-[14px] font-medium leading-7 text-[#BFC6D4] sm:text-[15px]">
                                Öğretmenin sınıftaki gözlemi, rehber
                                öğretmenin çalışmaları, ailenin deneyimi ve
                                öğrencinin bireysel yapısı birbirinden kopuk
                                kalmaz.
                            </p>
                        </div>

                        {/* Ecosystem diagram */}
                        <EcosystemDiagram />
                    </div>
                </div>
            </Container>
        </section>
    );
}

function EcosystemDiagram() {
    return (
        <div className="relative mx-auto w-full max-w-[520px]">
            {/* Desktop / tablet */}
            <div className="relative hidden aspect-[1.8/1] sm:block">
                {/* Connection lines */}
                <div
                    aria-hidden="true"
                    className="absolute left-[16%] right-[16%] top-1/2 h-px bg-white/10"
                />

                <div
                    aria-hidden="true"
                    className="absolute bottom-[20%] left-1/2 top-[20%] w-px -translate-x-1/2 bg-white/10"
                />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 z-20 flex h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#FF9D00]/30 bg-[#182230] shadow-[0_0_0_10px_rgba(255,255,255,0.025)]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF9D00] text-[#101828]">
                        <StudentIcon />
                    </span>

                    <span className="mt-2 text-[11px] font-extrabold text-white">
                        Öğrenci
                    </span>

                    <span className="mt-0.5 text-[8px] font-bold text-[#98A2B3]">
                        Merkezde
                    </span>
                </div>

                <DiagramNode
                    className="left-0 top-1/2 -translate-y-1/2"
                    label="Rehber Öğretmen"
                />

                <DiagramNode
                    className="right-0 top-1/2 -translate-y-1/2"
                    label="Öğretmen"
                />

                <DiagramNode
                    className="left-1/2 top-0 -translate-x-1/2"
                    label="Okul Yönetimi"
                />

                <DiagramNode
                    className="bottom-0 left-1/2 -translate-x-1/2"
                    label="Veli"
                />
            </div>

            {/* Mobile */}
            <div className="grid grid-cols-2 gap-2 sm:hidden">
                {["Rehber Öğretmen", "Okul Yönetimi", "Öğretmen", "Veli"].map(
                    (label) => (
                        <div
                            key={label}
                            className="rounded-[14px] border border-white/10 bg-white/[0.05] px-3 py-3 text-center"
                        >
                            <span className="text-[10px] font-bold text-[#D0D5DD]">
                                {label}
                            </span>
                        </div>
                    )
                )}

                <div className="col-span-2 mt-1 flex items-center justify-center gap-2 rounded-[14px] bg-[#FF9D00] px-3 py-3">
                    <StudentIcon />

                    <span className="text-[11px] font-extrabold text-[#101828]">
                        Merkezde Öğrenci
                    </span>
                </div>
            </div>
        </div>
    );
}

function DiagramNode({
    label,
    className,
}: {
    label: string;
    className: string;
}) {
    return (
        <div
            className={`absolute z-10 flex min-h-[48px] w-[116px] items-center justify-center rounded-[14px] border border-white/10 bg-[#1D2939] px-3 text-center ${className}`}
        >
            <span className="text-[9px] font-bold leading-4 text-[#D0D5DD]">
                {label}
            </span>
        </div>
    );
}

function GuidanceIcon() {
    return (
        <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M4 19V14L9 9L13 13L20 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 6H20V11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function SchoolIcon() {
    return (
        <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M4 20V9L12 4L20 9V20"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 20H21.5M9 20V15H15V20M8 10H8.01M12 10H12.01M16 10H16.01"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
        </svg>
    );
}

function TeacherIcon() {
    return (
        <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="8"
                cy="7"
                r="3"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <path
                d="M3 19V17C3 14.8 4.8 13 7 13H9C11.2 13 13 14.8 13 17V19"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <path
                d="M14 6H21V14H16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function FamilyIcon() {
    return (
        <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="8"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <circle
                cx="17"
                cy="10"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <path
                d="M3 20C3.4 16.8 5.2 15 8 15C10.8 15 12.6 16.8 13 20"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <path
                d="M14 16C14.8 15.3 15.8 15 17 15C19.3 15 20.7 16.5 21 19"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
        </svg>
    );
}

function StudentIcon() {
    return (
        <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="8"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <path
                d="M5 20C5.6 16.5 8 14.5 12 14.5C16 14.5 18.4 16.5 19 20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}

function LinkIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-[#101828]"
        >
            <path
                d="M9.5 14.5L14.5 9.5M8 16L6.5 17.5C4.8 19.2 2.2 19.2.5 17.5C-1.2 15.8-1.2 13.2.5 11.5L4 8"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
            />
            <path
                d="M16 8L17.5 6.5C19.2 4.8 21.8 4.8 23.5 6.5C25.2 8.2 25.2 10.8 23.5 12.5L20 16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
            />
        </svg>
    );
}