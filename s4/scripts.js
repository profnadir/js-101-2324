let isActive = false;
let age = 25;
let note = 10;

/* si isActive == oui alors afficher ok
sinon afficher ko */

if(note > 10){
    console.log('ok');
}
else if(note < 10){
    console.log('ko');
}else{
    console.log('rachete')
}

let j = "me" // l m me j v s d

switch (j) {
    case "l":
        console.log("lundi");
        break;

    case "m":
        console.log("mardi");
        break;

    case "me":
        console.log("mercredi");
        break;

    case "j":
        console.log("jeudi");
        break;

    default:
        console.log('Vous devez choisir un code correct : l m me j v s d')
        break;
}

for(let i=0; i < 5; i=i+2){
    //console.log(i);
   /*  document.write('<h1>hi '+(i+1)+'</h1>'); */
}

let notes = [12,17,15,14,16,19,20];

/* for(let i = 0; i <= notes.length ;i++){
    console.log(notes[i]);
} */

let notes1 = { cc1:15, cc2:17, cc3:19, efm:13}
/* console.log(notes1['cc2']); */

for(let e in notes1){
    console.log( e + ":"+notes1[e]);
}


/* i = 0  ; 0 < 5 ; i=1 <h1>hi</h1>
i = 1 ; 1 < 5 ; i=2  <h1>hi</h1>
i = 2 ; 2 < 5 ; i=3  <h1>hi</h1>
i = 3 ; 3 < 5 ; i=4  <h1>hi</h1>
i = 4 ; 4 < 5 ; i=5  <h1>hi</h1>
i = 5 ; 5 < 5 ; break */

/* i = 0  ; 0 < 5 ; i=2 <h1>hi</h1>
i = 2 ; 2 < 5 ; i=4  <h1>hi</h1>
i = 4 ; 4 < 5 ; i=6  <h1>hi</h1>
i = 6 ; 6 < 5 ; breack */


for(let i=20 ; i>=0 ; i=i-2){
   // console.log(i)
}

function somme( a , b){
    let c = a + b;
    document.write(c);
}



alert(somme(40,7));// 4 7