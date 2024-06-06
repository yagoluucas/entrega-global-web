import { mostrarResultado } from "@/utils";
function construirCadastro(nome: string, email: string, senha: string) {
    return {
        nome: nome,
        email: email,
        senha: senha,
    };
}

async function enviarCadastro(nome: string,email: string,senha: string,setTextoBtn: Function) {
    setTextoBtn("Aguarde...");
    try {
        const cadastro = construirCadastro(nome, email, senha);
        const response = await fetch("http://localhost:8080/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cadastro),
        });
        
        const res = await response.text();
        if (res == "Sucesso ao adicionar usuário") {
            mostrarResultado(
                "/sinal-certo.webp",
                "sinal resposta",
                res.concat("<br>Retorne para página de login"),
                "sucesso",
                "cadastro",
                3000
            );
        } else {
            mostrarResultado(
                "/sinal-errado.webp",
                "sinal resposta",
                res,
                "falha",
                "cadastro",
                3000
            );
        }
    } catch (error) {
        mostrarResultado(
            "/sinal-errado.webp",
            "sinal resposta",
            "Erro. Tenta novamente mais tarde",
            "falha",
            "cadastro",
            3000
        );
    }
    setTextoBtn("Cadastrar");
}

export { enviarCadastro };
