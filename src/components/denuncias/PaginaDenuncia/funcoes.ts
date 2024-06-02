async function lerTodasAsDenuncias(setDenuncias: Function) {
    try{
        const response = await fetch('http://localhost:8080/denuncia', {
            method: "GET"
        })
        const res = await response.json()
        setDenuncias(res)
    }catch(error) {
        console.log(error)
    }
}

async function lerMinhasDenuncias(setDenuncias: any) {
    try{
        const response = await fetch(`http://localhost:8080/denuncia/${JSON.parse(localStorage.getItem('usuario')!)}`, {
            method: "GET"
        })
        const res = await response.json()
        console.log(res)
        setDenuncias(res)
    }catch(error) {
        console.log(error)
    }
}

function todasDenuncias(setFazerDenuncia: Function, setTitulo: Function, setDenuncias: Function ) {
    setFazerDenuncia(false)
    setTitulo("Todas denuncias")
    lerTodasAsDenuncias(setDenuncias)
}

function minhasDenuncias(setFazerDenuncia: Function, setTitulo: Function, setDenuncias: Function) {
    setFazerDenuncia(false)
    setTitulo("Minhas denuncias")
    lerMinhasDenuncias(setDenuncias)
}

function novaDenuncia(setFazerDenuncia: Function, setTitulo: Function) {
    setFazerDenuncia(true)
    setTitulo("Nova denuncia")
}

function fecharMenu(navMenu: any) {
    navMenu.current?.classList.add('esconder')
    navMenu.current?.classList.remove('mostrar')
}

function mostrarMenu(navMenu:any) {
    navMenu.current?.classList.add('mostrar')
    navMenu.current?.classList.remove('esconder')
}

export { todasDenuncias, minhasDenuncias, novaDenuncia, fecharMenu, mostrarMenu, lerTodasAsDenuncias }

