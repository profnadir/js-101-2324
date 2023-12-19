/* function sayHi(){
    //console.log('hi');
    return "hi";
}

let a = 5;

let b = () => console.log('hi from b')

console.log(typeof(a));
console.log(typeof(b));

b()

alert(sayHi());
console.log(sayHi());
document.write(sayHi()); */


/* function manger(){
    console.log('manger');
}



chien.manger(); */

/* • Création d’objet */

/* const tajine1 = {
    pro1 : valeur,
    method(para1) {
        //code ici
    }
} */

const salle1 = {

    nbTables : 25,
    solde: 5000,
    type : "informatique",
    isOuvert : false,

    ouvrirLaPorte(){
        console.log("la porte 1 est ouverte");
        this.isOuvert = true;
    },

    fermerLaPorte(){
        console.log("la porte 1 est fermee");
        this.isOuvert = false;
    }
}

const salle2 = {

    nbTables : 13,
    solde: 100,
    type : "infographie",
    isOuvert : false,

    ouvrirLaPorte(){
        console.log("la porte 2 est ouverte");
        this.isOuvert = true;
    },

    fermerLaPorte(){
        console.log("la porte 2 est fermee");
        this.isOuvert = false;
    }
}

// NOOOOOOOOO //
/* salle1.solde = 20;

console.log(salle1.nbTables);

console.log(salle1.isOuvert);

salle1.ouvrirLaPorte();
console.log(salle1.isOuvert);

salle1.fermerLaPorte();

salle2.fermerLaPorte(); */

const stagiaire1 = {
    nom : "john",
    prenom : "doe",
    groupe : "dev101",
    ispresent : true,

    passerExam(){
        console.log("Exam pass");
    }
}

for(key in stagiaire1){
    console.log(key)
}

stagiaire1.age = 21
console.log(stagiaire1.age);

console.log(stagiaire1.nom);

delete stagiaire1.ispresent;
console.log(stagiaire1.ispresent);

function StagiaireOLD(nomI, prenomI, groupeI, ispresentI){
    this.nom = nomI;
    this.prenom = prenomI;
    this.groupe = groupeI;
    this.ispresent = ispresentI;

    this.passerExam = () =>{
        console.log("Exam pass");
    }
}

class StagiaireNEW{  
    constructor(nomI, prenomI, groupeI, ispresentI){
        this.nom = nomI;
        this.prenom = prenomI;
        this.groupe = groupeI;
        this.ispresent = ispresentI;
    }

    passerExam(){
        console.log("Exam pass");
    }
}

let stagiaire2 = new StagiaireOLD("jane","doe","dev102",false);
let stagiaire3 = new StagiaireNEW("james","doe","dev103",true);

console.log(stagiaire2.nom);
console.log(stagiaire2.ispresent);

console.log(stagiaire3.nom);
console.log(stagiaire3.groupe);
console.log(stagiaire3.ispresent);

/* • Manipulation d’objet */





/* • Manipulation des objets natifs
• Manipulation JSON   */