// lista de imagens de certificados:

let dioImgs = [
  "0120BD53.jpg",
  "03D09B8B.jpg",
  "055B4F12.jpg",
  "0E932ADF.jpg",
  "0EC438D3.jpg",
  "1049C131.jpg",
  "135D1107.jpg",
  "13A07CFF.jpg",
  "14B8D5B1.jpg",
  "4DDDD35A.jpg",
  "4DE29D9E.jpg",
  "56DECE4A.jpg",
  "59CF0C1D.jpg",
  "5BFC790E.jpg",
  "640C02AA.jpg",
  "6549B06B.jpg",
  "67D9ED11.jpg",
  "6B708C68.jpg",
  "6D1061CD.jpg",
  "72E1C19E.jpg",
  "75BDD8AC.jpg",
  "7619E500.jpg",
  "763A23A2.jpg",
  "76EBE1CF.jpg",
  "7B4A9047.jpg",
  "7F30A009.jpg",
  "8202A5F0.jpg",
  "898D2D8A.jpg",
  "8BCAA0BE.jpg",
  "9115E1E1.jpg",
  "91C14533.jpg",
  "9360BD58.jpg",
  "93908EF0.jpg",
  "9A94C681.jpg",
  "9AD1FE60.jpg",
  "9E120F7A.jpg",
  "A0F488C8.jpg",
  "A12555A4.jpg",
  "A15C5FE8.jpg",
  "A2E21BBC.jpg",
  "A5C042A0.jpg",
  "AE1E7D9E.jpg",
  "AFDE237E.jpg",
  "B412D6D5.jpg",
  "B9EDA67F.jpg",
  "BA67DA20.jpg",
  "BBA71A23.jpg",
  "BCDEEB34.jpg",
  "BE371A1E.jpg",
  "BE731A1E.jpg",
  "C20C1A41.jpg",
  "187E7E51.jpg",
  "1E782384.jpg",
  "26566988.jpg",
  "28F38E88.jpg",
  "2C8DEA1E.jpg",
  "2F78099F.jpg",
  "2FDC8FE6.jpg",
  "31E49450.jpg",
  "381C72BE.jpg",
  "39EABD14.jpg",
  "3AA26860.jpg",
  "3ACFE05A.jpg",
  "3BCA9BF6.jpg",
  "441EA3E0.jpg",
  "489B94CC.jpg",
  "48DB8644.jpg",
  "491C90DF.jpg",
  "172A16BB.jpg",
  "4C59CFA5.jpg",
  "80283A19.jpg",
  "B36BA519.jpg",
  "C2C0A786.jpg",
  "C78AF81A.jpg",
  "C80593C8.jpg",
  "CEB0F25A.jpg",
  "D092F5A6.jpg",
  "D20D1D2D.jpg",
  "D8F1DACF.jpg",
  "E07BB0E2.jpg",
  "E5D32398.jpg",
  "EAC9D089.jpg",
  "F38BE572.jpg",
  "F793603B.jpg",
  "FB5AEDDF.jpg",
  "FE1FBC64.jpg",
  "FF6BA575.jpg",
];
let jdevImgs = ["certificado.jpg", "FF6BA575.jpg"];
let unifcvImgs = ["diploma.jpg", "6218114ccf40b.jpg", "certificado2.jpg"];

let dioSection = document.getElementById("dio");
let jdevSection = document.getElementById("jdev");
let unifcvSection = document.getElementById("unifcv");

let criaCard = () => {
  dioImgs.map((item) => {
    let img = new Image(160, 120);
    img.setAttribute("class", "certificado");
    img.src = `../imgs/certificados/dio/${item}`;
    dioSection.appendChild(img);
  });
  unifcvImgs.map((item) => {
    let img = new Image(160, 120);
    img.setAttribute("class", "certificado");
    img.src = `../imgs/certificados/unifcv/${item}`;
    unifcvSection.appendChild(img);
  });
  jdevImgs.map((item) => {
    let img = new Image(160, 120);
    img.setAttribute("class", "certificado");
    img.src = `../imgs/certificados/jdev/${item}`;
    jdevSection.appendChild(img);
  });
};
criaCard();

// Responsividade dos titulos das abas

let responde = () => {
  let wWidth = window.screen.width;
  let label_dio = document.getElementById("lDio");
  if (wWidth <= 720) {
    label_dio.innerHTML = "DIO";
  } else {
    label_dio.innerHTML = "Digital Innovation One";
  }

  let label_jdev = document.getElementById("lJdev");
  if (wWidth <= 720) {
    label_jdev.innerHTML = "JDev";
  } else {
    label_jdev.innerHTML = "JDev Treinamentos";
  }
};

window.addEventListener("resize", responde);
