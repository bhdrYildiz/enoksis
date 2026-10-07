import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/shared/Logo";

const exploreLinks = [
    { label: "ENOKSİS", href: "/#enoksis" },
    { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
    { label: "Kimler İçin?", href: "/#kimler-icin" },
    { label: "ENREHET", href: "/#enrehet" },
    { label: "9 Mizaç", href: "/#mizaclar" },
    { label: "Sıkça Sorulan Sorular", href: "/#sss" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#0B1220] text-white">
            <Container>
                <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-20 lg:py-20">
                    {/* Marka */}
                    <div className="max-w-[390px]">
                        <div className="inline-flex rounded-[14px] bg-white px-4 py-3">
                            <Logo />
                        </div>

                        <p className="mt-6 max-w-[350px] text-[13px] font-medium leading-7 !text-[#98A2B3]">
                            Öğrenciyi tanımayı, anlamayı ve doğru rehberlik
                            yaklaşımını belirlemeyi kolaylaştıran mizaç merkezli
                            okul rehberlik sistemi.
                        </p>

                        <div className="mt-7 flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
                            <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] !text-[#667085]">
                                Mizaç Merkezli Rehberlik
                            </span>
                        </div>
                    </div>

                    {/* Navigasyon */}
                    <div>
                        <FooterTitle>KEŞFET</FooterTitle>

                        <div className="mt-6 flex flex-col items-start gap-4">
                            {exploreLinks.map((link) => (
                                <FooterLink
                                    key={link.label}
                                    href={link.href}
                                >
                                    {link.label}
                                </FooterLink>
                            ))}
                        </div>
                    </div>

                    {/* Sağ alan */}
                    <div className="lg:border-l lg:border-white/10 lg:pl-10">
                        <FooterTitle>ENOKSİS</FooterTitle>

                        <h3 className="mt-6 max-w-[310px] text-[21px] font-extrabold leading-[1.25] tracking-[-0.035em] !text-white">
                            ENOKSİS&apos;i daha yakından keşfedin.
                        </h3>

                        <p className="mt-3 max-w-[320px] text-[12px] font-medium leading-6 !text-[#98A2B3]">
                            Panel kullanımını inceleyin veya doğrudan ENOKSİS
                            platformuna geçin.
                        </p>

                        <div className="mt-6 flex flex-col items-start gap-3">
                            <Link
                                href="/kullanim-kilavuzu"
                                className="group inline-flex items-center gap-3 text-[12px] font-extrabold !text-white transition-colors hover:!text-[#FF9D00]"
                            >
                                Kullanım Kılavuzları
                                <span
                                    aria-hidden="true"
                                    className="!text-[#FF9D00] transition-transform duration-200 group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>

                            <a
                                href="https://kurumsal.enoksis.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 text-[12px] font-extrabold !text-white transition-colors hover:!text-[#FF9D00]"
                            >
                                Platforma Giriş
                                <span
                                    aria-hidden="true"
                                    className="!text-[#FF9D00] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                >
                                    ↗
                                </span>
                            </a>
                        </div>

                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] !text-[#667085]">
                                BİZE ULAŞIN
                            </p>

                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                                <a
                                    href="https://wa.me/905435406443?text=Merhaba%2C%20ENOKS%C4%B0S%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[12px] font-bold !text-[#D0D5DD] transition-colors hover:!text-[#FF9D00]"
                                >
                                    WhatsApp
                                </a>

                                <a
                                    href="tel:+905435406443"
                                    className="text-[12px] font-bold !text-[#D0D5DD] transition-colors hover:!text-[#FF9D00]"
                                >
                                    0543 540 64 43
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alt bar */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[10px] font-medium !text-[#667085]">
                        © {year} ENOKSİS. Tüm hakları saklıdır.
                    </p>

                    <div className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#FF9D00]" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.12em] !text-[#667085]">
                            Eğitimde bireysel farklılıkları önemsiyoruz.
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] !text-[#667085]">
            {children}
        </p>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="group inline-flex items-center gap-2 text-[12px] font-semibold !text-[#B9C0CC] transition-colors duration-200 hover:!text-white"
        >
            <span>{children}</span>
            <span
                aria-hidden="true"
                className="translate-x-[-3px] !text-[#FF9D00] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            >
                →
            </span>
        </Link>
    );
}