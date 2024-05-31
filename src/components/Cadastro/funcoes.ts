function construirCadastro(nome:string, email:string, senha:string) {
    return {
        "nome": nome,
        "email": email,
        "senha": senha
    }
}    

async function enviarCadastro(nome:string, email:string, senha:string) {
    const cadastro = construirCadastro(nome, email, senha)
    console.log(cadastro)
}

export { enviarCadastro }