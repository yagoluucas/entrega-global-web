function construirCadastro(nome: string, email: string, senha: string) {
    return {
        "nome": nome,
        "email": email,
        "senha": senha
    }
}

async function enviarCadastro(nome: string, email: string, senha: string) {
    try {
        const cadastro = construirCadastro(nome, email, senha)
        const response = await fetch('http://localhost:8080/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cadastro)
        })
        const res = await response.text()
        alert(res)
    } catch (error) {
        alert(error)
    }
}

export { enviarCadastro }