// Devamsızlık Takip: uygulamanın tüm mantığı bu dosyada.

// Sayfadaki elemanları bir kez alıp sonra tekrar tekrar kullanıyoruz.
const form = document.getElementById("ders-formu");
const adKutusu = document.getElementById("ders-adi");
const hakKutusu = document.getElementById("ders-hakki");
const liste = document.getElementById("ders-listesi");
const bosMesaj = document.getElementById("bos-mesaj");
const kartSablonu = document.getElementById("ders-karti");

// Her ders şu alanlara sahip bir nesne: { id, ad, hak, gelmedigim }
// C#'taki List<Ders> gibi düşünülebilir.
let dersler = [];

// Tek bir ders için kart oluşturur.
// Metinleri textContent ile yazıyoruz, böylece ders adı HTML olarak çalışmaz.
function kartOlustur(ders) {
  const kart = kartSablonu.content.firstElementChild.cloneNode(true);
  const kalan = ders.hak - ders.gelmedigim;

  kart.dataset.id = ders.id;
  kart.querySelector(".ders-adi").textContent = ders.ad;
  kart.querySelector(".kalan-sayi").textContent = Math.max(kalan, 0);
  kart.querySelector(".kalan-yazi").textContent =
    kalan < 0 ? `sınır ${-kalan} hafta aşıldı` : "hafta hakkın kaldı";
  kart.querySelector(".gelmedigim").textContent =
    `Gelmediğim: ${ders.gelmedigim} / ${ders.hak}`;

  return kart;
}

// Ders listesini baştan çizer.
function listeyiCiz() {
  liste.replaceChildren(...dersler.map(kartOlustur));
  bosMesaj.hidden = dersler.length > 0;
}

// Form gönderilince yeni ders ekler.
form.addEventListener("submit", function (olay) {
  olay.preventDefault(); // Sayfanın yenilenmesini engeller

  dersler.push({
    id: Date.now(),
    ad: adKutusu.value.trim(),
    hak: Number(hakKutusu.value),
    gelmedigim: 0,
  });

  listeyiCiz();
  form.reset(); // Hak kutusu tekrar varsayılan 4 olur
  adKutusu.focus();
});

listeyiCiz();
