let number = 1;

while (number != 0) {
    number = parseFloat(prompt("Digite um número:"))
    if (number % 2 == 0 & number > 0) {
        let resultado = number * 2;
        alert(`${resultado}`);
        continue
    }
    if (number / 2 != 0 & number > 0) {
        let resultado2 = number * 3;
        alert(`${resultado2}`);
        continue
    }
    if (number == 0 || number == undefined) {
        alert("O programa não poderá ser executado.");
        continue
    }
    if (number <= 0) {
        break
    }
}

