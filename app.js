// Devamsızlık Takip
// Çalışma mantığı: dersler bir listede durur. Liste her değiştiğinde
// önce kaydedilir, sonra ekrandaki kartlar baştan çizilir.

// Dersleri tutan liste. C#'taki List<Ders> gibi düşünülebilir.
// Her dersin 3 alanı var: ad, hak, gelmedigim
let dersler = [];

// Tarayıcıdan veriyi geri okur. Sayfa açılınca bir kez çalışır.
function dersleriYukle() {
  try {
    const kayit = localStorage.getItem("devamsizlik-dersler");
    if (kayit !== null) {
      dersler = JSON.parse(kayit); // Metni tekrar listeye çevirir
    }
    if (!Array.isArray(dersler)) {
      dersler = [];
    }
  } catch (hata) {
    dersler = []; // Kayıt bozuksa boş listeyle başla
  }
}

// Listeyi tarayıcıya yazar. localStorage sadece metin sakladığı için
// listeyi önce JSON metnine çeviriyoruz.
function dersleriKaydet() {
  const metin = JSON.stringify(dersler);
  localStorage.setItem("devamsizlik-dersler", metin);
}

// Formdaki "Ders ekle" butonuna basılınca çalışır.
function dersEkle(olay) {
  olay.preventDefault(); // Formun sayfayı yenilemesini engeller

  const adKutusu = document.getElementById("ders-adi");
  const hakKutusu = document.getElementById("ders-hakki");

  const yeniDers = {
    ad: adKutusu.value.trim(),
    hak: Number(hakKutusu.value),
    gelmedigim: 0,
  };
  dersler.push(yeniDers); // C#'taki List.Add ile aynı

  dersleriKaydet();
  listeyiGoster();

  document.getElementById("ders-formu").reset(); // Formu temizler
  adKutusu.focus();
}

// + butonu. i: dersin listedeki sırası
function artir(i) {
  dersler[i].gelmedigim = dersler[i].gelmedigim + 1;
  dersleriKaydet();
  listeyiGoster();
}

// − butonu. 0'ın altına inmez.
function azalt(i) {
  if (dersler[i].gelmedigim > 0) {
    dersler[i].gelmedigim = dersler[i].gelmedigim - 1;
  }
  dersleriKaydet();
  listeyiGoster();
}

// Sil butonu. Önce kullanıcıya sorar.
function sil(i) {
  const onay = confirm(dersler[i].ad + " dersi silinsin mi?");
  if (onay) {
    dersler.splice(i, 1); // C#'taki List.RemoveAt(i) ile aynı
    dersleriKaydet();
    listeyiGoster();
  }
}

// Tek bir dersin kartını hazırlar.
function kartOlustur(i) {
  const ders = dersler[i];
  const kalan = ders.hak - ders.gelmedigim;

  // Kalan hakka göre renk ve yazıları seçiyoruz.
  // Renk adı, style.css'teki .yesil .sari .kirmizi sınıflarıdır.
  let renk;
  let durum;
  let sayi = kalan;
  let aciklama = "hafta hakkın kaldı";

  if (kalan >= 2) {
    renk = "yesil";
    durum = "Güvende";
  } else if (kalan === 1) {
    renk = "sari";
    durum = "Son hak";
  } else if (kalan === 0) {
    renk = "kirmizi";
    durum = "Hak bitti";
  } else {
    renk = "kirmizi";
    durum = "Sınır aşıldı";
    sayi = 0;
    aciklama = "sınır " + (-kalan) + " hafta aşıldı";
  }

  // Gelmediğim hafta 0 ise − butonu pasif olur.
  let eksiPasif = "";
  if (ders.gelmedigim === 0) {
    eksiPasif = "disabled";
  }

  // Kartın HTML'i. Ters tırnak içindeki ${...} kısımları,
  // C#'taki $"...{degisken}..." yazımıyla aynı işi yapar.
  const kart = document.createElement("li");
  kart.className = "kart " + renk;
  kart.innerHTML = `
    <div class="kart-ust">
      <h3 class="ders-adi"></h3>
      <span class="durum">${durum}</span>
    </div>
    <p class="kalan">
      <span class="kalan-sayi">${sayi}</span>
      <span class="kalan-yazi">${aciklama}</span>
    </p>
    <div class="kart-alt">
      <div class="sayac">
        <button class="kucuk-buton" type="button" onclick="azalt(${i})" aria-label="Bir hafta azalt" ${eksiPasif}>−</button>
        <span class="gelmedigim">Gelmediğim: ${ders.gelmedigim} / ${ders.hak}</span>
        <button class="kucuk-buton" type="button" onclick="artir(${i})" aria-label="Bir hafta artır">+</button>
      </div>
      <button class="sil-buton" type="button" onclick="sil(${i})">Sil</button>
    </div>
  `;

  // Ders adını kullanıcı yazdığı için en son textContent ile koyuyoruz.
  // Böylece biri adın içine HTML kodu yazsa bile kod çalışmaz, yazı olarak görünür.
  kart.querySelector(".ders-adi").textContent = ders.ad;

  return kart;
}

// Ekrandaki listeyi temizler ve bütün kartları baştan çizer.
function listeyiGoster() {
  const liste = document.getElementById("ders-listesi");
  liste.innerHTML = "";

  for (let i = 0; i < dersler.length; i++) {
    const kart = kartOlustur(i);
    liste.appendChild(kart);
  }

  // Hiç ders yoksa "Henüz ders eklemedin" yazısı görünür.
  document.getElementById("bos-mesaj").hidden = dersler.length > 0;
}

// Sayfa açılınca: kayıtlı dersleri oku ve ekrana çiz.
dersleriYukle();
listeyiGoster();
