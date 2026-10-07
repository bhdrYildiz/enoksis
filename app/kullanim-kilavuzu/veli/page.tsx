import type { Metadata } from "next";
import GuidePage from "@/components/help/GuidePage";
import { parentGuide } from "@/data/guides";

export const metadata: Metadata = {
    title: "Veli Paneli Kullanım Kılavuzu | ENOKSİS",
};

export default function Page() {
    return <GuidePage guide={parentGuide} />;
}