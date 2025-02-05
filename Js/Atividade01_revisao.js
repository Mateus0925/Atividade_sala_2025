let number = parseFloat(prompt("Qual é o número que você quer saber a tabuada?"));

for(let i = 1; i<11; i++){
    let resultado = number *i;
    alert( `${number} X ${i} = ${resultado}`);
}

