import type { Metadata } from "next";
import GuidePage from "@/components/help/GuidePage";
import { directorGuide } from "@/data/guides/director";

export const metadata: Metadata = {
    title: "Müdür Paneli Kullanım Kılavuzu | ENOKSİS",
    description:
        "ENOKSİS Müdür Paneli kullanım kılavuzu. Rehber öğretmen, sınıf, öğrenci, veli, duyuru, faaliyet ve istatistik işlemlerini öğrenin.",
};

export default function Page() {
    return <GuidePage guide={directorGuide} />;
}