import Image from "next/image";
import Container from "@/components/ui/Container";
import { GraduationCap, UserRound, BookOpenCheck, Sprout, Check } from "lucide-react";
const steps = [
    {
        number: "01",
        phase: "HAZIRLIK",
        title: "Önce aynı dili",
        highlight: "konuşmaya başlıyoruz.",
        description:
            "Eğitim, seminer ve atölyelerde kurum yöneticileri, rehber öğretmenler, sınıf öğretmenleri ve veliler Enneagram ve mizaç tiplerini yakından tanır. Her mizaca özel gelişim önerilerini öğrenir, ENOKSİS uygulaması hakkında bilgi edinir ve öğrenciyi anlamak için ortak bir bakış açısı kazanır.",
        image: "/images/process/enoksis123.png",
        imageAlt: "ENOKSİS eğitim ve mizaç yaklaşımı ekranı",
        stat: "Ortak Bakış",
        icon: GraduationCap,
    },
    {
        number: "02",
        phase: "TANIMA",
        title: "Her öğrencinin kendine özgü",
        highlight: "yapısını görünür kılıyoruz.",
        description:
            "Anaokulu, ilkokul, ortaokul, lise ve yetişkinlere özel hazırlanan çevrim içi Enneagram Mizaç Testi ortalama 20–25 dakikada tamamlanır. Öğrenciler kendilerine özel 16 başlıktan oluşan mizaç raporlarına ulaşır; güçlü yönlerini, ihtiyaçlarını ve gelişim alanlarını keşfeder.",
        image: "/images/process/denemeogrenci.png",
        imageAlt: "ENOKSİS öğrenci mizaç testi ve raporlama ekranı",
        stat: "16 Başlıklı Rapor",
        icon: UserRound,
    },
    {
        number: "03",
        phase: "REHBERLİK",
        title: "Veriyi raporda bırakmıyor,",
        highlight: "gelişime dönüştürüyoruz.",
        description:
            "Üçüncü aşamada ENREHET (Enneagram Rehberlik Etkinlikleri) devreye girer. Rehberlik servisi ve ilgili öğretmenler, çocukların mizaç özelliklerini merkeze alan etkinlikleri çevrim içi platformdan indirerek öğrencilere uygular. Böylece mizaç bilgisi somut rehberlik çalışmalarına dönüşür.",
        image: "/images/process/ssenrehet.png",
        imageAlt: "ENOKSİS mizaç merkezli rehberlik ekranı",
        stat: "ENREHET Etkinlikleri",
        icon: BookOpenCheck,
    },
    {
        number: "04",
        phase: "SÜPERVİZYON",
        title: "Süreci yalnız bırakmıyor,",
        highlight: "birlikte geliştiriyoruz.",
        description:
            "Rehber öğretmenler ve velilerle yılda dört kez gerçekleştirilen mizaç merkezli süpervizyon görüşmelerinde uygulama süreci değerlendirilir. İhtiyaçlar ve gelişim alanları ele alınarak öğrenciye sunulan desteğin sürdürülebilirliği güçlendirilir.",
        stat: "Yılda 4 Süpervizyon",
        icon: Sprout,
    },
];
export default function PlatformShowcase() {
    return (
        <section
            id="nasil-calisir"
            aria-labelledby="process-title"
            className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-32"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D0D5DD] to-transparent" />
                <div className="absolute -left-40 top-[30%] h-[380px] w-[380px] rounded-full bg-[#FF9D00]/[0.04] blur-[100px]" />
            </div>
            <Container className="relative">
                {/* Header */}
                <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-[#FF9D00]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B86F00] sm:text-[11px]">
                                ENOKSİS Nasıl Çalışır?
                            </span>
                        </div>
                        <h2
                            id="process-title"
                            className="mt-5 max-w-[650px] text-[35px] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#101828] sm:text-[44px] lg:text-[54px]"
                        >
                            Bir testten
                            <span className="text-[#FF9D00]">
                                {" "}
                                çok daha fazlası.
                            </span>
                        </h2>
                    </div>
                    <div className="lg:pb-1">
                        <p className="max-w-[650px] text-[17px] font-bold leading-[1.55] tracking-[-0.02em] text-[#344054] sm:text-[20px]">
                            Öğrenciyi tanımak başlangıç.
                            Asıl değer, bu bilgiyi eğitime taşımakta.
                        </p>
                        <p className="mt-3 max-w-[640px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px]">
                            13 yıllık deneyimimiz, kullanıcı dostu platformumuz ve uzman ekibimizle ENOKSİS; okulun öğrenciyi tanıma, anlama ve
                            destekleme biçimini dört birbirini tamamlayan
                            aşamada yapılandırır.
                        </p>
                    </div>
                </div>
                {/* Process overview */}
                <div className="mt-12 overflow-hidden rounded-[22px] border border-[#E4E7EC] bg-white sm:mt-14 lg:mt-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={[
                                    "relative px-5 py-5 sm:px-6 sm:py-6",
                                    index % 2 === 0
                                        ? "border-r border-[#EAECF0]"
                                        : "",
                                    index < 2
                                        ? "border-b border-[#EAECF0] lg:border-b-0"
                                        : "",
                                    index !== steps.length - 1
                                        ? "lg:border-r lg:border-[#EAECF0]"
                                        : "lg:border-r-0",
                                ].join(" ")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-extrabold text-[#FF9D00]">
                                        {step.number}
                                    </span>
                                    <span className="h-px flex-1 bg-[#EAECF0]" />
                                </div>
                                <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#475467] sm:text-[12px]">
                                    {step.phase}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Process */}
                <div className="relative mt-10 sm:mt-14 lg:mt-20">
                    {/* Desktop timeline */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-20 left-1/2 top-20 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#FF9D00]/30 via-[#D0D5DD] to-transparent lg:block"
                    />
                    <div className="space-y-16 sm:space-y-20 lg:space-y-28">
                        {steps.map((step, index) => (
                            <ProcessStep
                                key={step.number}
                                step={step}
                                reverse={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
                {/* Final statement */}
                <div className="relative mt-20 overflow-hidden rounded-[28px] bg-[#101828] px-6 py-9 sm:mt-24 sm:rounded-[32px] sm:px-10 sm:py-12 lg:mt-28 lg:px-14">
                    <div
                        aria-hidden="true"
                        className="absolute -right-24 -top-32 h-[350px] w-[350px] rounded-full bg-[#FF9D00]/10 blur-[100px]"
                    />
                    <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
                        <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#FFB84D]">
                                Tek bir sistem • Sürekli gelişim
                            </span>
                            <h3 className="mt-4 max-w-[760px] text-[26px] font-extrabold leading-[1.16] tracking-[-0.04em] text-white sm:text-[32px] lg:text-[37px]">
                                Bilgi, ancak doğru şekilde kullanıldığında
                                <span className="text-[#FFB84D]">
                                    {" "}
                                    gelişime dönüşür.
                                </span>
                            </h3>
                            <p className="mt-4 max-w-[700px] text-[14px] font-medium leading-7 text-[#BFC6D4] sm:text-[15px]">
                                Bu nedenle ENOKSİS yalnızca öğrenciyi tanıyan
                                değil, elde edilen bilgiyi rehberlik sürecine
                                taşıyan bütüncül bir yapı sunar.
                            </p>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {["Eğitim", "Test", "Rehberlik", "Süpervizyon"].map(
                                (label, index) => (
                                    <div
                                        key={label}
                                        className="flex min-w-0 flex-col items-center"
                                    >
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[9px] font-extrabold text-[#FFB84D] sm:h-10 sm:w-10">
                                            0{index + 1}
                                        </span>
                                        <span className="mt-2 hidden text-[9px] font-bold text-[#D0D5DD] sm:block">
                                            {label}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
type Step = (typeof steps)[number];
function ProcessStep({
    step,
    reverse,
}: {
    step: Step;
    reverse: boolean;
}) {
    const Icon = step.icon;
    return (
        <article className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-20 xl:gap-28">
            {/* Timeline marker */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-[#F8FAFC] bg-[#FF9D00] text-[9px] font-black text-[#101828] shadow-[0_0_0_1px_rgba(255,157,0,0.18)] lg:flex"
            >
                {step.number}
            </div>
            {/* Content */}
            <div
                className={
                    reverse
                        ? "lg:order-2 lg:pl-8"
                        : "lg:order-1 lg:pr-8"
                }
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#FFE2B3] bg-[#FFF7E8] text-[#C77800]">
                        <Icon />
                    </div>
                    <div>
                        <span className="block text-[9px] font-extrabold tracking-[0.12em] text-[#98A2B3]">
                            {step.number} / 04
                        </span>
                        <span className="mt-0.5 block text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#B86F00]">
                            {step.phase}
                        </span>
                    </div>
                </div>
                <h3 className="mt-5 max-w-[570px] text-[27px] font-extrabold leading-[1.13] tracking-[-0.045em] text-[#101828] sm:text-[33px] lg:text-[38px]">
                    {step.title}
                    <span className="block text-[#FF9D00]">
                        {step.highlight}
                    </span>
                </h3>
                <p className="mt-5 max-w-[570px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px] sm:leading-8">
                    {step.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#E4E7EC] bg-white px-3.5 py-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ECFDF3]">
                        <Check size={12} strokeWidth={3} className="text-[#12B76A]" />
                    </span>
                    <span className="text-[11px] font-extrabold text-[#344054] sm:text-[12px]">
                        {step.stat}
                    </span>
                </div>
            </div>
            {/* Visual */}
            <div
                className={
                    reverse ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
                }
            >
                {step.image ? (
                    <ProductVisual
                        src={step.image}
                        alt={step.imageAlt ?? ""}
                        number={step.number}
                        phase={step.phase}
                    />
                ) : (
                    <SupervisionVisual />
                )}
            </div>
        </article>
    );
}
function ProductVisual({
    src,
    alt,
    number,
    phase,
}: {
    src: string;
    alt: string;
    number: string;
    phase: string;
}) {
    return (
        <div className="relative">
            <div
                aria-hidden="true"
                className="absolute inset-x-[10%] bottom-[-8%] h-[50%] rounded-full bg-[#101828]/[0.08] blur-[45px]"
            />
            <div className="relative overflow-hidden rounded-[22px] border border-[#DDE2EA] bg-white shadow-[0_24px_65px\_-22px_rgba(16,24,40,0.26)] sm:rounded-[26px]">
                {/* Browser chrome */}
                <div className="flex h-11 items-center border-b border-[#EAECF0] bg-[#FCFCFD] px-4 sm:h-12">
                    <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#FDA29B]" />
                        <span className="h-2 w-2 rounded-full bg-[#FEC84B]" />
                        <span className="h-2 w-2 rounded-full bg-[#6CE9A6]" />
                    </div>
                    <div className="mx-auto flex h-6 items-center rounded-md border border-[#EAECF0] bg-white px-4">
                        <span className="text-[7px] font-bold text-[#98A2B3] sm:text-[8px]">
                            app.enoksis.com
                        </span>
                    </div>
                    <div className="w-6" />
                </div>
                <Image
                    src={src}
                    alt={alt}
                    width={1100}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="h-auto w-full object-contain"
                />
            </div>
            <div className="absolute -bottom-3 right-4 flex items-center gap-2 rounded-full border border-[#EAECF0] bg-white px-3.5 py-2 shadow-[0_8px_24px_rgba(16,24,40,0.09)] sm:right-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#12B76A]" />
                <span className="text-[8px] font-extrabold uppercase tracking-[0.08em] text-[#475467] sm:text-[9px]">
                    {number} • {phase}
                </span>
            </div>
        </div>
    );
}
function SupervisionVisual() {
    return (
        <div className="relative overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-white p-6 shadow-[0_24px_65px\_-22px_rgba(16,24,40,0.20)] sm:p-8">
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#B86F00]">
                        Sürekli Destek
                    </span>
                    <p className="mt-1 text-[16px] font-extrabold tracking-[-0.03em] text-[#101828] sm:text-[18px]">
                        Süpervizyon Döngüsü
                    </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4DF] text-[#C77800]">
                    <Sprout />
                </span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
                <SupervisionCard
                    number="01"
                    title="Değerlendir"
                    text="Uygulama sürecini gözden geçir."
                />
                <SupervisionCard
                    number="02"
                    title="İhtiyacı Gör"
                    text="Gelişim alanlarını belirle."
                />
                <SupervisionCard
                    number="03"
                    title="Destekle"
                    text="Ekibin uygulamasını güçlendir."
                />
                <SupervisionCard
                    number="04"
                    title="Sürdür"
                    text="Yaklaşımı okul kültürüne taşı."
                />
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-[16px] bg-[#101828] px-4 py-3.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF9D00]">
                    <Check size={12} strokeWidth={3} className="text-[#101828]" />
                </span>
                <p className="text-[10px] font-bold leading-5 text-[#D0D5DD] sm:text-[11px]">
                    Ölç, değerlendir, geliştir ve yeniden uygula.
                </p>
            </div>
        </div>
    );
}
function SupervisionCard({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-[16px] border border-[#EAECF0] bg-[#FCFCFD] p-4">
            <span className="text-[9px] font-extrabold text-[#FF9D00]">
                {number}
            </span>
            <p className="mt-2 text-[12px] font-extrabold text-[#101828] sm:text-[13px]">
                {title}
            </p>
            <p className="mt-1 text-[9px] font-medium leading-4 text-[#667085] sm:text-[10px]">
                {text}
            </p>
        </div>
    );
}