import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kullanım Kılavuzları | ENOKSİS",
    description:
        "ENOKSİS öğrenci, rehber öğretmen, veli ve müdür panelleri için kullanım kılavuzları ve sık sorulan sorular.",
};

const guides = [
    {
        number: "01",
        title: "Öğrenci Paneli",
        description:
            "Mizaç testi, raporlar ve öğrenci panelinin kullanımı.",
        href: "/kullanim-kilavuzu/ogrenci",
    },
    {
        number: "02",
        title: "Rehber Öğretmen",
        description:
            "Öğrenci işlemleri, mizaç süreçleri ve rehberlik çalışmaları.",
        href: "/kullanim-kilavuzu/rehber-ogretmen",
    },
    {
        number: "03",
        title: "Veli Paneli",
        description:
            "Çocuğunuzun ENOKSİS sürecini takip etmek için kullanım kılavuzu.",
        href: "/kullanim-kilavuzu/veli",
    },
    {
        number: "04",
        title: "Müdür Paneli",
        description:
            "Okul ve kullanıcı yönetimine yönelik kullanım kılavuzu.",
        href: "/kullanim-kilavuzu/mudur",
    },
];

export default function GuidesPage() {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="border-b border-[#EAECF0] bg-[#F8FAFC]">
                <div className="mx-auto max-w-[1180px] px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B86F00]">
                        ENOKSİS DESTEK
                    </span>

                    <h1 className="mx-auto mt-4 max-w-[760px] text-[38px] font-extrabold leading-[1.06] tracking-[-0.055em] text-[#101828] sm:text-[52px]">
                        Kullanım
                        <span className="text-[#FF9D00]"> kılavuzları.</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-[600px] text-[14px] font-medium leading-7 text-[#667085] sm:text-[15px]">
                        Kullandığınız paneli seçin ve ENOKSİS&apos;in
                        özelliklerini adım adım keşfedin.
                    </p>
                </div>
            </section>

            {/* Guides */}
            <section className="py-14 sm:py-20">
                <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {guides.map((guide) => (
                            <Link
                                key={guide.href}
                                href={guide.href}
                                className="group rounded-[22px] border border-[#E4E7EC] bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 lg:p-8 lg:hover:-translate-y-1 lg:hover:border-[#FF9D00]/40 lg:hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-extrabold text-[#C77800]">
                                        {guide.number}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="text-[18px] text-[#98A2B3] transition-transform duration-200 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </div>

                                <h2 className="mt-8 text-[22px] font-extrabold tracking-[-0.035em] text-[#101828]">
                                    {guide.title}
                                </h2>

                                <p className="mt-3 max-w-[400px] text-[13px] font-medium leading-6 text-[#667085]">
                                    {guide.description}
                                </p>

                                <span className="mt-6 inline-block text-[11px] font-extrabold text-[#B86F00]">
                                    Kılavuzu görüntüle
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-t border-[#EAECF0] bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-[820px] px-5 sm:px-6">
                    <div className="text-center">
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B86F00]">
                            HIZLI YARDIM
                        </span>

                        <h2 className="mt-4 text-[32px] font-extrabold tracking-[-0.045em] text-[#101828] sm:text-[40px]">
                            Sık sorulan sorular
                        </h2>

                        <p className="mx-auto mt-4 max-w-[560px] text-[14px] font-medium leading-7 text-[#667085]">
                            Giriş, şifre ve kullanıcı işlemleriyle ilgili en
                            sık karşılaşılan soruların yanıtlarını inceleyin.
                        </p>
                    </div>

                    <div className="mt-10 divide-y divide-[#E4E7EC] border-y border-[#E4E7EC]">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                <span className="text-[14px] font-extrabold text-[#101828] sm:text-[15px]">
                                    Kullanıcı adı ve şifremi nereden alacağım?
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="text-[22px] font-light text-[#B86F00] transition-transform duration-200 group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>

                            <div className="space-y-5 pb-7 text-[13px] font-medium leading-6 text-[#667085] sm:text-[14px] sm:leading-7">
                                <div>
                                    <h3 className="font-extrabold text-[#344054]">
                                        Öğrenciler
                                    </h3>
                                    <p className="mt-1">
                                        Sisteme kaydınız öğretmenleriniz
                                        tarafından yapılır ve şifreniz yine
                                        öğretmenleriniz tarafından size
                                        iletilir. Sisteme ilk girişinizden
                                        sonra şifrenizi değiştirebilirsiniz.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-extrabold text-[#344054]">
                                        Öğretmenler
                                    </h3>
                                    <p className="mt-1">
                                        Öğretmen kayıtları okul idaresi veya
                                        teknik sorumlusu tarafından yapılır ve
                                        şifreleriniz tarafınıza iletilir.
                                        Sisteme ilk girişinizden sonra
                                        şifrenizi değiştirebilirsiniz.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-extrabold text-[#344054]">
                                        Müdürler
                                    </h3>
                                    <p className="mt-1">
                                        Giriş bilgileriniz ENOKSİS ekibi
                                        tarafından belirlenir. Müdür şifrenize
                                        erişiminiz yoksa bizimle iletişime
                                        geçebilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                <span className="text-[14px] font-extrabold text-[#101828] sm:text-[15px]">
                                    Şifremi unuttum, ne yapmalıyım?
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="text-[22px] font-light text-[#B86F00] transition-transform duration-200 group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>

                            <div className="space-y-5 pb-7 text-[13px] font-medium leading-6 text-[#667085] sm:text-[14px] sm:leading-7">
                                <div className="rounded-[14px] border border-[#FFE1AD] bg-[#FFF8EC] p-4 text-[12px] leading-6 text-[#805000]">
                                    Güvenlik nedeniyle mevcut şifreler
                                    görüntülenemez. Yalnızca şifre yenileme
                                    işlemi yapılabilir.
                                </div>

                                <div>
                                    <h3 className="font-extrabold text-[#344054]">
                                        Öğrenciler
                                    </h3>
                                    <p className="mt-1">
                                        Kurumunuzdaki rehber öğretmenden
                                        şifrenizin yenilenmesini isteyin.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-extrabold text-[#344054]">
                                        Veliler
                                    </h3>
                                    <p className="mt-1">
                                        Öğrencinizin hesabından giriş yapıp
                                        Veli Bilgileri sayfasından şifrenizi
                                        yenileyebilirsiniz.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-extrabold text-[#344054]">
                                        Rehber Öğretmenler
                                    </h3>
                                    <p className="mt-1">
                                        Rehber öğretmen kullanıcılarının
                                        şifreleri Müdür hesabından giriş
                                        yapılarak değiştirilebilir.
                                    </p>
                                </div>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                <span className="text-[14px] font-extrabold text-[#101828] sm:text-[15px]">
                                    T.C. kimlik numaram yanlış girilmiş, ne
                                    yapmalıyım?
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="text-[22px] font-light text-[#B86F00] transition-transform duration-200 group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>

                            <div className="pb-7 text-[13px] font-medium leading-6 text-[#667085] sm:text-[14px] sm:leading-7">
                                Giriş yaparken T.C. kimlik numaranızı doğru
                                yazdığınızdan eminseniz fakat giriş
                                yapamıyorsanız durumu okulunuzdaki rehber
                                öğretmene iletin. T.C. kimlik numaranız kontrol
                                edilerek varsa hata düzeltilecektir.
                            </div>
                        </details>

                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                <span className="text-[14px] font-extrabold text-[#101828] sm:text-[15px]">
                                    Kayıt veya yenileme kodu gerekli mi?
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="text-[22px] font-light text-[#B86F00] transition-transform duration-200 group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>

                            <div className="space-y-3 pb-7 text-[13px] font-medium leading-6 text-[#667085] sm:text-[14px] sm:leading-7">
                                <p>
                                    Önceki versiyonda kullanılan kodlara artık
                                    ihtiyaç yoktur. Öğretmenler tarafından
                                    kaydedildikten sonra öğrenciler sistemi
                                    kullanabilir.
                                </p>

                                <p>
                                    Sınıf geçişlerinde de herhangi bir yenileme
                                    işlemi yapılması gerekmez.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                <span className="text-[14px] font-extrabold text-[#101828] sm:text-[15px]">
                                    Veli olarak sisteme giremiyorum, ne
                                    yapmalıyım?
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="text-[22px] font-light text-[#B86F00] transition-transform duration-200 group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>

                            <div className="space-y-3 pb-7 text-[13px] font-medium leading-6 text-[#667085] sm:text-[14px] sm:leading-7">
                                <p>
                                    Veli girişi yapılabilmesi için öncelikle
                                    öğrenci kaydının rehber öğretmen tarafından
                                    yapılması gerekir.
                                </p>

                                <p>
                                    Öğrenci kaydı yapıldıktan sonra veli
                                    bilgileri öğrenci veya rehber öğretmen
                                    tarafından girilebilir.
                                </p>

                                <p>
                                    Öğrencinizin bilgileriyle sisteme giriş
                                    yapıp “Veli Bilgileri” bölümünden gerekli
                                    bilgileri girerek veli kaydı
                                    oluşturabilirsiniz.
                                </p>

                                <p>
                                    Diğer veli için de aynı işlemin yapılması
                                    gerekir.
                                </p>
                            </div>
                        </details>
                    </div>

                    <div className="mt-10 rounded-[20px] bg-[#101828] p-6 sm:flex sm:items-center sm:justify-between sm:p-7">
                        <div>
                            <h3 className="text-[14px] font-extrabold text-white">
                                Sorunuzun yanıtını bulamadınız mı?
                            </h3>

                            <p className="mt-1.5 text-[12px] font-medium leading-5 text-[#98A2B3]">
                                Öncelikle kurumunuzun rehberlik servisine
                                ulaşabilirsiniz.
                            </p>
                        </div>

                        <Link
                            href="/iletisim"
                            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#FF9D00] px-5 py-3 text-[11px] font-extrabold text-[#101828] transition-colors hover:bg-[#ED9200] sm:mt-0"
                        >
                            İletişime Geç
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}