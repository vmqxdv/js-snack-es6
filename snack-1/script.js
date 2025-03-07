/*

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

const bikesData = [
  { name: 'Pinarello Dogma F', weight: 6.8 },
  { name: 'Specialized Tarmac SL7', weight: 6.7 },
  { name: 'Cannondale SuperSix EVO', weight: 6.9 },
  { name: 'Trek Emonda SLR', weight: 6.6 },
  { name: 'BMC Teammachine SLR01', weight: 6.8 },
  { name: 'Wilier Zero SLR', weight: 6.5 },
  { name: 'Cervélo R5', weight: 6.7 },
];


const lowestWeightBike = getLowestWeight(bikesData);

const toDisplay = document.getElementById('lowest-weight-bike');
toDisplay.innerHTML = lowestWeightBike;




function getLowestWeight(arr) {
  let lowestWeightBike = { name: '', weight: Infinity };

  arr.forEach(bike => {
    if (bike.weight < lowestWeightBike.weight) lowestWeightBike = bike;
  });

  return `<b>La bici con il peso minore:</b> ${lowestWeightBike.name}, ${lowestWeightBike.weight}kg`;
};