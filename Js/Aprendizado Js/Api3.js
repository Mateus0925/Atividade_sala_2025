(async function(){
    try{
        const headers = {
            'content-Type' : 'application/json',
            'Test-Header' : 'Teste validado'
        };

        const init = {
            method: 'POST',
            headers: headers,
            body:JSON.stringify({
                title:'Teste de criação'
            })
        }
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1',
        init
        )
        const jsonData = await response.json();
        console.log(jsonData)
    }catch(e){
        console.log('Erro')
    }
})