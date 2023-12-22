// Rappel 

// Tableaux => Objet
/* 
const tab = [14,15,17]; */

// string "text" => String

const msg = "hi dev 101 and dev 102";

/* console.log(msg.charAt(5)); */
/* console.log(msg.endsWith("101")); 
console.log(msg.startsWith("hi"));  */
/* console.log(msg.includes('y')); */

//console.log(msg.length);
/* console.log(msg.toUpperCase()); */

/* console.log(msg);
console.log(msg.trim()); */ 

/* 
let cin = "T 171717"
console.log(cin.includes(" "));  */

/* console.log(msg.split(" ")); */

// string => array : split
// array => string : join

 function diviser() {

    window.open("https://www.ofppt.ma/")
    /* let fullname = document.getElementById('fullName').value;
    console.log(fullname.split('.')[0]);
    console.log(fullname.split('.')[1]);
    document.getElementById("fname").value = fullname.split('.')[0];
    document.getElementById("lname").value = fullname.split('.')[1]; */
}
 

// OBJET DATE

/* const d = new Date();

const days = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi']

console.log(d.getHours());
console.log(d.getMinutes());
console.log(days[d.getDay()]);
console.log(d.getSeconds());
 console.log(d.getFullYear()); */

// OBJET MATH



/* console.log(Math.max(...[14,17,15,19])); */


/* max = Math.max(...[14,15,18,13,12]);
min = Math.min([14,15,18,13,12]); */
/* 
console.log(min,max); */
/* console.log(Math.floor(Math.random()*10)); */ // 0 et 1

/* window.alert('hi');

window.prompt('hi'); */

/* if(confirm("delete ?")){
    console.log('entrez');
}else{
    console.log('quittez');
}
 */

/* prompt("entrez votre age ?","20") */

function sayHi() {
    console.log("hi dev101")
}


let myinterval = setInterval(sayHi,1000)

clearInterval(myinterval)

function montre(){
    let d = new Date();
    document.getElementById("h").innerHTML = d.getHours()
    document.getElementById("m").innerHTML = d.getMinutes()
    document.getElementById("s").innerHTML = d.getSeconds()
}

setInterval(montre,1000)


