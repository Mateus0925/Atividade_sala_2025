const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2"; // Armazeno o endereço da APi

async function chamarAPI(){
    const resp = await fetch(url);
    if(resp.status === 200){
        const obj = await resp.json()
        console.log(obj)
    }
}
chamarAPI();
