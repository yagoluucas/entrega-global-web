function construirDenuncia(titulo:string, local:string, descricao:string) {
    return {
        titulo,
        local,
        descricao,
        nomeUsuario: JSON.parse(localStorage.getItem('usuario')!)
    }
}

async function salvarDenuncia(titulo:string, local:string, descricao:string) {
    const denuncia = construirDenuncia(titulo, local, descricao)
    console.log(denuncia)
}



export { salvarDenuncia } 