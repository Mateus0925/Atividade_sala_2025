const apiUrlPut = 'https://jsonplaceholder.typicode.com/users/1'; // ID do usuário a ser atualizado

const usuarioAtualizado = {
    id: 1,
    name: 'John Smith',
    username: 'johnsmith',
    email: 'johnsmith@example.com'
};

fetch(apiUrlPut, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuarioAtualizado)
})
    .then(response => response.json())
    .then(data => {
        console.log('Usuário atualizado:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
