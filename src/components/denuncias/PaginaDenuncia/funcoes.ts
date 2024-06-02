function todasDenuncias(setFazerDenuncia: Function, setTitulo: Function, setDenuncias: Function ) {
    setFazerDenuncia(false)
    setTitulo("Todas denuncias")
}

function minhasDenuncias(setFazerDenuncia: Function, setTitulo: Function, setDenuncias: Function) {
    setFazerDenuncia(false)
    setTitulo("Minhas denuncias")
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

export { todasDenuncias, minhasDenuncias, novaDenuncia, fecharMenu, mostrarMenu }

