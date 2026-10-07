import type { Guide } from "./types";

export const directorGuide: Guide = {
  number: "04",
  eyebrow: "MÜDÜR PANELİ",
  title: "Müdür Paneli Kullanım Kılavuzu",
  description:
    "ENOKSİS Müdür Panelinde rehber öğretmen, sınıf, öğrenci, veli ve okul süreçlerinin yönetimini adım adım inceleyin.",

  sections: [
    {
      id: "mudur-paneli-girisi",
      title: "Müdür Paneli Girişi",
      description:
        "Okulunuz ve Müdür hesabınıza ait giriş bilgileri ENOKSİS tarafından oluşturularak ilgili kişilere iletilir.",
      steps: [
        "ENOKSİS giriş ekranını açın.",
        "Kullanıcı türü olarak Müdür seçeneğini seçin.",
        "Size iletilen kullanıcı bilgilerinizle giriş yapın.",
        "Şifrenizi unuttuysanız ENOKSİS Sistem Yöneticisi ile iletişime geçerek yeni şifre talep edin.",
      ],
      image: "/images/guides/director/mudur1.png",
      imageAlt: "ENOKSİS Müdür Paneli giriş ekranı",
    },

    {
      id: "genel-bakis",
      title: "Müdür Paneli Genel Bakış",
      description:
        "Müdür Paneli; okulunuzdaki öğrenci, sınıf, rehber öğretmen ve rehberlik süreçlerini yönetebileceğiniz bölümlerden oluşur.",
      steps: [
        "Ana Sayfa üzerinden temel kısayollara ulaşabilirsiniz.",
        "Öğrenci Arama ile okul genelinde öğrenci arayabilirsiniz.",
        "Sınıflar bölümünden sınıf, öğrenci ve veli işlemlerini yönetebilirsiniz.",
        "Rehberler bölümünden rehber öğretmenleri oluşturabilir ve sınıflara atayabilirsiniz.",
        "Duyurular, Enrehetler, Faaliyetler ve İstatistikler bölümlerine menüden erişebilirsiniz.",
        "Hesabım bölümünden hesap ve okul bilgilerinizi düzenleyebilirsiniz.",
      ],
      image: "/images/guides/director/mudur2.png",
      imageAlt: "ENOKSİS Müdür Paneli genel bakış",
    },

    {
      id: "rehber-ogretmenler",
      title: "Rehber Öğretmenler",
      description:
        "Rehber öğretmen hesaplarını oluşturabilir, sorumlu oldukları sınıfları belirleyebilir ve hesap bilgilerini yönetebilirsiniz.",
      steps: [
        "Rehberler sayfasını açın.",
        "Yeni rehber öğretmen hesabı oluşturun.",
        "Öğretmenin sorumlu olacağı sınıfları seçin.",
        "T.C. Kimlik numarası ve giriş şifresini tanımlayın.",
        "Daha sonra öğretmenin sınıf atamalarını değiştirebilirsiniz.",
        "Şifresini unutan rehber öğretmen için bu bölümden yeni şifre belirleyebilirsiniz.",
      ],
      note: "Bir sınıfa birden fazla rehber öğretmen atanabilir. Rehber Öğretmen hesabı ile mizaç testi yapılamaz.",
      image: "/images/guides/director/mudur3.png",
      imageAlt: "ENOKSİS Müdür Paneli rehber öğretmen yönetimi",
    },

    {
      id: "ogretmen-mizac-testi",
      title: "Öğretmenler İçin Mizaç Testi",
      description:
        "Kurumunuzdaki öğretmen ve çalışanlar için de ENOKSİS üzerinden mizaç testi uygulanabilir.",
      steps: [
        "Öğretmen isimli yeni bir sınıf oluşturun.",
        "Sınıfın kademesini Yetişkin olarak belirleyin.",
        "Test olacak öğretmenleri bu sınıfa öğrenci olarak ekleyin.",
        "Öğretmenler T.C. Kimlik numarası ve şifreleriyle giriş yapabilir.",
        "Giriş sırasında kullanıcı türü olarak Öğrenci seçilmelidir.",
        "Öğretmenler öğrenci panelinden testlerini tamamlayıp raporlarını inceleyebilir.",
      ],
      note: "Rehber Öğretmen olarak kayıtlı bir kişinin mizaç testi olabilmesi için ayrıca öğrenci kullanıcısı olarak kaydedilmesi gerekir.",
      image: "/images/guides/director/mudur4.png",
      imageAlt: "ENOKSİS öğretmenler için mizaç testi işlemleri",
    },

    {
      id: "siniflar",
      title: "Sınıfların Yönetimi",
      description:
        "Okulunuzdaki bütün sınıfları görüntüleyebilir, düzenleyebilir ve yeni sınıflar oluşturabilirsiniz.",
      steps: [
        "Sınıflar sayfasını açın.",
        "Mevcut sınıfların isim ve kademe bilgilerini görüntüleyin.",
        "Sınıf içerisindeki öğrenci ve velilere erişin.",
        "Yeni sınıf oluşturmak için Sınıf Ekle seçeneğini kullanın.",
        "Gerekirse sınıf adı veya kademesini düzenleyin.",
      ],
      note: "Sınıf silme işlemi geri alınamaz. Mecbur olmadıkça sınıf silmek yerine öğrencileri başka sınıfa taşımanız önerilir.",
      image: "/images/guides/director/mudur5.png",
      imageAlt: "ENOKSİS Müdür Paneli sınıf yönetimi",
    },

    {
      id: "sinif-ogrencileri",
      title: "Sınıflar ve Öğrenciler",
      description:
        "Bir sınıftaki öğrencileri görüntüleyebilir, mizaç durumlarını inceleyebilir ve öğrenci işlemlerini gerçekleştirebilirsiniz.",
      steps: [
        "İlgili sınıfın Öğrenciler sayfasını açın.",
        "Öğrencilerin mizaç durumlarını ve raporlarını inceleyin.",
        "Öğrenci bilgilerini Düzenle seçeneğinden güncelleyin.",
        "Yeni öğrenciyi tek tek veya toplu olarak ekleyin.",
        "Öğrencilerin sınıflarını toplu olarak değiştirebilirsiniz.",
        "Sınıf listesini Excel dosyası olarak dışa aktarabilirsiniz.",
      ],
      note: "Öğrenci silme işlemi geri alınamaz ve öğrencinin mizaç bilgileri dahil bütün verilerini siler.",
      image: "/images/guides/director/mudur6.png",
      imageAlt: "ENOKSİS sınıf öğrencileri yönetim ekranı",
    },

    {
      id: "ogrenci-ekleme",
      title: "Öğrenci Ekleme",
      description:
        "Öğrencileri ENOKSİS'e tek tek veya Excel kullanarak toplu şekilde ekleyebilirsiniz.",
      steps: [
        "Tek öğrenci için Öğrenci Ekle butonunu kullanın.",
        "Öğrencinin gerekli bilgilerini girerek kaydedin.",
        "Toplu ekleme için ilgili sınıfın İçe/Dışa Aktar bölümünü açın.",
        "Şablonu İndir seçeneğiyle Excel dosyasını bilgisayarınıza indirin.",
      ],
      image: "/images/guides/director/mudur7.png",
      imageAlt: "ENOKSİS tek ve toplu öğrenci ekleme işlemleri",
    },

    {
      id: "toplu-ogrenci-ekleme",
      title: "Excel ile Toplu Öğrenci Ekleme",
      description:
        "İndirdiğiniz Excel şablonunu kullanarak çok sayıda öğrenciyi aynı anda sisteme aktarabilirsiniz.",
      steps: [
        "Mevcut öğrencilerin bilgilerini değiştirmeyin.",
        "Yeni öğrencilerin ID alanını boş bırakın.",
        "T.C. Kimlik No, isim ve soyisim alanlarını doldurun.",
        "E-posta ve telefon bilgilerini varsa ekleyebilirsiniz.",
        "Yeni öğrenciler için şifre girmeyin.",
        "Dosyayı kaydedip Excel Dosyası Yükle seçeneğiyle ENOKSİS'e aktarın.",
      ],
      note: "Öğrencilerin ilk şifresi T.C. Kimlik Numarasının son 4 hanesidir. Öğrenciler giriş yaptıktan sonra şifrelerini değiştirebilir.",
      image: "/images/guides/director/mudur8.png",
      imageAlt: "ENOKSİS Excel ile toplu öğrenci ekleme",
    },

    {
      id: "sinif-aktarma-baslangic",
      title: "Öğrencileri Yeni Sınıfa Aktarma",
      description:
        "Dönem başında veya sonunda öğrencileri yeni sınıflarına toplu olarak aktarabilirsiniz.",
      steps: [
        "Taşımak istediğiniz öğrencilerin bulunduğu sınıfı açın.",
        "Toplu Sınıf Değiştir butonuna tıklayın.",
        "Aktarılacak öğrencileri belirleyin.",
      ],
      image: "/images/guides/director/mudur9.png",
      imageAlt: "ENOKSİS toplu sınıf değiştirme işlemi",
    },

    {
      id: "sinif-aktarma",
      title: "Yeni Sınıfı Belirleme",
      description:
        "Aktarılacak öğrencileri ve hedef sınıfı seçerek sınıf değişikliğini tamamlayabilirsiniz.",
      steps: [
        "Öğrencilerin aktarılacağı yeni sınıfı seçin.",
        "Taşınacak öğrencileri veya Tüm Öğrenciler seçeneğini belirleyin.",
        "Değiştir seçeneğiyle işlemi tamamlayın.",
        "İsterseniz öğrencilerin sınıflarını tek tek de değiştirebilirsiniz.",
      ],
      note: "Yanlış sınıfa aktarılan bir öğrenciyi yeni sınıfındaki Düzenle seçeneğini kullanarak tekrar doğru sınıfa alabilirsiniz.",
      image: "/images/guides/director/mudur10.png",
      imageAlt: "ENOKSİS öğrencileri yeni sınıfa aktarma ekranı",
    },

    {
      id: "ogrenci-silme",
      title: "Öğrenci Silme",
      description:
        "Gerekli durumlarda bir öğrenciyi ENOKSİS'ten silebilirsiniz.",
      steps: [
        "Silmek istediğiniz öğrencinin bulunduğu sınıfı açın.",
        "Öğrenciyi bulun ve Sil seçeneğine tıklayın.",
        "Açılan uyarıyı kontrol edin.",
        "Sil seçeneğiyle işlemi onaylayın.",
      ],
      note: "Bu işlem geri alınamaz. Öğrencinin mizaç raporları, veli bilgileri ve diğer bütün verileri silinir. Mecbur kalmadıkça silme işlemi önerilmez.",
      image: "/images/guides/director/mudur11.png",
      imageAlt: "ENOKSİS öğrenci silme işlemi",
    },

    {
      id: "veliler",
      title: "Velilerin Yönetimi",
      description:
        "Sınıflara bağlı veli hesaplarını görüntüleyebilir, düzenleyebilir ve yeni veli ekleyebilirsiniz.",
      steps: [
        "Sınıflar sayfasından ilgili sınıfın Veliler bölümünü açın.",
        "Sistemde kayıtlı velileri görüntüleyin.",
        "Gerekirse veli bilgilerini düzenleyin.",
        "Yeni veli hesabı ekleyin.",
        "Veliler kendi hesaplarıyla mizaç testi yapabilir ve çocuklarının raporlarına erişebilir.",
      ],
      note: "Bir öğrenci kendi panelindeki Veli Bilgileri bölümünden en fazla iki veli tanımlayabilir.",
      image: "/images/guides/director/mudur12.png",
      imageAlt: "ENOKSİS Müdür Paneli veli yönetimi",
    },

    {
      id: "duyurular",
      title: "Duyurular",
      description:
        "Öğrenci, veli ve öğretmenlere yönelik duyurular oluşturabilirsiniz.",
      steps: [
        "Duyurular sayfasını açın.",
        "Yeni duyuru oluşturun.",
        "Duyurunun başlık ve açıklamasını girin.",
        "Duyuruyu bütün okula, belirli sınıflara veya belirli mizaçlara göre hedefleyin.",
        "Duyuruyu kaydedip yayınlayın.",
      ],
      image: "/images/guides/director/mudur13.png",
      imageAlt: "ENOKSİS Müdür Paneli duyuru oluşturma",
    },

    {
      id: "enrehetler",
      title: "Enrehet Etkinlikleri",
      description:
        "Mizaç çalışmalarında kullanılmak üzere hazırlanan Enrehet etkinliklerine bu bölümden ulaşabilirsiniz.",
      steps: [
        "Enrehetler sayfasını açın.",
        "Etkinliğin mizaç, kademe ve başlık bilgilerini inceleyin.",
        "İhtiyacınız olan etkinliği listeden bulun.",
        "İndirme bağlantısıyla ilgili PDF dosyasına ulaşın.",
      ],
      image: "/images/guides/director/mudur14.png",
      imageAlt: "ENOKSİS Enrehet etkinlikleri ekranı",
    },

    {
      id: "faaliyetler",
      title: "Faaliyetler",
      description:
        "Rehber öğretmenler tarafından sisteme kaydedilen rehberlik faaliyetlerini görüntüleyebilirsiniz.",
      steps: [
        "Faaliyetler sayfasını açın.",
        "Okulunuzdaki rehber öğretmenlerin girdiği faaliyetleri görüntüleyin.",
        "Faaliyetin tarih, içerik ve diğer bilgilerini inceleyin.",
      ],
      note: "Müdür kullanıcısı faaliyetleri yalnızca görüntüleyebilir. Düzenleme ve silme işlemleri faaliyeti oluşturan rehber öğretmen tarafından yapılabilir.",
      image: "/images/guides/director/mudur15.png",
      imageAlt: "ENOKSİS Müdür Paneli faaliyetler ekranı",
    },

    {
      id: "istatistikler",
      title: "İstatistikler",
      description:
        "Okulunuzdaki öğrenci ve velilerin mizaç verilerini filtreleyebilir ve Excel formatında dışa aktarabilirsiniz.",
      steps: [
        "İstatistikler sayfasını açın.",
        "Excel İstatistik Hazırla bölümüne geçin.",
        "İncelemek istediğiniz mizaçları seçin.",
        "İlgili sınıfları seçerek sonuçları filtreleyin.",
        "İsterseniz veli bilgilerini de Excel dosyasına dahil edin.",
        "Hazırlanan istatistikleri Excel dosyası olarak indirin.",
      ],
      image: "/images/guides/director/mudur16.png",
      imageAlt: "ENOKSİS Müdür Paneli istatistikler ekranı",
    },
  ],
};
