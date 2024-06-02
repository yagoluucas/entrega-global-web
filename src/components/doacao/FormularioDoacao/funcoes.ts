
function construirObjeto(nome: string, email: string, telefone: string, valor: string) {
    return {
        nome,
        email,
        telefone,
        valor
    }
}

async function enviarDoacao(nome: string, email: string, telefone: string, valor: string) {
    try {
        const doacao = construirObjeto(nome, email, telefone, valor)
        const response = await fetch('http://localhost:8080/doacao', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doacao)
        })
        const res = await response.text()
        console.log(res)
    }catch(error) {
        console.log(error)
    }
}

export { enviarDoacao }