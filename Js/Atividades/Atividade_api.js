const url = "https://api.chucknorris.io/jokes/random";


async function buscarFrase() {
    try{
        const resposta = await fetch(url);//faz a requisição e armazena 

        //verificação

        if(!resposta.ok){
            throw new erro(`Erro na requisição: ${resposta.ok}`);

            
        }

        const dados = await resposta.json();

        let texto = document.getElementById("frase");

        const deck_id = dados.deck_id;

        const respostaCarta = await fetch(url);

        if(!respostaCarta.ok){

            throw new erro(`Erro na requisição: ${respostaCarta.status}`);

        }
        const obj = await respostaCarta.json();
        texto.innerHTML = obj.value
    }
    catch(erro){
        console.log(erro)
        alert("Ocorreu um erro ao buscar a frase.")
    }
}
buscarFrase()