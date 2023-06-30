/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  let simbolos = ["diamante", "picas", "corazon", "trebol"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  cardGenerator(numeros, simbolos);
  document.querySelector(".nuevacarta").addEventListener("click", () => {
    document
      .querySelector(".card")
      .classList.remove("diamante", "picas", "corazon", "trebol");
    cardGenerator(numeros, simbolos);
  });
  setInterval(() => {
    document
      .querySelector(".card")
      .classList.remove("diamante", "picas", "corazon", "trebol");
    cardGenerator(numeros, simbolos);
  }, 10000);
};

function cardGenerator(numeros, simbolos) {
  let card = document.querySelector(".card");
  let randomSimbol = generateRandomSimbol(simbolos);
  if (randomSimbol === "corazon" || randomSimbol === "diamante") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }
  card.classList.add(randomSimbol);
  card.innerHTML = generateRandomNumero(numeros);
}
let generateRandomNumero = numeros => {
  let indexNumero = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumero];
};
let generateRandomSimbol = simbolos => {
  let indexSimbol = Math.floor(Math.random() * simbolos.length);
  return simbolos[indexSimbol];
};
