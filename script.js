function pilihanComputer() {
  const comp = Math.random();

  if (comp <= 0.35) return "kertas";
  if (comp > 0.35 && comp < 0.65) return "gunting";
  return "batu";
}

function getHasil(com, play) {
  if (play == com) return "SERI";
  if (play == "kertas") return com == "gunting" ? "KALAH" : "MENANG";
  if (play == "gunting") return com == "batu" ? "KALAH" : "MENANG";
  if (play == "batu") return com == "kertas" ? "KALAH" : "MENANG";
}

const pilkertas = document.getElementById("kertas");
pilkertas.addEventListener("click", function () {
  let com = pilihanComputer();
  let play = "kertas";
  let hasil = getHasil(com, play);
  console.log("com" + com);
  console.log("play" + play);
  console.log(hasil);

  const imgcom = document.getElementById("com");
  imgcom.setAttribute("src", com + ".jpg");
  const thasil = document.getElementById("hasil");
  thasil.innerHTML = hasil;
});

const pilgunting = document.getElementById("gunting");
pilgunting.addEventListener("click", function () {
  let com = pilihanComputer();
  let play = "gunting";
  let hasil = getHasil(com, play);
  console.log("com" + com);
  console.log("play" + play);
  console.log(hasil);

  const imgcom = document.getElementById("com");
  imgcom.setAttribute("src", com + ".jpg");
  const thasil = document.getElementById("hasil");
  thasil.innerHTML = hasil;
});

const pilbatu = document.getElementById("batu");
pilbatu.addEventListener("click", function () {
  let com = pilihanComputer();
  let play = "batu";
  let hasil = getHasil(com, play);
  console.log("com" + com);
  console.log("play" + play);
  console.log(hasil);

  const imgcom = document.getElementById("com");
  imgcom.setAttribute("src", com + ".jpg");
  const thasil = document.getElementById("hasil");
  thasil.innerHTML = hasil;
});
