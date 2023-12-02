/* let a = 10;
let b = 15;

if(a != b){
    console.log("a different de b");
} else{
    console.log("a egale a b")
} */

//let a = 5+ 3;
//console.log(a);
//window.alert(a) // alert == window.alert
//document.write("<h1>hi dev101 </h1>")

/* let pwd;
pwd = prompt("Entrez votre mot de passe : ");

if(pwd == "12345"){
    document.write("bonjour admin");
}
else{
    document.write("mot de passe incorrect");
} */

function log(){
    let pwd = document.getElementById('pass').value;
    let email = document.getElementById('email').value;

    if(email == "admin@gmail.com" && pwd == '12345')
    { 
        document.write('bonjour admin');
    }
    else{
        document.write('mot de  passe ou email incorrect');
    }
}