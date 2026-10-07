import Container from "@/components/ui/Container";

const insights = [
    {
        no: "01",
        eyebrow: "DAVRANIŞIN ÖTESİNDE",
        title: "Aynı davranış,",
        highlight: "aynı ihtiyacı anlatmaz.",
        description:
            "İki öğrenci aynı tepkiyi verebilir; fakat bu tepkinin arkasındaki motivasyon, ihtiyaç ve beklenti tamamen farklı olabilir.",
        result: "Davranışın arkasındaki nedeni görün.",
        icon: FingerprintIcon,
    },
    {
        no: "02",
        eyebrow: "BÜTÜNCÜL BAKIŞ",
        title: "Bir öğrenciyi,",
        highlight: "tek bir veri anlatamaz.",
        description:
            "Notlar, gözlemler ve görüşmeler değerlidir. Ancak öğrenciyi gerçekten anlamak, tüm bu verileri anlamlı bir bütün içinde değerlendirmekle mümkündür.",
        result: "Parçaları tek bir öğrenci profilinde birleştirin.",
        icon: LayersIcon,
    },
    {
        no: "03",
        eyebrow: "KİŞİYE ÖZEL REHBERLİK",
        title: "Her öğrenci gelişir,",
        highlight: "ama aynı yoldan değil.",
        description:
            "Öğrencilerin motive olma, iletişim kurma, öğrenme ve desteklenme biçimleri farklıdır. Etkili rehberlik bu farklılığı dikkate alır.",
        result: "Desteği öğrencinin doğasına göre şekillendirin.",
        icon: RouteIcon,
    },
];

export default function WhyEnoksis() {
    return (
        <section
            id="enoksis"
            aria-labelledby="why-enoksis-title"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
        >
            {/* Minimal background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute right-[-180px] top-[10%] h-[440px] w-[440px] rounded-full bg-[#FF9D00]/[0.045] blur-[110px]" />

                <div className="absolute left-0 top-[36%] h-px w-full bg-gradient-to-r from-transparent via-[#EAECF0]/70 to-transparent" />
            </div>

            <Container className="relative">
                {/* Main layout */}
                <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28">
                    {/* Sticky editorial heading */}
                    <div>
                        <div className="lg:sticky lg:top-28">
                            <div className="inline-flex items-center gap-3">
                                <span className="h-px w-8 bg-[#FF9D00]" />

                                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B86F00] sm:text-[11px]">
                                    Neden ENOKSİS?
                                </span>
                            </div>

                            <h2
                                id="why-enoksis-title"
                                className="mt-6 max-w-[540px] text-[36px] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#101828] sm:text-[46px] lg:text-[52px] xl:text-[58px]"
                            >
                                Öğrenciyi görmek başka,
                                <span className="mt-1 block text-[#FF9D00]">
                                    onu anlamak başka.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-[480px] text-[15px] font-medium leading-7 text-[#667085] sm:text-[16px]">
                                Eğitimde çoğu zaman öğrencinin ne yaptığını
                                görüyoruz. ENOKSİS ise{" "}
                                <strong className="font-bold text-[#344054]">
                                    neden öyle davrandığını
                                </strong>{" "}
                                anlamaya yardımcı olan bir perspektif sunar.
                            </p>

                            {/* Small philosophy note */}
                            <div className="mt-8 hidden max-w-[430px] items-start gap-3 border-t border-[#EAECF0] pt-6 lg:flex">
                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4DF]">
                                    <SparkIcon />
                                </div>

                                <p className="text-[12px] font-semibold leading-5 text-[#667085]">
                                    Daha doğru tanıma, daha doğru iletişim ve
                                    daha kişiselleştirilmiş rehberlik.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Insights */}
                    <div className="relative">
                        {/* Timeline */}
                        <div
                            aria-hidden="true"
                            className="absolute bottom-12 left-[27px] top-12 hidden w-px bg-gradient-to-b from-[#FF9D00]/40 via-[#EAECF0] to-transparent sm:block"
                        />

                        <div className="space-y-4 sm:space-y-5">
                            {insights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.no}
                                        className="group relative rounded-[24px] border border-[#EAECF0] bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 sm:rounded-[28px] sm:p-8 lg:hover:-translate-y-1 lg:hover:border-[#FF9D00]/30 lg:hover:shadow-[0_22px_55px_-22px_rgba(16,24,40,0.22)]"
                                    >
                                        <div className="grid gap-6 sm:grid-cols-[56px_1fr] sm:gap-7">
                                            {/* Icon / timeline point */}
                                            <div className="relative z-10">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#FFE2B3] bg-[#FFF8EC] text-[#C77800] transition-[background-color,color,border-color] duration-300 lg:group-hover:border-[#FF9D00] lg:group-hover:bg-[#FF9D00] lg:group-hover:text-[#101828]">
                                                    <Icon />
                                                </div>
                                            </div>

                                            <div>
                                                {/* Meta */}
                                                <div className="flex items-center justify-between gap-4">
                                                    <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#B86F00] sm:text-[10px]">
                                                        {item.eyebrow}
                                                    </span>

                                                    <span className="text-[11px] font-extrabold tracking-[0.08em] text-[#D0D5DD]">
                                                        {item.no}
                                                    </span>
                                                </div>

                                                <h3 className="mt-3 text-[23px] font-extrabold leading-[1.16] tracking-[-0.04em] text-[#101828] sm:text-[27px]">
                                                    {item.title}
                                                    <span className="block text-[#FF9D00]">
                                                        {item.highlight}
                                                    </span>
                                                </h3>

                                                <p className="mt-4 max-w-[620px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px]">
                                                    {item.description}
                                                </p>

                                                {/* Result */}
                                                <div className="mt-5 flex items-start gap-2.5 border-t border-[#F2F4F7] pt-4">
                                                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#12B76A]" />

                                                    <p className="text-[12px] font-bold leading-5 text-[#344054] sm:text-[13px]">
                                                        {item.result}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ENOKSİS answer */}
                <div className="relative mt-16 overflow-hidden rounded-[28px] bg-[#101828] sm:mt-20 sm:rounded-[32px] lg:mt-24">
                    {/* Decoration */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                    >
                        <div className="absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full bg-[#FF9D00]/10 blur-[100px]" />

                        <div className="absolute right-[8%] top-1/2 hidden h-[330px] w-[330px] -translate-y-1/2 rounded-full border border-white/[0.04] lg:block" />

                        <div className="absolute right-[12%] top-1/2 hidden h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-white/[0.05] lg:block" />
                    </div>

                    <div className="relative grid gap-10 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-14 lg:py-14 xl:px-16">
                        <div>
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF9D00]">
                                    <CheckIcon />
                                </span>

                                <span className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#FFB84D]">
                                    ENOKSİS yaklaşımı
                                </span>
                            </div>

                            <h3 className="mt-5 max-w-[720px] text-[27px] font-extrabold leading-[1.14] tracking-[-0.045em] text-white sm:text-[34px] lg:text-[40px]">
                                Her öğrenci için aynı reçete değil,
                                <span className="text-[#FFB84D]">
                                    {" "}
                                    doğru yaklaşım.
                                </span>
                            </h3>

                            <p className="mt-4 max-w-[680px] text-[14px] font-medium leading-7 text-[#BFC6D4] sm:text-[15px]">
                                ENOKSİS, mizaç bilgisini rehberlik
                                süreçleriyle bir araya getirerek öğrenciyi
                                tanımayı yalnızca bir değerlendirme olmaktan
                                çıkarır; günlük eğitim sürecinin bir parçası
                                haline getirir.
                            </p>
                        </div>

                        {/* Flow */}
                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute left-[16%] right-[16%] top-[22px] h-px bg-white/10"
                            />

                            <div className="relative grid grid-cols-3 gap-2 sm:gap-4">
                                <Step
                                    number="01"
                                    label="Tanı"
                                    description="Farklılığı gör"
                                />
                                <Step
                                    number="02"
                                    label="Anla"
                                    description="İhtiyacı keşfet"
                                />
                                <Step
                                    number="03"
                                    label="Destekle"
                                    description="Doğru yaklaşımı seç"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Step({
    number,
    label,
    description,
}: {
    number: string;
    label: string;
    description: string;
}) {
    return (
        <div className="relative text-center">
            <div className="relative z-10 mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1D2939] text-[10px] font-extrabold text-[#FFB84D] shadow-[0_0_0_6px_#101828]">
                {number}
            </div>

            <p className="mt-4 text-[13px] font-extrabold text-white sm:text-[15px]">
                {label}
            </p>

            <p className="mt-1 hidden text-[10px] font-medium leading-4 text-[#98A2B3] sm:block">
                {description}
            </p>
        </div>
    );
}

function FingerprintIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M7.5 9.5C8.3 7.8 9.8 7 12 7C15 7 17 9 17 12C17 15.7 15.9 18.4 14.2 20.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <path
                d="M5 12C5 7.8 7.8 5 12 5C16.2 5 19 7.8 19 12C19 15 18.5 17.4 17.4 19.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <path
                d="M9 12C9 10.2 10.1 9 12 9C13.9 9 15 10.2 15 12C15 15.1 14.3 17.5 12.8 20"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <path
                d="M7 15C7.1 17 6.6 18.7 5.8 20"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <path
                d="M11.5 12.5C11.5 15.6 10.9 18.1 9.5 20.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
        </svg>
    );
}

function LayersIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M12 3.5L21 8L12 12.5L3 8L12 3.5Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />
            <path
                d="M5 12L12 15.5L19 12"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 16L12 19.5L19 16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function RouteIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="6"
                cy="18"
                r="2"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <circle
                cx="18"
                cy="6"
                r="2"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <path
                d="M8 18H10C12.2 18 14 16.2 14 14V10C14 7.8 15.8 6 18 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            <path
                d="M8 6H10.5C12.4 6 14 7.6 14 9.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeDasharray="2.5 3"
            />
        </svg>
    );
}

function SparkIcon() {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-[#C77800]"
        >
            <path
                d="M12 3L13.7 8.3L19 10L13.7 11.7L12 17L10.3 11.7L5 10L10.3 8.3L12 3Z"
                fill="currentColor"
            />
        </svg>
    );
}

function CheckIcon() {
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
                d="M5 12.5L9.5 17L19 7.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}