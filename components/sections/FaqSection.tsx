"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const faqs = [
    {
        question: "ENOKSİS nedir?",
        answer: "ENOKSİS; öğrencilerin bireysel farklılıklarını mizaç merkezli bir yaklaşımla anlamaya ve okul rehberlik süreçlerini daha sistemli yürütmeye yardımcı olan bir rehberlik sistemidir. Öğrenciyi tanıma, görüşme ve takip süreçleri, rehberlik çalışmaları ve mizaç temelli veriler aynı yapı içerisinde ele alınır.",
    },
    {
        question: "ENOKSİS kimler için geliştirilmiştir?",
        answer: "ENOKSİS; okul yöneticileri, rehber öğretmenler, öğretmenler, öğrenciler ve velileri kapsayan bütüncül bir yapı sunar. Sistemin merkezinde öğrenci bulunurken okul ve aile, öğrencinin gelişimini destekleyen ortak paydaşlar olarak sürece dahil edilir.",
    },
    {
        question: "Mizaç testi nasıl uygulanır?",
        answer: "Öğrenciler kendi eğitim kademelerine uygun olarak hazırlanan online mizaç testini tamamlar. Elde edilen sonuçlar öğrenciyi daha yakından tanımaya yardımcı olan mizaç bilgileri ve raporlarla rehberlik sürecine dahil edilir.",
    },
    {
        question: "ENOKSİS yalnızca mizaç testi yapan bir sistem midir?",
        answer: "Hayır. Mizaç testi ENOKSİS sürecinin yalnızca bir parçasıdır. Sistem; öğrenciyi tanıma, görüşmeler, gözlemler, notlar, rehberlik çalışmaları ve gelişim sürecinin takibi gibi farklı bileşenleri bir araya getirerek sürdürülebilir bir rehberlik yaklaşımı oluşturmayı amaçlar.",
    },
    {
        question: "ENREHET nedir?",
        answer: "ENREHET, ENOKSİS içerisinde rehberlik çalışmalarına ulaşmayı kolaylaştıran etkinlik bankasıdır. Eğitim kademesi, sınıf, mizaç ve konu gibi kriterler üzerinden öğrencinin ihtiyacına uygun rehberlik çalışmalarının bulunmasına yardımcı olur.",
    },
    {
        question: "Okulumuz ENOKSİS'i kullanmaya nasıl başlar?",
        answer: "Süreç okulun ihtiyaçlarının değerlendirilmesiyle başlar. Ardından ilgili paydaşlara yönelik eğitim, seminer ve bilgilendirme çalışmaları gerçekleştirilir; mizaç testi ve sistem kullanımıyla birlikte rehberlik süreci okul yapısına dahil edilir.",
    },
    {
        question: "ENOKSİS hakkında detaylı bilgi ve demo alabilir miyiz?",
        answer: "Evet. ENOKSİS'in okulunuzdaki kullanımını, sistemin modüllerini ve uygulama sürecini daha yakından incelemek için demo talebinde bulunabilirsiniz. Görüşmede kurumunuzun ihtiyaçlarına göre sistemin nasıl kullanılabileceği ele alınır.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="sss" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
            <div className="pointer-events-none absolute -left-[300px] top-[100px] h-[600px] w-[600px] rounded-full bg-[#FF9D00]/[0.05] blur-[140px]" />

            <Container className="relative">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 xl:gap-28">

                    {/* Left */}
                    <div className="lg:sticky lg:top-[130px] lg:self-start">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#EAECF0] bg-[#F9FAFB] px-3.5 py-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#667085] sm:text-[11px]">SIKÇA SORULAN SORULAR</span>
                        </div>

                        <h2 className="mt-6 max-w-[480px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#101828] sm:text-[43px] lg:text-[50px]">Merak ettiğiniz <span className="text-[#FF9D00]">bir şey mi var?</span></h2>

                        <p className="mt-5 max-w-[440px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px] sm:leading-8">ENOKSİS'in işleyişi, mizaç temelli yaklaşımı ve okulunuzdaki uygulama süreciyle ilgili en çok merak edilen soruları burada yanıtladık.</p>

                        <div className="mt-8 hidden items-center gap-4 rounded-[20px] border border-[#EAECF0] bg-[#F9FAFB] p-5 lg:flex">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#FFF4DF]">
                                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[#D98200]" strokeWidth="1.8">
                                    <path d="M8.5 9.5a3.5 3.5 0 1 1 5.7 2.7c-1.3 1-2.2 1.6-2.2 3.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 19h.01" strokeLinecap="round" />
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                            </div>

                            <div>
                                <span className="block text-[12px] font-extrabold text-[#101828]">Başka bir sorunuz mu var?</span>
                                <span className="mt-1 block text-[11px] font-medium leading-5 text-[#667085]">Demo görüşmesinde tüm sorularınızı birlikte değerlendirebiliriz.</span>
                            </div>
                        </div>
                    </div>

                    {/* Questions */}
                    <div className="border-t border-[#E4E7EC]">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={faq.question} className="border-b border-[#E4E7EC]">
                                    <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="group flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7">
                                        <div className="flex items-start gap-4 sm:gap-5">
                                            <span className={`mt-0.5 text-[9px] font-extrabold tracking-[0.12em] transition-colors duration-300 sm:text-[10px] ${isOpen ? "text-[#FF9D00]" : "text-[#B0B7C3]"}`}>0{index + 1}</span>

                                            <h3 className={`text-[15px] font-extrabold leading-6 tracking-[-0.02em] transition-colors duration-300 sm:text-[17px] sm:leading-7 ${isOpen ? "text-[#101828]" : "text-[#344054] group-hover:text-[#101828]"}`}>{faq.question}</h3>
                                        </div>

                                        <span className={`relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-45 border-[#FF9D00] bg-[#FF9D00]" : "border-[#E4E7EC] bg-white group-hover:border-[#FFBF5C]"}`}>
                                            <span className={`absolute h-[1.5px] w-3.5 rounded-full transition-colors ${isOpen ? "bg-[#101828]" : "bg-[#667085]"}`} />
                                            <span className={`absolute h-3.5 w-[1.5px] rounded-full transition-colors ${isOpen ? "bg-[#101828]" : "bg-[#667085]"}`} />
                                        </span>
                                    </button>

                                    <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <div className="pb-7 pl-[36px] pr-10 sm:pb-8 sm:pl-[45px] sm:pr-16">
                                                <p className="max-w-[720px] text-[13px] font-medium leading-7 text-[#667085] sm:text-[14px] sm:leading-7">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}