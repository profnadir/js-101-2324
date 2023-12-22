/* let stagiaire1 = {
    nom : "john",
    prenom : "doe",

    ecrire(){

    }
} */

/* function + constructeur */

/* class Stagiaire { } */

/* let stagiaire2 = new Stagiaire("jone","doe"); */

/* . Manipulation des objets natifs */

/* les tableaux : Array */

/* let tab = new Array(); */
/* let tab = [];

console.log(tab);
console.log(tab.length); */

/* let notes = new Array(17,15,18); */


/* let notes2 = new Array(3);
console.log(notes2)
console.log(notes2.length)

let tab4 = [15,17,false,"hi"]
console.log(tab4); */

/* let notes = [17,15,18,14,13,17,15]

console.log(notes);

notes.push(10);
notes.unshift(20);
notes.pop();
notes.pop();
notes.shift();
notes.shift(); */

/* notes.splice(2,1); // delete */
/* notes.splice(2,0,30);

notes[2] = 15 */

/* console.log(notes.includes(140)); */
/* console.log(typeof notes);
console.log(typeof notes.join()); */

/* console.log(notes);
console.log(notes.join(' ')); */

let notes  = [14,15,18,13,12];

let sum = 0;
for(let i =0; i< notes.length ; i++){
    sum = sum + notes[i];
}
let moy = sum/notes.length
console.log(moy);
let max = notes[0];
for(let i =0; i< notes.length ; i++){
    if(notes[i] > max){
        max = notes[i];
    }
}
console.log(max);

let min = notes[0];
for(let i =0; i< notes.length ; i++){
    if(notes[i] < min){
        min = notes[i];
    }
}
console.log(min);
console.log(notes.indexOf(min));




































/* for(let i = 0 ; i< notes.length ; i++){
    console.log(notes[i]);
} */

/* for(let note of notes){
    console.log(note);
} */

/* notes.indexOf(18); */

/* notes.forEach(
    (element) => {
        if(element>16){
            console.log('hi')
        }
        console.log(element);
    }
); */


/* console.log(notes)
console.log(notes.length) 
console.log(notes[2]);

console.log(notes.indexOf(17,3)) */

