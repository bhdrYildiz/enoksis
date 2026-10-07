import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/shared/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { navigation } from "@/data/navigation";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#EAECF0]/80 bg-white/90 backdrop-blur-xl">
            <Container>
                <div className="flex h-[72px] items-center justify-between lg:h-[80px]">
                    <Logo />

                    <nav aria-label="Ana menü" className="hidden items-center gap-1 lg:flex">
                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-[#475467] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#101828]"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/#sss"
                            className="rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-[#475467] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#101828]"
                        >
                            SSS
                        </Link>
                    </nav>

                    <div className="hidden items-center gap-2 lg:flex">
                        <a
                            href="https://kurumsal.enoksis.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-bold text-[#344054] transition-colors hover:bg-[#F8FAFC] hover:text-[#101828]"
                        >
                            Platforma Giriş
                            <span className="ml-1.5 text-[#98A2B3]" aria-hidden="true">
                                ↗
                            </span>
                        </a>

                        <Link
                            href="/#demo"
                            className="inline-flex h-11 items-center justify-center rounded-xl bg-[#FF9D00] px-5 text-sm font-bold text-[#101828] shadow-[0_6px_20px_rgba(255,157,0,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ED9200]"
                        >
                            Ücretsiz Demo
                        </Link>
                    </div>

                    <MobileMenu />
                </div>
            </Container>
        </header>
    );
}