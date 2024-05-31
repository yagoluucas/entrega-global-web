import { InfoDoacaoProps } from "./interface";

function construirObjeto(nome: string, email:string, telefone:string, valor:string) {
    return {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "valor": valor
    }
}

async function enviarDoacao(nome: string, email:string, telefone:string, valor:string) {
    const doacao = construirObjeto(nome, email, telefone, valor)
    console.log(doacao)
}

export { enviarDoacao }