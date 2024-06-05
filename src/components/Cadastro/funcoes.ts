import {mostrarResultado} from '@/utils'
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
        mostrarResultado(res == "Sucesso ao adicionar usuario" ? '/sinal-certo.webp' : '/sinal-errado.webp' ,'sinal resposta', res, res == "Sucesso ao adicionar usuario" ? 'sucesso' : 'falha', 'cadastro', 3500)
    } catch (error) {
        mostrarResultado('/sinal-errado.webp','sinal resposta', 'Erro. Tenta novamente mais tarde', 'falha', 'cadastro', 3000)
    }
}

export { enviarCadastro }