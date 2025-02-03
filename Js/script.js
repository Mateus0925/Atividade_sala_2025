let taxa = parseFloat(prompt("Onde você mora? 1-Antares; 2-Barro Duro; 3-Bebedouro; 4-Benedito Bentes; 5-Centro; 6-Clima Bom; 7-Pajuçara; 8-Ponta Verde; 9-Jatiúca"));

if( taxa >9){
    alert("Tente novamente")
}
else{
switch (taxa) {
    case 1:
        alert("A taxa da entrega será de R$7,00")
    break
    case 2:
        alert("A taxa da entrega será de R$5,00")
    break
    case 3:
        alert("A taxa da entrega será de R$8,00")
    break
    case 4:
        alert("A taxa da entrega será de R$6,00")
    break

    case 5:
        alert("A taxa da entrega será de R$10,00")
    break
    case 6:
        alert("A taxa da entrega será de R$4,00")
    break
    default:
        alert("A taxa da entrega será de R$15,00")
}
}