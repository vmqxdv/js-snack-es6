/*

Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, 
punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le 
altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle 
proprietà “punti” fatti e “falli subiti”.

Infine, creiamo un nuovo array i cui elementi
contengono solo nomi e falli subiti e stampiamo 
tutto in console.

*/

const teamsData = [
  { name: 'Juventus', points: 0, foulsSuffered: 0 },
  { name: 'Milan', points: 0, foulsSuffered: 0 },
  { name: 'Inter', points: 0, foulsSuffered: 0 },
  { name: 'Roma', points: 0, foulsSuffered: 0 },
  { name: 'Napoli', points: 0, foulsSuffered: 0 },
  { name: 'Lazio', points: 0, foulsSuffered: 0 },
  { name: 'Atalanta', points: 0, foulsSuffered: 0 },
  { name: 'Torino', points: 0, foulsSuffered: 0 },
  { name: 'Fiorentina', points: 0, foulsSuffered: 0 },
  { name: 'Bologna', points: 0, foulsSuffered: 0 }
];



teamsData.forEach(t => {
  t.points = getRandomNumber(0, 30);
  t.foulsSuffered = getRandomNumber(0, 20);
});

console.log(`Team con dati completi:\n`, teamsData);


const teamsFoulsSufferedData = [];

teamsData.forEach(t => {
  const { points, ...teamWithoutPoints } = t;

  teamsFoulsSufferedData.push(teamWithoutPoints);
});

console.log(`Team con solo i falli subiti:\n`, teamsFoulsSufferedData);




function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};