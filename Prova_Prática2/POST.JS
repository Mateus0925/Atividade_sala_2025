const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const novoUsuario = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com'
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoUsuario)
})
    .then(response => response.json())
    .then(data => {
        console.log('Usuário criado:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
