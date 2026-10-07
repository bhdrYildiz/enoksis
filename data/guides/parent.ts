import type { Guide } from "./types";

export const parentGuide: Guide = {
    number: "03",
    eyebrow: "VELİ PANELİ",
    title: "Veli Paneli Kullanım Kılavuzu",
    description:
        "ENOKSİS Veli Panelinde hesabınızı oluşturma, çocuklarınızı ekleme, mizaç testleri, raporlar ve diğer işlemleri adım adım inceleyin.",

    sections: [
        {
            id: "veli-hesabi",
            title: "Veli Hesabının Oluşturulması",
            description:
                "Veli hesabınız, okulunuz çocuğunuzu ENOKSİS'e tanımladıktan sonra öğrenci paneli üzerinden oluşturulur.",
            steps: [
                "Öncelikle öğrencinin okul tarafından ENOKSİS'e tanımlanmış olması gerekir.",
                "Öğrenci hesabından Veli Bilgileri sayfasını açın.",
                "Anne ve baba bilgileri bu bölümden ayrı ayrı tanımlanabilir.",
                "Veli bilgileri kaydedildikten sonra veli hesabı öğrenciyle ilişkilendirilir.",
            ],
            image: "/images/guides/parent/veli1.png",
            imageAlt:
                "ENOKSİS Veli hesabının oluşturulması ve öğrenci ile bağlantısı",
        },

        {
            id: "veli-giris",
            title: "Veli Paneline Giriş",
            description:
                "Veli hesabınız oluşturulduktan sonra ENOKSİS giriş ekranından hesabınıza erişebilirsiniz.",
            steps: [
                "ENOKSİS giriş sayfasını açın.",
                "Kullanıcı türü olarak Veli seçeneğini seçin.",
                "T.C. Kimlik numaranız veya e-posta adresiniz ile şifrenizi girin.",
                "Giriş Yap butonuyla Veli Paneline giriş yapın.",
            ],
            note:
                "Şifrenizi unutursanız öğrenci panelinden yenileyebilir veya okulunuzdaki rehber öğretmenden yardım isteyebilirsiniz.",
            image: "/images/guides/parent/veli2.png",
            imageAlt: "ENOKSİS Veli Paneli giriş ekranı",
        },

        {
            id: "ogrenci-ekleme",
            title: "Veli Paneline Öğrenci Ekleme",
            description:
                "Birden fazla çocuğunuz ENOKSİS kullanıyorsa diğer çocuklarınızı da aynı Veli hesabına ekleyebilirsiniz.",
            steps: [
                "Veli Panelinden Öğrencilerim sayfasını açın.",
                "Öğrenci Ekle seçeneğine tıklayın.",
                "Eklemek istediğiniz öğrencinin T.C. Kimlik numarasını girin.",
                "Öğrencinin daha önce rehber öğretmen tarafından sisteme eklenmiş olması gerekir.",
                "Kaydet seçeneğiyle öğrenciyi hesabınıza ekleyin.",
            ],
            note:
                "Öğrenci, kendi panelinden sizin veli olarak hesabına eklendiğinizi görebilir.",
            image: "/images/guides/parent/veli3.png",
            imageAlt: "ENOKSİS Veli Paneline öğrenci ekleme ekranı",
        },

        {
            id: "mizac-testi-secimi",
            title: "Mizaç Testini Seçme",
            description:
                "Veli Panelinde hem size hem de çocuklarınıza ait birden fazla mizaç testi bulunabilir.",
            steps: [
                "Mizaç Testi sayfasını açın.",
                "Listelenen testlerin kime ait olduğunu kontrol edin.",
                "Veli Mizaç Testi kendi mizaç testinizdir.",
                "Çocuğunuza ait testi seçerken öğrencinin adını kontrol edin.",
                "Doğru testi seçtikten sonra Teste Başla seçeneğini kullanın.",
            ],
            note:
                "Özellikle ilkokul çağındaki çocukların mizaç testleri velileri tarafından yapılabilir. Teste başlamadan önce testi kimin için yaptığınızdan emin olun.",
            image: "/images/guides/parent/veli4.png",
            imageAlt:
                "ENOKSİS Veli Panelinde veli ve öğrenci mizaç testi seçimi",
        },

        {
            id: "mizac-testine-baslama",
            title: "Mizaç Testine Başlama",
            description:
                "Testi başlatmadan önce ekrandaki açıklama ve hatırlatmaları dikkatlice okuyun.",
            steps: [
                "Mizaç Testi sayfasından ilgili testi seçin.",
                "Teste başlamadan önce gösterilen uyarıları okuyun.",
                "Mizaç testi yaklaşık 100 sorudan oluşur.",
                "Verdiğiniz her cevap sistem tarafından kaydedilir.",
                "Teste ara verirseniz daha sonra kaldığınız yerden devam edebilirsiniz.",
            ],
            note:
                "Cevapların bütünlüğü ve tutarlılığı açısından teste çok fazla ara verilmemesi tavsiye edilir.",
            image: "/images/guides/parent/veli5.png",
            imageAlt: "ENOKSİS mizaç testine başlama ekranı",
        },

        {
            id: "mizac-testini-tamamlama",
            title: "Mizaç Testini Tamamlama",
            description:
                "Mizaç raporunun doğru sonuç verebilmesi için soruları dikkatlice değerlendirerek cevaplayın.",
            steps: [
                "Her soruyu dikkatlice okuyun.",
                "Kendinizi veya testi yaptığınız çocuğu en doğru ifade eden seçeneği işaretleyin.",
                "Ekranın üst bölümünden testin ilerleme durumunu takip edin.",
                "Gerekirse Teste Ara Ver seçeneğini kullanın.",
                "Daha sonra teste geri dönerek kaldığınız yerden devam edin.",
            ],
            note:
                "Mizaç raporunun isabetli olması, sorulara verilen cevapların doğruluğu ve tutarlılığıyla doğrudan ilişkilidir.",
            image: "/images/guides/parent/veli6.png",
            imageAlt: "ENOKSİS mizaç testi soru ve ilerleme ekranı",
        },

        {
            id: "mizac-raporlari",
            title: "Mizaç Raporları",
            description:
                "Mizaç Raporları bölümünden hem kendi raporunuzu hem de çocuklarınıza ait raporları inceleyebilirsiniz.",
            steps: [
                "Mizaç Raporları sayfasını açın.",
                "İncelemek istediğiniz raporu seçin.",
                "Raporun kime ait olduğunu sayfanın üst kısmından kontrol edin.",
                "Rapor bölümlerini ekrandan inceleyin.",
                "İsterseniz raporu PDF olarak indirip çıktı alın.",
            ],
            image: "/images/guides/parent/veli7.png",
            imageAlt: "ENOKSİS Veli Paneli mizaç raporları",
        },

        {
            id: "duyurular",
            title: "Duyurular",
            description:
                "Okul idaresi ve rehberlik servisi tarafından yayınlanan mizaç çalışmalarıyla ilgili duyuruları takip edebilirsiniz.",
            steps: [
                "Veli Panelinden Duyurular sayfasını açın.",
                "Yayınlanan duyuruları listeden görüntüleyin.",
                "Yeni duyuruları düzenli olarak kontrol edin.",
            ],
            image: "/images/guides/parent/veli8.png",
            imageAlt: "ENOKSİS Veli Paneli duyurular ekranı",
        },

        {
            id: "hesap-bilgileri",
            title: "Hesap Bilgileri",
            description:
                "Hesabınıza ait kişisel ve giriş bilgilerini Hesabım bölümünden güncelleyebilirsiniz.",
            steps: [
                "Hesabım sayfasını açın.",
                "İsim ve soyisim bilgilerinizi kontrol edin.",
                "E-posta adresinizi ve telefon numaranızı güncelleyin.",
                "Gerekirse şifrenizi değiştirin.",
                "Değişikliklerinizi kaydedin.",
            ],
            image: "/images/guides/parent/veli9.png",
            imageAlt: "ENOKSİS Veli Paneli hesap bilgileri ekranı",
        },
    ],
};