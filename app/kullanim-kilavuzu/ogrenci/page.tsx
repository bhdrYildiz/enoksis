import type { Metadata } from "next";
import GuidePage from "@/components/help/GuidePage";
import { studentGuide } from "@/data/guides/student";

export const metadata: Metadata = {
    title: "Öğrenci Paneli Kullanım Kılavuzu | ENOKSİS",
    description:
        "ENOKSİS öğrenci paneline giriş, mizaç testi, mizaç raporu, duyurular ve veli bilgileri için adım adım kullanım kılavuzu.",
};

export default function Page() {
    return <GuidePage guide={studentGuide} />;
}