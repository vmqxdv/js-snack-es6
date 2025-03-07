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
  { name: 'Cervélo R5', weight: 6.7 },
  { name: 'Wilier Zero SLR', weight: 6.5 }
];


const bikesDataTable = document.getElementById('bikes-data-table');


const bikesDataTableFoot = document.createElement('tfoot');


const bikesDataTableBody = generateBodyOfTableFromData(bikesData, bikesDataTable);

bikesDataTable.append(bikesDataTableBody);

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