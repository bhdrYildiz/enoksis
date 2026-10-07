import type { Metadata } from "next";
import GuidePage from "@/components/help/GuidePage";
import { parentGuide } from "@/data/guides/parent";

export const metadata: Metadata = {
    title: "Veli Paneli Kullanım Kılavuzu | ENOKSİS",
    description:
        "ENOKSİS Veli Paneli kullanım kılavuzu. Veli hesabı, öğrenci ekleme, mizaç testi, raporlar, duyurular ve hesap işlemlerini öğrenin.",
};

export default function Page() {
    return <GuidePage guide={parentGuide} />;
}