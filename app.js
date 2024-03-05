const kontrolButonu = document.querySelector("#btn");
kontrolButonu.addEventListener("click", () => {
  //* TC Kimlik Numarası Al
  const tcKimlik = document.getElementById("tcKimlik").value;
  const sonucParagrafi = document.getElementById("sonuc");
  if (!tcKimlik) {
    sonucParagrafi.textContent = "Lütfen Bir TC Kimlik Numarası Giriniz.";
    sonucParagrafi.style.color = "red";
    return;
  }
  const tcKimlikNumarası = parseInt(tcKimlik);
  if (
    isNaN(tcKimlikNumarası) ||
    tcKimlik.length !== 11 ||
    tcKimlik.charAt(0) === "0"
  ) {
    sonucParagrafi.textContent = "Lütfen geçerli bir değer giriniz.";
    sonucParagrafi.style.color = "red";
    return;
  }
  //* TC Kimlik numarasını geçerliliğini kontrol et
  const geçerliMi = tcKimlikNumarasıGeçerliMi(tcKimlikNumarası);

  //* Sonucu Göster

  if (geçerliMi) {
    sonucParagrafi.textContent = "Geçerli TC Kimlik Numarası.";
    sonucParagrafi.style.color = "green";
  } else {
    sonucParagrafi.textContent = "Geçersiz TC Kimlik Numarası";
    sonucParagrafi.style.color = "red";
  }
});
const tcKimlikNumarasıGeçerliMi = (numara) => {
  //TC Kimlik numarasını diziye dönüştür
  const strNumara = numara.toString();
  //*TC Kimlik numarasının geçerliliğini kontrol etmek için gerekli hesaplamalar
  let toplam1 = 0;
  let toplam2 = 0;
  for (let i = 0; i < 9; i++) {
    if (i % 2 === 0) {
      toplam1 += parseInt(strNumara.charAt(i));
    } else {
      toplam2 += parseInt(strNumara.charAt(i));
    }
  }
  const onuncuBasamak = (toplam1 * 7 - toplam2) % 10;
  console.log(typeof onuncuBasamak);
  let toplam3 = 0;
  for (let i = 0; i < 10; i++) {
    toplam3 += parseInt(strNumara.charAt(i));
  }
  const onBirinciBasamak = toplam3 % 10;
  console.log(typeof onBirinciBasamak);
  console.log(typeof parseInt(strNumara.charAt(9)));
  console.log(typeof parseInt(strNumara.charAt(10)));
  return (
    parseInt(strNumara.charAt(9)) === onuncuBasamak &&
    parseInt(strNumara.charAt(10)) === onBirinciBasamak
  );
};
