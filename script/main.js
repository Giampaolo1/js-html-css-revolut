// DESCRIZIONE:
// RI-Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
// I dropdown però appaiono e scompaiono al click e non al rollover.
// Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta.
//
// NOTE:
// quindi l’ex base ha: sia l’interazione dei dropdown (però sul click),
// sia l’impaginazione e grafica uguali al sito;
// prima di buttarvi su altri bonus, il primo bonus è: completare la navbar anche in ottica
// responsive con relativo hamburger menù.


$( document ).ready(function() {

  $(".dropdown").click(function(){
    $(".dropdowncontent").toggle();
  })

  $(".dropdown2").click(function(){
    $(".dropdowncontent2").toggle();
  })

  // Invece di ripetere il codice, potrei dare active non active e add class remove class, tipo il carousel














});
