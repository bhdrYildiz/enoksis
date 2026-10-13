"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
const temperaments = [
    {
        number: 1,
        title: "Doğru ve iyi olanı yapmak ister.",
        quote: "Doğru olanı yapmak benim için önemlidir.",
        need: "Doğruluk, tutarlılık ve gelişim",
        strength: "Sorumluluk, düzen ve ilkelilik",
        challenge: "Hata yapmaya ve eksikliklere karşı daha hassas olabilir.",
        guidance: "Beklentilerin açık olduğu, emeğinin ve gelişiminin fark edildiği bir yaklaşım destekleyicidir.",
    },
    {
        number: 2,
        title: "Bağ kurmak ve değer katmak ister.",
        quote: "Sevdiğim insanların yanında olmak benim için önemlidir.",
        need: "Sevilmek, değer görmek ve bağ kurmak",
        strength: "İlgi, empati ve yardımseverlik",
        challenge: "Kendi ihtiyaçlarını geri plana atabilir.",
        guidance: "Kendi ihtiyaçlarını da fark etmesine alan açan, sıcak fakat sınırları belirgin bir yaklaşım destekleyicidir.",
    },
    {
        number: 3,
        title: "Başarmak ve ilerlemek ister.",
        quote: "Yapabileceğimi görmek beni harekete geçirir.",
        need: "Başarı, gelişim ve değer üretmek",
        strength: "Hedef odaklılık, enerji ve uyum",
        challenge: "Sonuca fazla odaklandığında süreci ve kendi ihtiyaçlarını gözden kaçırabilir.",
        guidance: "Sonuç kadar çabayı ve öğrenme sürecini de görünür kılan bir yaklaşım destekleyicidir.",
    },
    {
        number: 4,
        title: "Kendine özgü biçimde anlaşılmak ister.",
        quote: "Kendim olarak anlaşılmak benim için önemlidir.",
        need: "Anlaşılmak, özgünlük ve anlam",
        strength: "Duyarlılık, özgünlük ve derinlik",
        challenge: "Duygusal deneyimlerine yoğun biçimde odaklanabilir.",
        guidance: "Duygularını ifade etmesine alan açan ve somut adımlara yönelten bir yaklaşım destekleyicidir.",
    },
    {
        number: 5,
        title: "Anlamak ve yeterli olmak ister.",
        quote: "Önce anlamak, sonra harekete geçmek isterim.",
        need: "Bilgi, yeterlilik ve kişisel alan",
        strength: "Gözlem, analiz ve merak",
        challenge: "Hazır hissetmeden harekete geçmekte zorlanabilir.",
        guidance: "Düşünmesi için alan tanıyan, beklentileri önceden açıklayan ve katılımı kademeli artıran bir yaklaşım destekleyicidir.",
    },
    {
        number: 6,
        title: "Güvende hissetmek ve emin olmak ister.",
        quote: "Ne olacağını bilmek bana güven verir.",
        need: "Güven, öngörülebilirlik ve destek",
        strength: "Tedbir, sorumluluk ve bağlılık",
        challenge: "Belirsizlik karşısında olası risklere fazla odaklanabilir.",
        guidance: "Belirsizliği azaltan, açık ve güven veren bir iletişim yaklaşımı destekleyicidir.",
    },
    {
        number: 7,
        title: "Keşfetmek ve seçeneklerini açık tutmak ister.",
        quote: "Yeni ihtimaller beni heyecanlandırır.",
        need: "Özgürlük, çeşitlilik ve deneyim",
        strength: "Merak, enerji ve üretken fikirler",
        challenge: "Tekdüzelik ve uzun süreli sınırlamalar karşısında motivasyonu azalabilir.",
        guidance: "Seçenek sunan fakat sınırları net olan, merakını öğrenmeye yönlendiren bir yaklaşım destekleyicidir.",
    },
    {
        number: 8,
        title: "Güçlü durmak ve kendi alanını korumak ister.",
        quote: "Kendi gücümü kullanabilmek benim için önemlidir.",
        need: "Güç, bağımsızlık ve adalet",
        strength: "Cesaret, kararlılık ve koruyuculuk",
        challenge: "Kontrol edildiğini hissettiğinde daha sert tepki verebilir.",
        guidance: "Açık, doğrudan ve saygılı iletişim kuran; sorumluluk almasına alan açan bir yaklaşım destekleyicidir.",
    },
    {
        number: 9,
        title: "Huzuru ve uyumu korumak ister.",
        quote: "Kendimi rahat hissettiğimde daha kolay açılırım.",
        need: "Huzur, kabul ve uyum",
        strength: "Sakinlik, uyum ve farklı bakışları görebilme",
        challenge: "Gerilimden kaçınmak için kendi önceliklerini erteleyebilir.",
        guidance: "Fikrini ifade etmesini teşvik eden ve küçük adımlarla harekete geçmesini destekleyen bir yaklaşım yararlıdır.",
    },
];
const positions = [
    { x: 76.997, y: 17.826 },
    { x: 91.362, y: 42.707 },
    { x: 86.373, y: 71.0 },
    { x: 64.365, y: 89.467 },
    { x: 35.635, y: 89.467 },
    { x: 13.627, y: 71.0 },
    { x: 8.638, y: 42.707 },
    { x: 23.003, y: 17.826 },
    { x: 50.0, y: 8.0 },
];
export default function TemperamentSection() {
    const [active, setActive] = useState(0);
    const temperament = temperaments[active];
    return (
        <section id="mizaclar" className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-[300px] top-[200px] h-[650px] w-[650px] rounded-full bg-[#FF9D00]/[0.06] blur-[140px]" />
                <div className="absolute -right-[300px] bottom-[50px] h-[650px] w-[650px] rounded-full bg-[#101828]/[0.04] blur-[140px]" />
            </div>
            <Container className="relative">
                <div className="mx-auto max-w-[850px] text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#EAECF0] bg-white px-3.5 py-2 shadow-[0_1px_3px_rgba(16,24,40,0.04)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#667085] sm:text-[11px]">MİZAÇ MERKEZLİ YAKLAŞIM</span>
                    </div>
                    <h2 className="mt-5 text-[34px] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#101828] sm:text-[44px] lg:text-[54px]">Her öğrenci <span className="text-[#FF9D00]">farklı bir dünyadır.</span></h2>
                    <p className="mx-auto mt-5 max-w-[700px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[16px] sm:leading-8">Mizaç merkezli yaklaşım, öğrencinin yalnızca ne yaptığını değil; davranışlarının arkasındaki ihtiyaçları ve bireysel farklılıklarını da anlamaya yardımcı olur.</p>
                </div>
                {/* Mobile temperament selector */}
                <div className="mt-10 overflow-x-auto pb-2 lg:hidden">
                    <div className="mx-auto flex min-w-[590px] items-center justify-center gap-2">
                        {temperaments.map((item, index) => (
                            <button key={item.number} type="button" onClick={() => setActive(index)} aria-label={`Mizaç ${item.number}`} className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-[12px] font-extrabold transition-all duration-300 ${active === index ? "border-[#FF9D00] bg-[#FF9D00] text-[#101828] shadow-[0_7px_18px_rgba(255,157,0,0.25)]" : "border-[#E4E7EC] bg-white text-[#667085]"}`}>{item.number}</button>
                        ))}
                    </div>
                </div>
                {/* Main area */}
                <div className="mt-8 grid overflow-hidden rounded-[30px] border border-[#E4E7EC] bg-white shadow-[0_30px_90px_rgba(16,24,40,0.07)] sm:rounded-[36px] lg:mt-16 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Enneagram */}
                    <div className="relative hidden min-h-[680px] items-center justify-center overflow-hidden border-r border-[#EAECF0] bg-[#101828] p-10 lg:flex">
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF9D00]/[0.06] blur-[80px]" />
                        <div className="relative aspect-square w-full max-w-[520px]">
                            <EnneagramLines active={active} />
                            {positions.map((position, index) => (
                                <button key={index} type="button" onClick={() => setActive(index)} aria-label={`Mizaç ${index + 1}`} className={`absolute z-20 flex h-[52px] w-[52px] cursor-pointer -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[14px] font-extrabold transition-all duration-500 ${active === index ? "scale-[1.18] border-[#FF9D00] bg-[#FF9D00] text-[#101828] shadow-[0_0_0_7px_rgba(255,157,0,0.10),0_12px_30px_rgba(255,157,0,0.25)]" : "border-white/15 bg-[#182230] text-[#98A2B3] hover:scale-110 hover:border-[#FF9D00]/60 hover:text-white"}`} style={{ left: `${position.x}%`, top: `${position.y}%` }}>{index + 1}</button>
                            ))}
                        </div>
                    </div>
                    {/* Content */}
                    <div key={temperament.number} className="temperament-content-enter flex min-h-[620px] flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-16">
                        <div className="flex items-center justify-between gap-5">
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#FF9D00] text-[15px] font-extrabold text-[#101828]">{temperament.number}</span>
                                <div>
                                    <span className="block text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#98A2B3]">ENNEAGRAM</span>
                                    <span className="mt-0.5 block text-[13px] font-extrabold text-[#101828]">Mizaç {temperament.number}</span>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#98A2B3]">{String(temperament.number).padStart(2, "0")} / 09</span>
                        </div>
                        <h3 className="mt-8 max-w-[590px] text-[28px] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#101828] sm:text-[34px] lg:text-[39px]">{temperament.title}</h3>
                        <div className="mt-5 border-l-[3px] border-[#FF9D00] pl-4">
                            <p className="text-[15px] font-bold italic leading-7 text-[#475467] sm:text-[17px]">“{temperament.quote}”</p>
                        </div>
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            <InfoCard label="TEMEL İHTİYAÇ" value={temperament.need} icon="◎" />
                            <InfoCard label="GÜÇLÜ TARAF" value={temperament.strength} icon="✦" />
                        </div>
                        <div className="mt-3 rounded-[18px] border border-[#EAECF0] bg-[#F9FAFB] p-5">
                            <div className="flex gap-4">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[14px] text-[#667085] shadow-sm">↗</span>
                                <div>
                                    <span className="text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#98A2B3]">ZORLANDIĞINDA</span>
                                    <p className="mt-1.5 text-[13px] font-semibold leading-6 text-[#475467] sm:text-[14px]">{temperament.challenge}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 rounded-[18px] border border-[#FFE0AD] bg-[#FFF8EC] p-5">
                            <div className="flex gap-4">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF9D00] text-[14px] font-extrabold text-[#101828]">✓</span>
                                <div>
                                    <span className="text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#B86F00]">REHBERLİK YAKLAŞIMI</span>
                                    <p className="mt-1.5 text-[13px] font-semibold leading-6 text-[#344054] sm:text-[14px]">{temperament.guidance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-between border-t border-[#EAECF0] pt-6">
                            <button type="button" onClick={() => setActive((current) => (current === 0 ? 8 : current - 1))} className="flex h-10 items-center gap-2 rounded-xl px-3 text-[11px] font-extrabold text-[#667085] transition-colors hover:bg-[#F9FAFB] hover:text-[#101828]">← Önceki</button>
                            <div className="flex gap-1">
                                {temperaments.map((item, index) => (
                                    <button key={item.number} type="button" onClick={() => setActive(index)} aria-label={`Mizaç ${item.number}`} className={`h-1.5 rounded-full transition-all duration-300 ${active === index ? "w-6 bg-[#FF9D00]" : "w-1.5 bg-[#D0D5DD]"}`} />
                                ))}
                            </div>
                            <button type="button" onClick={() => setActive((current) => (current === 8 ? 0 : current + 1))} className="flex h-10 items-center gap-2 rounded-xl px-3 text-[11px] font-extrabold text-[#667085] transition-colors hover:bg-[#F9FAFB] hover:text-[#101828]">Sonraki →</button>
                        </div>
                    </div>
                </div>
                {/* Statement */}
                <div className="mx-auto mt-10 max-w-[850px] text-center sm:mt-14">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#FF9D00]">NEDEN MİZAÇ?</span>
                    <p className="mt-3 text-[21px] font-extrabold leading-[1.4] tracking-[-0.035em] text-[#101828] sm:text-[27px]">Aynı davranış, farklı öğrencilerde <span className="text-[#FF9D00]">farklı bir ihtiyacın</span> ifadesi olabilir.</p>
                </div>
            </Container>
        </section>
    );
}
function InfoCard({ label, value, icon }: { label: string; value: string; icon: string }) {
    return (
        <div className="rounded-[18px] border border-[#EAECF0] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.03)]">
            <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF4DF] text-[15px] font-extrabold text-[#D98200]">{icon}</span>
                <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#98A2B3]">{label}</span>
                    <p className="mt-1.5 text-[13px] font-bold leading-5 text-[#344054] sm:text-[14px]">{value}</p>
                </div>
            </div>
        </div>
    );
}
function EnneagramLines({ active }: { active: number }) {
    const hexad = [1, 4, 2, 8, 5, 7, 1];
    const triangle = [9, 3, 6, 9];
    const point = (number: number) => positions[number - 1];
    const toPoints = (numbers: number[]) => numbers.map((number) => {
        const p = point(number);
        return `${p.x},${p.y}`;
    }).join(" ");
    return (
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.55" />
            <polyline points={toPoints(hexad)} fill="none" stroke="rgba(255,255,255,0.27)" strokeWidth="0.55" strokeLinejoin="round" />
            <polyline points={toPoints(triangle)} fill="none" stroke="rgba(255,255,255,0.27)" strokeWidth="0.55" strokeLinejoin="round" />
            <circle cx={positions[active].x} cy={positions[active].y} r="6.8" fill="rgba(255,157,0,0.06)" stroke="rgba(255,157,0,0.32)" strokeWidth="0.35" className="temperament-ring" />
        </svg>
    );
}
