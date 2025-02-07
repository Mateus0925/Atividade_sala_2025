let number = parseFloat(prompt("Digite um número:"));

while(number > 1){
    var resultado = 0;
    if(number == 2){
        alert(`${resultado+1}`)
        break
    }
    if (number % 2 == 0 & number > 0) {
        resultado += number-2;
        number=resultado
        alert(`${resultado}`);
        continue
    }
    if (number / 2 != 0 & number > 0) {
        resultado += number-1;
        number= resultado
        alert(`${resultado}`);
        continue
    }
}