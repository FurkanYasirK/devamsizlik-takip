// Devamsızlık Takip
// Dersler bir listede durur. Liste her değiştiğinde kaydedilir ve kartlar baştan çizilir.

// Dersleri tutan liste. Her dersin 3 alanı var: ad, hak, gelmedigim
let dersler = [];

// Sayfa açılınca daha önce kaydedilmiş dersleri tarayıcıdan oku.
const kayit = localStorage.getItem("devamsizlik-dersler");
if (kayit !== null) {
  dersler = JSON.parse(kayit);
}

// Listeyi kaydeder ve ekrandaki kartları baştan çizer.
function kaydetVeGoster() {
  localStorage.setItem("devamsizlik-dersler", JSON.stringify(dersler));

  const liste = document.getElementById("ders-listesi");
  liste.innerHTML = "";
  for (let i = 0; i < dersler.length; i++) {
    liste.appendChild(kartOlustur(i));
  }

  // Hiç ders yoksa "Henüz ders eklemedin" yazısı görünür.
  document.getElementById("bos-mesaj").hidden = dersler.length > 0;
}

// Tek bir dersin kartını hazırlar. i: dersin listedeki sırası
function kartOlustur(i) {
  const ders = dersler[i];
  const kalan = ders.hak - ders.gelmedigim;

  // Renk adı, style.css'teki .yesil .sari .kirmizi sınıflarıdır.
  let renk;
  let durum;
  if (kalan >= 2) {
    renk = "yesil";
    durum = "Güvende";
  } else if (kalan === 1) {
    renk = "sari";
    durum = "Son hak";
  } else {
    renk = "kirmizi";
    durum = "Hak bitti";
  }

  // ${...} kısımları, C#'taki $"...{degisken}..." yazımıyla aynı işi yapar.
  const kart = document.createElement("li");
  kart.className = "kart " + renk;
  kart.innerHTML = `
    <div class="kart-ust">
      <h3 class="ders-adi"></h3>
      <span class="durum">${durum}</span>
    </div>
    <p class="kalan">
      <span class="kalan-sayi">${Math.max(kalan, 0)}</span>
      <span class="kalan-yazi">hafta hakkın kaldı</span>
    </p>
    <div class="kart-alt">
      <div class="sayac">
        <button class="kucuk-buton" onclick="azalt(${i})" aria-label="Bir hafta azalt">−</button>
        <span class="gelmedigim">Gelmediğim: ${ders.gelmedigim} / ${ders.hak}</span>
        <button class="kucuk-buton" onclick="artir(${i})" aria-label="Bir hafta artır">+</button>
      </div>
      <button class="sil-buton" onclick="sil(${i})">Sil</button>
    </div>
  `;

  // Ders adı textContent ile yazılır, içine HTML kodu yazılsa bile düz yazı olarak görünür.
  kart.querySelector(".ders-adi").textContent = ders.ad;

  return kart;
}

// Formdaki "Ders ekle" butonu
function dersEkle(olay) {
  olay.preventDefault(); // Formun sayfayı yenilemesini engeller

  dersler.push({
    ad: document.getElementById("ders-adi").value,
    hak: Number(document.getElementById("ders-hakki").value),
    gelmedigim: 0,
  });

  document.getElementById("ders-formu").reset(); // Formu temizler
  kaydetVeGoster();
}

// + butonu
function artir(i) {
  dersler[i].gelmedigim++;
  kaydetVeGoster();
}

// − butonu. 0'ın altına inmez.
function azalt(i) {
  if (dersler[i].gelmedigim > 0) {
    dersler[i].gelmedigim--;
  }
  kaydetVeGoster();
}

// Sil butonu. Önce kullanıcıya sorar.
function sil(i) {
  if (confirm(dersler[i].ad + " dersi silinsin mi?")) {
    dersler.splice(i, 1); // Listeden i. dersi siler, C#'taki RemoveAt gibi
    kaydetVeGoster();
  }
}

// Sayfa açılınca kartları ekrana çiz.
kaydetVeGoster();
