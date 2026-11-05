# AI_LOG — Devamsızlık Takip Uygulaması

**Öğrenci:** Bilgisayar Programcılığı 2. sınıf
**Bildiğim diller:** HTML, CSS (orta), C# (orta), Java (başlangıç)
**Problem:** Üniversite öğrencileri derslerde kaç devamsızlık hakkı kaldığını takip edemiyor, sınırı aşıp devamsızlıktan kalıyor.
**Çözüm:** Her ders için kalan devamsızlık hakkını gösteren, verileri tarayıcıda (localStorage) saklayan basit bir web uygulaması.

---

## Tarih: 08.10.2026

**Amaç:** Proje fikrimi netleştirmek ve kapsamı MVP seviyesine daraltmak.

**AI'a Sorduğum:** Bağlam + Amaç + Sınırlar + Beklenen Çıktı formülüyle kendimi tanıttım. "Backend yok, veriler localStorage'da tutulsun, sadece HTML ve CSS kullanılsın. Önce kod yazma, fikrimi eleştir ve MVP özelliklerini öner." dedim.

**AI Önerisi:** Sınırlarımda bir çelişki olduğunu söyledi: localStorage bir JavaScript özelliği, sadece HTML ve CSS ile veri kaydetmek veya hesaplama yapmak mümkün değil. Az miktarda sade JavaScript eklememi önerdi ve C# ile benzerliklerini gösterdi. Ayrıca üyelik ve bildirim gibi özellikleri kapsam dışı bırakmamı, yanlış eklenen devamsızlık için geri alma butonu eklememi önerdi. Okulumun devamsızlık kuralını kendim kontrol etmemi istedi.

**Benim Eylemim:** Az miktarda JavaScript eklemeyi kabul ettim. Okulumun kuralını kontrol ettim: %70 devam zorunluluğu var, 14 haftalık derste 4 hafta gelmeme hakkı var (14 × 0,30 = 4,2 → 4). Kural hafta cinsinden olduğu için hesaplamayı saat yerine hafta üzerinden yapmaya karar verdik.

**Ne Öğrendim:** HTML sayfanın iskeletini, CSS görünümünü oluşturur; veri saklamak, hesaplama yapmak ve butonlara tepki vermek için JavaScript gerekir. localStorage'daki veriler sadece o tarayıcıda durur, başka cihazda görünmez. AI'a verdiğim sınırların kendi içinde tutarlı olması gerekiyor.

**MVP Özellikleri:**
1. Ders ekleme (ders adı + devamsızlık hakkı, varsayılan 4 hafta)
2. Ders kartı: gelmediğim hafta sayısı ve kalan hak
3. + / − butonları (yanlış eklemeyi düzeltmek için)
4. Renkli durum: yeşil (2+ hak), sarı (1 hak), kırmızı (hak bitti / aşıldı)
5. Ders silme
6. localStorage ile verilerin sayfa yenilense de kalması

**Tasarım Kararı:** Minimalist (sade, beyaz-gri zemin, gölge ve gradyan yok, renk sadece durum göstermek için). Sebep: CSS kısa olur ve her satırı açıklayabilirim.

**Sonraki Adım:** HTML iskeleti (ders ekleme formu + ders listesi alanı).

---

## Tarih: 05.11.2026

**Amaç:** Vize için belirlediğim probleme yönelik web sitesini tamamlamak, GitHub'da public olarak yayınlamak ve issue oluşturmak.

**AI'a Sorduğum:** "Yarın hocaya göstereceğiz, belirlediğimiz probleme yönelik web sitesini yapacağız, GitHub'a public olarak yayınlayacağız ve issue oluşturacağız." dedim.

**AI Önerisi:** Bu dosyadaki kararlara uyarak uygulamanın tamamını (HTML, CSS, JavaScript) AI yazdı. Her MVP özelliğini ayrı commit yaptı, her özellik için issue açtı, MVP sonrası fikirleri de açık issue olarak bıraktı. Uygulamayı tarayıcıda test etti: ders ekleme, + / −, renkli durum, sayfa yenileyince verinin kalması, silme ve telefon görünümü.

**Benim Eylemim:** (doldurulacak: kodu okuyup anladım mı, neyi denedim, neyi değiştirdim?)

**Ne Öğrendim:** (doldurulacak)

**Sonraki Adım:** Açık issue'lardan birini seçip geliştirmek.

---
