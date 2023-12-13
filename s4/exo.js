function calculer() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;

  //validation des inputs
  // test if num1 et num2 vides
  // test if num1 !isNaN et nume !isNaN
  // test if num2==0 lorsque operation=="/"

  console.log(isNaN(num1)); // num1 = 5 -> false l num1 = "hhh" -> true

  if(document.getElementById("num1").value == ""){
    alert("numero 1 est vide!")
  }else if(document.getElementById("num2").value == ""){
    alert("numero 2 est vide!")
  }else if(isNaN(num1)){
    alert("numero 1 n'est un nombre!")
  }
  else if(isNaN(num2)){
    alert("numero 2 n'est un nombre!")
  }
  else if(num2== 0 && operation == "/"){
    alert("attention division par 0")
  }
  else{

    let resultat = 0;
 
    switch (operation) {
      case "+":
        resultat = num1 + num2;
        break;
      case "-":
        resultat = num1 - num2;
        break;
      case "*":
        resultat = num1 * num2;
        break;
      case "/":
        resultat = num1 / num2;
        break;
      default:
          resultat = "Vous devez saisir l'une des operations suivantes: + - * /";
        break;
    }
  
    document.getElementById("resultat").innerHTML = resultat;
  }


}
