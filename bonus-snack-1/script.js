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


const bikesDataTable = document.getElementById('bikes-data-table');


const bikesDataTableBody = generateBodyOfTableFromData(bikesData, bikesDataTable);
bikesDataTable.append(bikesDataTableBody);


const lowestWeightBike = getRowWithLowestValue(bikesDataTable, 'peso');
const toDisplay = document.getElementById('lowest-weight-bike');


toDisplay.innerHTML = `<b>La bici che pesa di meno è:</b> ${lowestWeightBike}kg`;





function getRowWithLowestValue(table, valueName) {
  const headers = table.querySelectorAll('thead th');
  let valueInTableIndex = -1;

  headers.forEach((head, i) => {
    if (head.textContent.toLowerCase() === valueName.toLowerCase()) valueInTableIndex = i;
  });

  if (valueInTableIndex === -1) {
    throw new Error(`"${valueName}" Non è presente nella tabella.`);
  };

  const rows = table.querySelectorAll('tbody tr');
  let lowestValueRow;
  let lowestValue = Infinity;

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells[valueInTableIndex]) {
      const value = Number(cells[valueInTableIndex].textContent);
      if (!isNaN(value) && value < lowestValue) {
        lowestValue = value;
        lowestValueRow = row;
      };
    };
  });

  if (lowestValueRow) {
    return Array.from(lowestValueRow.querySelectorAll('td')).map(cell => cell.textContent.trim()).join(', ');
  } else {
    throw new Error('Non è stato possibile trovare il valore più basso.');
  };
};


function generateBodyOfTableFromData(dataArr) {
  const tableBody = document.createElement('tbody');

  dataArr.forEach(item => {
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = Object.values(item)
      .map(val => `<td>${val}</td>`)
      .join('');
    
      tableBody.append(newRow);
  });

  return tableBody;
};