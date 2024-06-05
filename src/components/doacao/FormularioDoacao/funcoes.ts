import { mostrarResultado } from "@/utils"
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
        mostrarResultado(res, 'Sucesso', 'Por favor, escaneie o QR code acima para realizar o pagamento', 'sucesso', 'doacao', 0)
    }catch(error) {
        mostrarResultado('/sinal-errado.webp', 'Erro', 'Erro ao enviar doação', 'erro', 'doacao', 3000)
    }
}

export { enviarDoacao }

