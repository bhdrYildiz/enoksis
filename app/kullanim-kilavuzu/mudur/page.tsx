import type { Metadata } from "next";
import GuidePage from "@/components/help/GuidePage";
import { managerGuide } from "@/data/guides";

export const metadata: Metadata = {
    title: "Müdür Paneli Kullanım Kılavuzu | ENOKSİS",
};

export default function Page() {
    return <GuidePage guide={managerGuide} />;
}