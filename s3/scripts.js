function sum() {
    let a = Number(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);

    let c= a + b;

    document.getElementById('somme').innerHTML = c;

}