
function construirUsuario(nome: string, senha:string) {
    return {
        "nome": nome,
        "senha": senha
    }
}

async function enviarLogin(nome:string, senha:string) {
    const usuario = construirUsuario(nome, senha)
    localStorage.setItem('usuario', JSON.stringify(usuario.nome))
    return true
}

export { enviarLogin }