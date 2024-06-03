
function construirUsuario(nome: string, senha: string) {
    return {
        "nome": nome,
        "senha": senha
    }
}

async function enviarLogin(nome: string, senha: string) {
    try {
        const usuario = construirUsuario(nome, senha)
        const response = await fetch(`http://localhost:8080/usuario/login?nome=${nome}&senha=${senha}`, {
            method: 'GET',
        })
        const res = await response.text()
        if (res == "Usuário logado" && typeof window!== 'undefined') {
            localStorage.setItem('usuario', JSON.stringify(usuario.nome))
            return res
        }
        return res
    }catch (error) {
        return error
    }
}

export { enviarLogin }
