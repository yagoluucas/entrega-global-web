function construirUsuario(nome: string, senha:string) {
    return {
        "nome": nome,
        "senha": senha
    }
}

async function enviarLogin(nome:string, senha:string) {
    const usuario = construirUsuario(nome, senha)
    console.log(usuario)
}

export { enviarLogin }