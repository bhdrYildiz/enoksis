import type { Guide } from "./types";

export const counselorGuide: Guide = {
    number: "02",
    eyebrow: "REHBER ÖĞRETMEN PANELİ",
    title: "Rehber Öğretmen Paneli Kullanım Kılavuzu",
    description:
        "ENOKSİS Rehber Öğretmen Panelinde hesap, sınıf, öğrenci, istatistik, faaliyet, duyuru ve ENREHET işlemlerini adım adım inceleyin.",

    sections: [
        {
            id: "rehber-ogretmen-sinif-islemleri",
            title: "Rehber Öğretmen ve Sınıf İşlemleri",
            description:
                "Rehber Öğretmen hesabının oluşturulmasından sınıf ve öğrenci kayıtlarına kadar temel işlemleri öğrenin.",
            steps: [
                "Rehber Öğretmen kaydı Müdür hesabı üzerinden oluşturulur.",
                "Sınıf ekleme ve düzenleme işlemleri hem Müdür hem de Rehber Öğretmen hesabından yapılabilir.",
                "Sınıflar oluşturulduktan sonra öğrenciler tek tek veya toplu olarak sınıflara eklenebilir.",
                "Öğrenci kaydı için T.C. Kimlik No, isim ve soyisim bilgileri zorunludur.",
                "Telefon numarası ve e-posta adresi isteğe bağlı olarak eklenebilir.",
            ],
            note:
                "Öğrencilerin ilk giriş şifresi T.C. Kimlik numaralarının son 4 hanesidir. Öğrenciler daha sonra kendi panellerinden şifrelerini değiştirebilir.",
            image: "/images/guides/counselor/rehber1.png",
            imageAlt: "ENOKSİS Rehber Öğretmen ve sınıf işlemleri",
        },

        {
            id: "giris-hesap",
            title: "ENOKSİS'e Giriş ve Bilgilerinizi Düzenleme",
            description:
                "Rehber Öğretmen hesabınız oluşturulduktan sonra ENOKSİS'e giriş yapabilir ve hesap bilgilerinizi düzenleyebilirsiniz.",
            steps: [
                "Rehber Öğretmen hesabı Müdür kullanıcısı tarafından oluşturulur.",
                "Müdür kullanıcısı gerekli sınıfları Rehber Öğretmen hesabına atayabilir.",
                "Giriş ekranında kullanıcı türü olarak “Rehber Öğretmen” seçeneğini seçin.",
                "T.C. Kimlik numaranız veya e-posta adresiniz ve şifrenizle giriş yapın.",
                "Giriş yaptıktan sonra Hesabım sayfasından bilgilerinizi güncelleyebilirsiniz.",
            ],
            image: "/images/guides/counselor/rehber2.png",
            imageAlt:
                "ENOKSİS Rehber Öğretmen giriş ve hesap bilgileri ekranı",
        },

        {
            id: "rapor-gorunurlugu",
            title: "Rapor Görünürlük Ayarları",
            description:
                "Öğrenci ve velilerin mizaç raporlarını görüp göremeyeceklerini sistem ayarlarından belirleyebilirsiniz.",
            steps: [
                "Hesabım sayfasını açın.",
                "Sistem ayarları bölümüne gidin.",
                "Öğrencilerin rapor görünürlüğünü belirleyin.",
                "Velilerin rapor görünürlüğünü belirleyin.",
                "İhtiyacınıza göre görünürlük ayarlarını düzenleyin.",
            ],
            image: "/images/guides/counselor/rehber3.png",
            imageAlt: "ENOKSİS rapor görünürlük ayarları",
        },

        {
            id: "ogretmen-paneli",
            title: "ENOKSİS Öğretmen Paneli",
            description:
                "Rehber Öğretmen Panelindeki temel menüleri ve çalışma alanlarını tanıyın.",
            steps: [
                "Ana Sayfa bölümünden sık kullanılan kısayollara ulaşabilirsiniz.",
                "Öğrenci Arama ile sınıflarınızdaki öğrencileri arayabilirsiniz.",
                "Sınıflar bölümünden size atanmış sınıfları ve öğrencileri görüntüleyebilirsiniz.",
                "İstatistikler bölümünden öğrencilerinizle ilgili verileri inceleyebilirsiniz.",
                "Faaliyetler bölümünden yaptığınız çalışmaları kayıt altına alabilirsiniz.",
                "Duyurular bölümünden sınıf veya öğrenciler için duyuru oluşturabilirsiniz.",
                "ENREHET bölümünden rehberlik etkinliklerine ulaşabilirsiniz.",
                "Hesabım bölümünden profil bilgilerinizi güncelleyebilirsiniz.",
            ],
            image: "/images/guides/counselor/rehber4.png",
            imageAlt: "ENOKSİS Rehber Öğretmen Paneli menüleri",
        },

        {
            id: "sinif-islemleri",
            title: "Sınıf ve Öğrenci İşlemleri",
            description:
                "Sınıflar bölümünden yeni sınıflar oluşturabilir ve mevcut sınıflarınızı yönetebilirsiniz.",
            steps: [
                "Sınıflar sayfasını açın.",
                "Yeni sınıf oluşturmak için Sınıf Ekle seçeneğini kullanın.",
                "Sınıfın isim ve kademe bilgilerini belirleyin.",
                "Oluşturduğunuz sınıf içerisindeki öğrencileri görüntüleyin.",
            ],
            image: "/images/guides/counselor/rehber5.png",
            imageAlt: "ENOKSİS sınıf ve öğrenci işlemleri ekranı",
        },

        {
            id: "sinif-detayi",
            title: "Sınıf Detayı ve Öğrenciler",
            description:
                "Bir sınıfı açarak sınıfa kayıtlı öğrencileri görüntüleyebilir ve öğrenci işlemlerine ulaşabilirsiniz.",
            steps: [
                "İşlem yapmak istediğiniz sınıfı açın.",
                "Sınıfa kayıtlı öğrencileri görüntüleyin.",
                "Öğrenciler arasında arama yapın.",
                "Öğrenciyle ilgili işlem seçeneklerine ulaşın.",
                "Gerekirse yeni öğrenci ekleme işlemini başlatın.",
            ],
            image: "/images/guides/counselor/rehber6.png",
            imageAlt: "ENOKSİS sınıf detay ve öğrenci listesi",
        },

        {
            id: "ogrenci-ekleme",
            title: "Öğrenci Ekleme",
            description:
                "Öğrencileri sınıflara tek tek ekleyebileceğiniz gibi toplu öğrenci ekleme özelliğini de kullanabilirsiniz.",
            steps: [
                "Öğrenci eklemek istediğiniz sınıfı açın.",
                "Öğrenci Ekle seçeneğini kullanın.",
                "Öğrencinin zorunlu bilgilerini doldurun.",
                "Çok sayıda öğrenci ekleyecekseniz İçe/Dışa Aktar seçeneğini kullanın.",
                "Toplu işlem için ENOKSİS Excel şablonunu indirin.",
            ],
            image: "/images/guides/counselor/rehber7.png",
            imageAlt: "ENOKSİS öğrenci ekleme işlemleri",
        },

        {
            id: "excel-ogrenci-ekleme",
            title: "Excel ile Toplu Öğrenci Ekleme",
            description:
                "ENOKSİS şablonunu kullanarak birden fazla öğrenciyi aynı anda sisteme aktarabilirsiniz.",
            steps: [
                "ENOKSİS üzerinden Excel şablonunu indirin.",
                "Mevcut öğrencilerin bilgilerini değiştirmeyin.",
                "Yeni öğrencilerde ID alanını boş bırakın.",
                "T.C. Kimlik No, isim ve soyisim bilgilerini doldurun.",
                "Telefon ve e-posta bilgilerini varsa ekleyin.",
                "Şifre alanına herhangi bir değer girmeyin.",
                "Dosyayı kaydedin ve ENOKSİS'e yükleyin.",
            ],
            note:
                "Yeni öğrencilerin ilk şifresi T.C. Kimlik numarasının son 4 hanesidir.",
            image: "/images/guides/counselor/rehber8.png",
            imageAlt: "ENOKSİS Excel ile toplu öğrenci ekleme",
        },

        {
            id: "ogrenci-duzenleme-silme",
            title: "Öğrenci Düzenleme ve Silme",
            description:
                "Öğrenci bilgilerini güncelleyebilir veya gerekli durumlarda öğrenciyi sistemden silebilirsiniz.",
            steps: [
                "İşlem yapmak istediğiniz öğrenciyi bulun.",
                "Öğrenci bilgilerini değiştirmek için Düzenle seçeneğini kullanın.",
                "Gerekirse öğrencinin sınıf bilgisini değiştirin.",
                "Öğrenciyi sistemden tamamen kaldırmak için Sil seçeneğini kullanın.",
            ],
            note:
                "Dikkat: Öğrenci silindiğinde mizaç ve raporları, veli bilgileri ve öğrenciye ait diğer bilgiler silinir. Bu işlem geri alınamaz.",
            image: "/images/guides/counselor/rehber9.png",
            imageAlt: "ENOKSİS öğrenci düzenleme ve silme işlemleri",
        },

        {
            id: "toplu-sinif-degistirme",
            title: "Öğrencileri Yeni Sınıflarına Aktarma",
            description:
                "Dönem geçişlerinde öğrencileri yeni sınıflarına toplu olarak aktarabilirsiniz.",
            steps: [
                "Öğrencilerin bulunduğu mevcut sınıfı açın.",
                "Toplu Sınıf Değiştir seçeneğini kullanın.",
                "Yeni sınıfa aktarılacak öğrencileri seçin.",
                "Öğrencilerin aktarılacağı sınıfı belirleyin.",
                "Seçimlerinizi kontrol ederek sınıf değiştirme işlemini tamamlayın.",
            ],
            image: "/images/guides/counselor/rehber10.png",
            imageAlt: "ENOKSİS toplu sınıf değiştirme işlemi",
        },

        {
            id: "ogretmen-mizac-testi",
            title: "Öğretmenler İçin Mizaç Testi",
            description:
                "Kurumunuzdaki öğretmen ve çalışanların ENOKSİS üzerinden mizaç testi olmasını sağlayabilirsiniz.",
            steps: [
                "Öğretmenler için yeni bir sınıf oluşturun.",
                "Sınıfın kademesini Yetişkin olarak belirleyin.",
                "Test olacak öğretmenleri bu sınıfa öğrenci olarak ekleyin.",
                "Öğretmenler giriş ekranında kullanıcı türü olarak Öğrenci seçeneğini kullanmalıdır.",
                "Test tamamlandıktan sonra mizaç raporlarına öğrenci panelinden ulaşabilirler.",
            ],
            note:
                "Rehber Öğretmen hesabı bulunan bir kişinin mizaç testi olabilmesi için ayrıca öğrenci kullanıcısı olarak kaydedilmesi gerekir.",
            image: "/images/guides/counselor/rehber11.png",
            imageAlt: "ENOKSİS öğretmenler için mizaç testi işlemleri",
        },

        {
            id: "istatistikler",
            title: "İstatistikler",
            description:
                "Öğrencilerinizin mizaç dağılımlarını ve sınıf verilerini İstatistikler bölümünden inceleyebilirsiniz.",
            steps: [
                "İstatistikler bölümünü açın.",
                "Öğrencilerin genel mizaç dağılımını inceleyin.",
                "İhtiyacınıza göre mizaç veya sınıf bazında filtreleme yapın.",
                "Öğrenci listelerini görüntüleyin.",
                "Gerekli listeleri Excel dosyası olarak indirin.",
            ],
            image: "/images/guides/counselor/rehber12.png",
            imageAlt: "ENOKSİS öğrenci istatistikleri",
        },

        {
            id: "faaliyetler",
            title: "Faaliyetler",
            description:
                "Kurumunuzda ENOKSİS veya mizaç alanında gerçekleştirdiğiniz çalışmaları kayıt altına alabilirsiniz.",
            steps: [
                "Faaliyetler bölümünü açın.",
                "Daha önce eklenen faaliyetleri görüntüleyin.",
                "Yeni Faaliyet Ekle seçeneğini kullanın.",
                "Faaliyet bilgilerini doldurarak kaydedin.",
                "Gerekirse mevcut faaliyetleri düzenleyin.",
            ],
            note:
                "Silinen faaliyetler geri alınamaz. Faaliyet kayıtları Müdür ve sistem yöneticisi tarafından görüntülenebilir.",
            image: "/images/guides/counselor/rehber13.png",
            imageAlt: "ENOKSİS faaliyet yönetimi",
        },

        {
            id: "duyurular",
            title: "Duyurular",
            description:
                "Öğrenci ve velilere yönelik duyuruları panel üzerinden oluşturabilir ve yönetebilirsiniz.",
            steps: [
                "Duyurular bölümünü açın.",
                "Daha önce oluşturduğunuz duyuruları görüntüleyin.",
                "Yeni Duyuru Ekle seçeneğini kullanın.",
                "Duyurunun içeriğini ve hedef kitlesini belirleyin.",
                "Duyuruyu yayınlayın.",
            ],
            note:
                "Kendi oluşturduğunuz duyuruları silebilirsiniz. Silme işlemi geri alınamaz.",
            image: "/images/guides/counselor/rehber14.png",
            imageAlt: "ENOKSİS duyuru yönetimi",
        },

        {
            id: "enrehet",
            title: "ENREHET Etkinlikleri",
            description:
                "Mizaç çalışmalarında kullanabileceğiniz Enneagram Rehberlik Etkinliklerine ENREHET bölümünden ulaşabilirsiniz.",
            steps: [
                "ENREHET bölümünü açın.",
                "İhtiyacınız olan rehberlik etkinliğini bulun.",
                "Etkinliğin kademe ve mizaç bilgilerini inceleyin.",
                "İlgili etkinliği açın.",
                "PDF dosyasını indirerek rehberlik çalışmalarınızda kullanın.",
            ],
            image: "/images/guides/counselor/rehber15.png",
            imageAlt: "ENOKSİS ENREHET rehberlik etkinlikleri",
        },
    ],
};