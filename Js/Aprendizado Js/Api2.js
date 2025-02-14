const resposta = fetch('https://jsonplaceholder.typicode.com/post')
.then (function(respostaData){
    return respostaData.json();
})
.then(function(jsonData){
    console.log(jsonData)
})
.catch(function(){
    console.log("Erro de comunicação");
});


