// Data_generator
let myMessages =['Salut l\'ami(e)', 'Tu vas bien?', 'Je suis un admirateur des sciences humaines',' Je suis aussi un amateur du numérique','j\'espère que tu t\'y connais aussi en informatique', 'Je reve de rencontrer "Neil Degrace Tayson"'];
let someHobbies = ['je fais du sport', 'Je lis tout type de livre ouvert au monde réel', 'je suis un grand reveur']
let otherTricks = ['Les voyages à travers le monde, me tentent','Je suis un citoyen du monde', 'En vrai','je suis consmopolite']

// Function get_random

function get_random(){
    const generateRandom1 = Math.floor(Math.random() * myMessages.length);
    const generateRandom2 =  Math.floor(Math.random() * someHobbies.length);
    const generateRandom3 =  Math.floor(Math.random() * otherTricks.length); 
    const out = (`${myMessages[generateRandom1]}, ${someHobbies[generateRandom2]}, ${otherTricks[generateRandom3]}`)
   
    return out;
}
console.log(get_random());
