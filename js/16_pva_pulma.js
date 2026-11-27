function tarkistaPulma() {
  let vastaus = Number(document.getElementById("pulmaVastaus").value);
  let teksti = "";

  if (vastaus === 16) {
    teksti = "Oikea vastaus!";
  } else {
    teksti = "Väärä vastaus, kokeile uudestaan!";
  }

  document.getElementById("pulmaTulos").textContent = teksti;
}
