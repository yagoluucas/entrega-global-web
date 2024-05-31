import { InfoDoacaoProps } from "./interface";

function construirObjeto(nome: string, email:string, valor:string) {
    return {
        "nome": nome,
        "email": email,
        "valor": valor
    }
}

async function enviarDoacao(nome: string, email:string, valor:string) {
    const doacao = construirObjeto(nome, email, valor)
    console.log(doacao)
}

export { enviarDoacao }