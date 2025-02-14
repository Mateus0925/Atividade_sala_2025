const url = 'https://jsonplaceholder.typicode.com/users/1';

fetch(url, {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('Usuário deletado com sucesso.');
        } else {
            throw new Error(`Erro ao deletar o usuário: ${response.statusText}`);
        }
    })
    .catch(function(){
        console.log("Erro de comunicação");
    });
    const obj= url