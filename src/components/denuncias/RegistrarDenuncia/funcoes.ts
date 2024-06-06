import { mostrarResultado } from "@/utils"
function construirDenuncia(titulo: string, local: string, descricao: string) {
    return {
        tituloDenuncia: titulo,
        descricaoDenuncia: descricao,
        localDenuncia: local
    }
}

async function salvarDenuncia(titulo: string, local: string, descricao: string, setTextoBtn: Function) {
    setTextoBtn('Aguarde...')
    try {
        const denuncia = construirDenuncia(titulo, local, descricao)
        const response = await fetch(`http://localhost:8080/denuncia?usuario=${JSON.parse(localStorage.getItem('usuario')!)}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(denuncia)
        })
        const res = await response.text()
        if(res == "Denuncia inserida com sucesso") {
            mostrarResultado('/sinal-certo.webp', 'Sucesso', 'Denuncia enviada com sucesso', 'sucesso', 'denuncia', 3000)
        } else {
            mostrarResultado('/sinal-errado.webp', 'Falha', res, 'falha', 'denuncia', 3000)
        }
    } catch (error) {
        mostrarResultado('/sinal-errado.webp', 'Falha', 'Erro ao enviar denuncia', 'falha', 'denuncia', 3000)
    }
    setTextoBtn('Registrar Denuncia')
}

export { salvarDenuncia } 