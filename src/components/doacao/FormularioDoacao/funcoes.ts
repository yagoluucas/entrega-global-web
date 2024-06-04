async function enviarDoacao(valor: string) {
    try {
        const nomeUsuario = JSON.parse(localStorage.getItem('usuario')!)
        const response = await fetch(`http://localhost:8080/doacao?nome=${nomeUsuario}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({valor})
        })
        const res = await response.text()
        console.log(res)
    }catch(error) {
        console.log(error)
    }
}

export { enviarDoacao }

