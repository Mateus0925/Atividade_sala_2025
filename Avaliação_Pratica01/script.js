let identficacao = 1;

let media_pecas_homens = 0;

let media_pecas_mulheres = 0;

let meta = 0;

let folha_pagamento = 0;

let peca = 0;

let aumento = 0;

let salario_mininmo = 1500;

let maior_salario = 0;

function sexo (valores){
    if (valores % 2 == 0 & valores > 0) {
            media_pecas_mulheres = Math.floor(meta/7)
            return `O sexo do funcionário é Feminino;`;
        }
        else if (valores % 2 !== 0 & valores > 0) {
            media_pecas_homens = Math.floor(meta / 8)
            return `O sexo do funcionário é Masculino;`;
        }
}

while(identficacao>=1){
    identficacao = parseFloat(prompt("Qual é o número de identficação do funcionário?"));
    if(identficacao > 15){
        alert(`Funcinário não cadastrado, por favor, tente novamente`);
        continue
    }
    peca = parseFloat(prompt("Quantas peças o funcionário ",identficacao, " fabricou?"));;
    if(peca<=20){
        folha_pagamento+= 1500;
        meta += peca;
        alert(`${sexo(identficacao)};\nO funcionario ${identficacao} receberá R$${salario_mininmo};\nO total da folha de pagamento atual da fábrica é: ${folha_pagamento}; \n O número total de peças fabricadas: ${meta};\n A média de peças fabricadas pelos homens: ${media_pecas_homens};\nA média de peças fabricadas pelas mulheres: ${media_pecas_mulheres}.`);
        continue
    }
    if(peca<=30){
        meta += peca;
        aumento = (peca-20)*0.03;
        salario_mininmo = 1500 +(1500*aumento);
        folha_pagamento+= salario_mininmo;
        alert(`${sexo(identficacao)};\nO funcionario ${identficacao} receberá R${salario_mininmo};\nO total da folha de pagamento atual da fábrica é: ${folha_pagamento}; \n O número total de peças fabricadas: ${meta};\n A média de peças fabricadas pelos homens: ${media_pecas_homens};\nA média de peças fabricadas pelas mulheres: ${media_pecas_mulheres}.`);
        continue
    }
    if(peca>30){
        meta += peca;
        aumento = (peca-20)*0.05;
        salario_mininmo = 1500 +(1500*aumento);
        folha_pagamento+= salario_mininmo;
        alert(`${sexo(identficacao)};\nO funcionario ${identficacao} receberá R$${salario_mininmo};\nO total da folha de pagamento atual da fábrica é: ${folha_pagamento}; \n O número total de peças fabricadas: ${meta};\n A média de peças fabricadas pelos homens: ${media_pecas_homens};\nA média de peças fabricadas pelas mulheres: ${media_pecas_mulheres}.`);
        continue
    }
    if(salario_mininmo > maior_salario){
        maior_salario = salario_mininmo;
        alert(`O maior salário do trabalhador foi: ${maior_salario}.`)
        continue
    }
}