import type { Metadata } from "next";
import GuidePage from "@/components/help/GuidePage";
import { counselorGuide } from "@/data/guides/counselor";

export const metadata: Metadata = {
    title: "Rehber Öğretmen Paneli Kullanım Kılavuzu | ENOKSİS",
    description:
        "ENOKSİS Rehber Öğretmen Paneli için sınıf, öğrenci, rapor, istatistik, faaliyet, duyuru ve ENREHET kullanım kılavuzu.",
};

export default function Page() {
    return <GuidePage guide={counselorGuide} />;
}