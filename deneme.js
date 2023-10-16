//! diyalog kutuları
//? alert
//?prompt
//?confim

// alert("İlmeinize devam etmeden önce kaydetmelisiniz");

// let isim=prompt("İsminizi Giriniz:");
// let yas=prompt("Yaşınızı Giriniz:");
// console.log(isim+" "+ yas);

// let sonuc=confirm("Silmek istediğinize emin misiniz")
// console.log(sonuc);

//! if-else-elseif
//?example-1 ehliyet sınavınına giriş kontrol
// let age=Number(prompt("Yaşınızı giriniz"));
// let money=Number(prompt("Bütçenizi giriniz"));

// if(age>=18 && money>=3000){
//     alert("Sınava girebilirsiniz");
// }else{
//     alert("Sınava girişiniz reddedildi");
// }

//?example-2 vize ve final hesaplama
// let vize1=Number(prompt("1. vize sonucunuzu giriniz"));
// let vize2=Number(prompt("2. vize sonucunuzu giriniz"));
// let final=Number(prompt("final sonucunuzu giriniz"));
// let sonuc=(vize1*0.2)+(vize2*0.2)+(final*0.6);
// if(sonuc>=75){
//     alert("Dersi başarıyla tamamladınız");
// }else{
//     alert("Derten kaldınız")
// };

//?example-3 yol seçme
// let secilenYol= Number(prompt("Lütfen seçmek istediğiniz yolu giriniz"));
// if(secilenYol===1){
//     alert("1. yolu seçtiniz");
// }else if(secilenYol===2){
//     alert("2. yolu seçtiniz");
// }else if(secilenYol===3){
//     alert("3. yolu seçtiniz");
// }else {
//     alert("Geçersiz bir yol seçtiniz")
// }

//?example-3 ad ve tckn girme
// let ad = prompt("Lütfen isminizi giriniz");
// let tckn =prompt("Lütfen TCKN giriniz");
// kontrolEt(ad, tckn);
// function kontrolEt(ad, tckn){
// if(ad==""){
// console.log("Lütfen İsim alanını boş bırakmayınız!");
// return;
// }
// if(tckn.length!==11){
//     console.log("Lütfen TC'nizi 11 hane olarak giriniz");
//     return;
// }
// console.log("İsim ve tckn başarılı şekilde girildi");

// }
//?example-4 beden kitle endeksi hesaplama
// let kilo =Number(prompt("Kilonuzu giriniz"));
// let boy=Number(prompt("Boyunuzu metre cinsinden giriniz"));
// let sonuc=kilo/(boy*2);

// if(sonuc<18.5){
// console.log("İdeal kilonun altındasınız");
// }else if(sonuc>=18.5 && sonuc<=24.9){
//     console.log("İdeal kiloda");
// }else if(sonuc>=25 && sonuc<=29.9){
//     console.log("İdeal kilonun üstünde(obez)");
// }else if(sonuc>=30 && sonuc<=39.9){
//     console.log("İdeal kilonun çok üstünde(morbid obez)");
// }else if(sonuc>=40){

// }
//! Switch
//?example-5 swtich
// let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");
// switch (sayi) {
//     case "1":
//         console.log("Girilen sayı 1'dir");
//         break;
//     case "2":
//         console.log("Girilen sayı 2'dir");
//         break;
//     case "3":
//         console.log("Girilen sayı 3'dür");
//         break;
//     case "4":
//         console.log("Girilen sayı 4'tür");
//         break;
//     case "5":
//         console.log("Girilen sayı 5'tir");
//         break;
//     default:
//         console.log("Girilen sayı 1 ile 5 arasında olmalıdır!!!");
//         break;
// }
//?example-6 swtich
// let yeniSatir = "\r\n"
// let metin = "1-Pazartesi" + yeniSatir
//     + "2-Salı" + yeniSatir
//     + "3-Çarşamba" + yeniSatir
//     + "4-Perşembe" + yeniSatir
//     + "5-Cuma" + yeniSatir
//     + "6-Cumartesi" + yeniSatir
//     + "7-Pazar"

// let deger = prompt(metin);
// switch (deger) {
//     case "1":
//         console.log("pazartesi günü");
//         break;
//     case "2":
//         console.log("sali günü");
//         break;
//     case "3":
//         console.log("çarşamba günü");
//         break;
//     case "4":
//         console.log("perşembe günü");
//         break;
//     case "5":
//         console.log("cuma günü");
//         break;
//     case "6":
//         console.log("cumartesi günü");
//         break;
//     case "7":
//         console.log("pazar günü");
//         break;
//     default:
//         console.log("Lütfen geçerli bir değer giriniz!");
// }
//?example-6 swtich atm uygulaması
let yeniSAtir = "\r\n";
let bakiye = 1000;
let metin = "1-Bakiye Görüntüleme" + yeniSAtir
    + "2-Para Çekme" + yeniSAtir
    + "3-para Yatırma" + yeniSAtir
    + "4-Çıkış" + yeniSAtir
    + "Lütfen bir değer seçiniz";

let secim = prompt(metin);
switch (secim) {
    case "1":
        alert("Bakiyeniz :" + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
        if (cekilecekTutar <= bakiye) {
            bakiye = bakiye - cekilecekTutar
            alert("Kalan bakiye: " + bakiye);
        } else {
            alert("Bakiyenizden fazla para çekemezsiniz!" + yeniSAtir
                + "Bakiyeniz:" + bakiye +" Çekmek istediğiniz tutar :" + cekilecekTutar);
        }
        break;
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz: "));
        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel bakiyeniz" + bakiye);
        break;
    case "4":
       alert("Sistemden Çıkış Yapılmıştır...");
        break;
    default:
        alert("Lütfen 1-4 arasında bir değer giriniz!");
        break;
}

//?example-7 for ile hesap makinesi yapımı
// for (let i = 1; i <=10; i++) {
//   for(let j=1; j<=10; j++){
// console.log(i+"x"+j+"="+(i*j));
//   }
//     console.log("---------------------------------------------");
// }

//?example-8 faktöriyel hesaplama
// let sayi= Number(prompt("Bir sayı giriniz"));
// let carpim=1;
// for(let i=1; i<=sayi; i++){
// carpim=carpim*i;

// }
// alert("Sonuç:"+carpim);
//?example-9 kelime sayısı bulma
// let metin = "Şu anda Ankara'da Javascrpit eğitimi almaktayım."
// let harf = prompt("Harfi giriniz");
// let sonuc=bul(harf);
// alert("Harf Sayısı:"+sonuc);

// function bul(harf) {
//     let toplam = 0;
//     for (let i = 0; i < metin.length; i++) {
//         if (metin.charAt(i) === harf) {
//             toplam += 1;
//         }


//     }
//     return toplam;
// }




