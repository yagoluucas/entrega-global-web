import { mostrarResultado } from "@/utils"
function construirDenuncia(titulo: string, local: string, descricao: string) {
    return {
        tituloDenuncia: titulo,
        descricaoDenuncia: descricao,
        localDenuncia: local
    }
}

async function salvarDenuncia(titulo: string, local: string, descricao: string) {
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
        mostrarResultado('/sinal-certo.webp', 'Sucesso', 'Denuncia enviada com sucesso', 'sucesso', 'denuncia', 3000)
    } catch (error) {
        console.log(error)
    }
}

export { salvarDenuncia } 