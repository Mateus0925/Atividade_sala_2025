const url = 'https://dummyjson.com/products';

async function chamarAPI(){
    fetch(url) //fetch é a função para utilizar para interagir com a API

    const resp = await fetch(url); //constante para armazenar a resposta

    if(resp.status === 200){
        const obj = await resp.json()
        console.log(resp)
    }
}
chamarAPI();