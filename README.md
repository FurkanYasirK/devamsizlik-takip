# Devamsızlık Takip

Üniversite öğrencileri derslerde kaç devamsızlık hakkı kaldığını takip edemiyor ve sınırı aşıp devamsızlıktan kalabiliyor. Bu uygulama her ders için kalan devamsızlık hakkını gösterir.

**Canlı site:** https://furkanyasirk.github.io/devamsizlik-takip/

## Özellikler

- Ders ekleme (ders adı ve devamsızlık hakkı, varsayılan 4 hafta)
- Her ders için gelinmeyen hafta sayısı ve kalan hak
- Yanlış girişi düzeltmek için + ve − butonları
- Renkli durum: yeşil (2+ hak), sarı (1 hak), kırmızı (hak bitti veya aşıldı)
- Ders silme
- Veriler localStorage'da saklandığı için sayfa yenilense de kalır

## Devamsızlık kuralı

%70 devam zorunluluğu olan 14 haftalık bir derste 14 × 0,30 = 4,2 olduğu için 4 hafta gelmeme hakkı vardır. Kural hafta cinsinden olduğu için hesaplama saat yerine hafta üzerinden yapılır. Okulun kuralı farklıysa ders eklerken hak değiştirilebilir.

## Çalıştırma

Kurulum gerekmez. `index.html` dosyasını tarayıcıda açmak yeterlidir.

## Teknolojiler

- **HTML:** sayfa iskeleti (`index.html`)
- **CSS:** görünüm (`style.css`)
- **JavaScript:** hesaplama, butonlar ve veri saklama (`app.js`)

Backend ve üyelik yoktur. Veriler yalnızca kullanılan tarayıcıda durur, başka cihazda görünmez.

## Proje süreci

- Yapılan işler ve sonraki fikirler [Issues](../../issues) sayfasında takip edilir.
- Yapay zekâ kullanımı [AI_LOG.md](AI_LOG.md) dosyasında kayıtlıdır.
