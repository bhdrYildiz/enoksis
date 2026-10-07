import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/shared/Logo";

const productLinks = [
    { label: "ENOKSİS", href: "/#enoksis" },
    { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
    { label: "Kimler İçin?", href: "/#kimler-icin" },
    { label: "ENREHET", href: "/#enrehet" },
    { label: "9 Mizaç", href: "/#mizaclar" },
];

const resourceLinks = [
    { label: "Destek Merkezi", href: "/destek" },
    { label: "Kullanım Kılavuzları", href: "/destek/kullanim-kilavuzlari" },
    { label: "Sıkça Sorulan Sorular", href: "/#sss" },
    { label: "Materyaller", href: "/destek/materyaller" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#0B1220] text-white">
            <Container className="relative">
                <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr_0.8fr] lg:gap-12 lg:py-20">
                    <div className="max-w-[360px]">
                        <div className="inline-flex rounded-[13px] bg-white px-3.5 py-2.5">
                            <Logo />
                        </div>

                        <p className="mt-6 text-[12px] font-medium leading-6 !text-white/80">Mizaç merkezli yaklaşımı okul rehberlik süreçleriyle buluşturan öğrenci odaklı rehberlik sistemi.</p>

                        <div className="mt-6 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
                            <span className="text-[9px] font-extrabold uppercase tracking-[0.13em] !text-white/70">MİZAÇ MERKEZLİ REHBERLİK</span>
                        </div>
                    </div>

                    <FooterColumn title="KEŞFET">
                        {productLinks.map((link) => (
                            <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="KAYNAKLAR">
                        {resourceLinks.map((link) => (
                            <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="ENOKSİS">
                        <FooterLink href="/demo">Demo Talep Et</FooterLink>
                        <FooterLink href="/iletisim">İletişim</FooterLink>
                        <FooterLink href="/destek">Destek</FooterLink>
                    </FooterColumn>
                </div>

                <div className="flex flex-col gap-5 border-t border-white/15 py-7 md:flex-row md:items-center md:justify-between">
                    <p className="text-[10px] font-medium !text-white/70">© {year} ENOKSİS. Tüm hakları saklıdır.</p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Link href="/kvkk" className="text-[10px] font-semibold !text-white/70 transition-colors hover:!text-white">KVKK</Link>
                        <Link href="/gizlilik" className="text-[10px] font-semibold !text-white/70 transition-colors hover:!text-white">Gizlilik Politikası</Link>
                        <Link href="/cerez-politikasi" className="text-[10px] font-semibold !text-white/70 transition-colors hover:!text-white">Çerez Politikası</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.17em] !text-white">{title}</h3>
            <div className="mt-5 flex flex-col items-start gap-3.5">{children}</div>
        </div>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="group inline-flex items-center gap-2 text-[12px] !text-white transition-colors duration-200 hover:!text-[#FF9D00]">
            <span className="!text-white group-hover:!text-[#FF9D00]">{children}</span>
            <span className="translate-x-[-4px] !text-[#FF9D00] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">→</span>
        </Link>
    );
}