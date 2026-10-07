import type { Guide } from "./types";

export const studentGuide: Guide = {
  number: "01",
  eyebrow: "ÖĞRENCİ PANELİ",
  title: "Öğrenci Paneli Kullanım Kılavuzu",
  description:
    "ENOKSİS'e girişten mizaç testine ve raporunuza ulaşmaya kadar öğrenci panelini adım adım kullanın.",

  sections: [
    {
      id: "kayit-giris",
      title: "ENOKSİS'e Kayıt ve Giriş",
      description:
        "ENOKSİS kaydınız rehber öğretmeniniz tarafından yapılır. Hesabınız oluşturulduktan sonra kullanıcı türü olarak “Öğrenci” seçeneğini seçerek giriş yapabilirsiniz.",
      steps: [
        "Kullanıcı türü olarak “Öğrenci” seçeneğini seçin.",
        "Kullanıcı bilgilerinizi girin.",
        "Hesabınıza giriş yapın.",
        "İlk girişinizde şifrenizi değiştirin.",
      ],
      note: "İlk şifreniz T.C. Kimlik numaranızın son 4 hanesidir. Şifrenizi unuttuysanız rehber öğretmeninizden yeni bir şifre belirlemesini isteyebilirsiniz.",
      image: "/images/guides/student/ogrenci4.png",
      imageAlt: "ENOKSİS öğrenci paneli giriş ekranı",
    },

    {
      id: "panel",
      title: "Öğrenci Panelini Tanıyın",
      description:
        "Öğrenci panelindeki ana menü üzerinden mizaç testinize, raporunuza, duyurulara, veli bilgilerine ve hesap ayarlarınıza ulaşabilirsiniz.",
      steps: [
        "Ana Sayfa: Sık kullanılan alanlara ait kısayolları içerir.",
        "Mizaç Testi: Size tanımlanan mizaç testini bu bölümden tamamlayabilirsiniz.",
        "Mizaç Raporu: Testiniz onaylandıktan sonra size özel rehberlik bilgilerine ulaşabilirsiniz.",
        "Duyurular: Okulunuz veya öğretmeniniz tarafından yapılan duyuruları takip edebilirsiniz.",
        "Veli Bilgileri: Velilerinize ait bilgileri ekleyebilirsiniz.",
        "Hesabım: İsim, şifre ve e-posta gibi hesap bilgilerinizi düzenleyebilirsiniz.",
      ],
      image: "/images/guides/student/ogrenci5.png",
      imageAlt: "ENOKSİS öğrenci paneli ana menüsü",
    },

    {
      id: "mizac-testi",
      title: "Mizaç Testine Başlama",
      description:
        "Mizaç Testi sayfasından size tanımlanan teste başlayabilirsiniz. Teste başlamadan önce ekranda gösterilen uyarı ve hatırlatmaları dikkatlice okuyun.",
      steps: [
        "Menüden “Mizaç Testi” bölümünü açın.",
        "Teste başlamadan önce gösterilen bilgilendirmeleri okuyun.",
        "Hazır olduğunuzda testi başlatın.",
      ],
      note: "Mizaç testi yaklaşık 100 sorudan oluşur. Verdiğiniz her cevap sistem tarafından kaydedilir.",
      image: "/images/guides/student/ogrenci6.png",
      imageAlt: "ENOKSİS mizaç testine başlama ekranı",
    },

    {
      id: "test-sureci",
      title: "Testi Tamamlama",
      description:
        "Soruları dikkatlice okuyun ve sizi en doğru şekilde ifade eden seçeneği işaretleyin.",
      steps: [
        "Her soruyu dikkatlice okuyun.",
        "Kendinize en uygun seçeneği işaretleyin.",
        "Ekranın üst bölümünden testteki ilerlemenizi takip edin.",
        "Ara vermeniz gerekiyorsa “Teste Ara Ver” seçeneğini kullanın.",
      ],
      note: "Teste ara verdiğinizde daha sonra kaldığınız yerden devam edebilirsiniz. Ancak cevapların bütünlüğü ve tutarlılığı açısından çok fazla ara verilmesi tavsiye edilmez.",
      image: "/images/guides/student/ogrenci7.png",
      imageAlt: "ENOKSİS öğrenci mizaç testi soru ekranı",
    },

    {
      id: "mizac-raporu",
      title: "Mizaç Raporunuzu İnceleyin",
      description:
        "Test tamamlandıktan sonra cevaplarınız analiz edilir ve mizaç raporunuz oluşturulur. Raporunuza Mizaç Raporu bölümünden ulaşabilirsiniz.",
      steps: [
        "Menüden “Mizaç Raporu” bölümünü açın.",
        "“Raporu Gör” seçeneğini kullanın.",
        "İlgilendiğiniz başlıklardaki “Devamı” seçeneğiyle detayları inceleyin.",
        "İsterseniz raporunuzu PDF olarak indirin.",
      ],
      image: "/images/guides/student/ogrenci8.png",
      imageAlt: "ENOKSİS öğrenci mizaç raporu ekranı",
    },

    {
      id: "duyurular",
      title: "Duyuruları Takip Edin",
      description:
        "Okul yönetimi veya rehber öğretmenleriniz tarafından yayınlanan duyuruları Duyurular bölümünden takip edebilirsiniz.",
      image: "/images/guides/student/ogrenci9.png",
      imageAlt: "ENOKSİS öğrenci paneli duyurular ekranı",
    },

    {
      id: "veli-bilgileri",
      title: "Veli Bilgileri",
      description:
        "Veli Bilgileri bölümünden velilerinize ait bilgileri tanımlayabilirsiniz. ENOKSİS'e tanımlanan veliler çocuklarının mizaç raporlarını görüntüleyebilir.",
      note: "Veliler ayrıca kendi mizaç testlerini tamamlayabilir ve kendi raporlarını inceleyebilir.",
      image: "/images/guides/student/ogrenci10.png",
      imageAlt: "ENOKSİS öğrenci paneli veli bilgileri ekranı",
      link: {
        label: "Veli Paneli Kullanım Kılavuzunu İnceleyin",
        href: "/kullanim-kilavuzu/veli",
      },
    },

    {
      id: "destek",
      title: "Yardıma mı İhtiyacınız Var?",
      description:
        "Panel kullanımı veya hesabınızla ilgili bir sorun yaşadığınızda öncelikle okulunuzdaki rehber öğretmeninize başvurun.",
      note: "Rehber öğretmeniniz ENOKSİS ekibiyle iletişim halindedir ve gerektiğinde destek sürecini sizin için yönlendirebilir.",
      link: {
        label: "İletişim Sayfasına Git",
        href: "/iletisim",
      },
    },
  ],
};
