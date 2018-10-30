const Chance = require('chance').Chance;
const fs = require('fs');

var chance = new Chance();
var eleves = new Set();
while (eleves.size < 100) {
    eleve = {};
    eleve.firstname = chance.first();
    eleve.last = chance.last();
    eleve.age = chance.age({type: 'teen'});
    eleve.addresse = chance.address();
    eleve.moyenne = chance.floating({min: 0, max: 20, fixed: 2});

    eleves.add(eleve);
}


fs.appendFile('eleve.json', JSON.stringify(Array.from(eleves),2), () => console.log('Wrtiting completed'));