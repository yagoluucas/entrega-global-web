export const emailRegex: RegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
export const telefoneRegex: RegExp = /^\d{11}$/;
const teclasNavegacao = ['Tab', 'Enter']

export function validaCampoTexto(e: any) {
    if (!teclasNavegacao.includes(e.key)) {
        if ((e.target.value.length < 3 || e.target.value.replace(/ /g, '') === '')) {
            setarCampoInvalido(e.target)
        } else {
            retirarCampoInvalido(e.target)
        }
    }
}

export function validaCampoEmailTelefone(e: any, regex: RegExp) {
    if (!teclasNavegacao.includes(e.key)) {
        if(!regex.test(e.target.value)) {
            setarCampoInvalido(e.target)
        } else {
            retirarCampoInvalido(e.target)
        }
    }
}

export function validaCampoNumero (e: any) {
    if (e.target.value === '') {
        setarCampoInvalido(e.target)
    } else {
        const valor = parseFloat(e.target.value)
        if (valor >=1) {
            retirarCampoInvalido(e.target)           
        } else {
            setarCampoInvalido(e.target)
        }
    }    
    
}

function criarImagemResultado(src:string, alt:string) {
    const img = document.createElement('img')
    img.classList.add('resultado--imagem')
    img.src = src
    img.alt = alt
    return img
}

function criarParagrafoResultado(textoParagrafo:string) {
    const p = document.createElement('p')
    p.classList.add('resultado--texto')
    p.innerHTML = textoParagrafo
    return p
}

function criarImgFecharResultado() {
    const imgFechar = document.createElement('img')
    imgFechar.classList.add('icone-fechar')
    imgFechar.src = '/fechar.webp'
    imgFechar.alt = 'Fechar'
    imgFechar.addEventListener('click', fecharResultado)
    return imgFechar
}

function criarDivResultado(src:string, alt:string, textoParagrafo:string, classeResultado:string, flag: string) {
    const imgMeio = criarImagemResultado(src, alt)
    const paragrafo = criarParagrafoResultado(textoParagrafo)
    const div = document.createElement('div')
    div.append(flag == "doacao" ? criarImgFecharResultado() : "", imgMeio, paragrafo)
    div.classList.add('resultado')
    div.classList.add(classeResultado)
    return div
}

function fecharResultado(e: any) {
    const resultado = e.target.parentElement
    resultado.remove()
}

export function mostrarResultado(src:string, alt:string, textoParagrafo:string, classeResultado:string, flag: string, timer: number) {
    const divResultado = criarDivResultado(src, alt, textoParagrafo, classeResultado, flag)
    const main = document.querySelector('main')
    main?.appendChild(divResultado)
    if(flag != "doacao") {
        setTimeout(() => {
            divResultado.remove()
        }, timer)
    } 
}    

function setarCampoInvalido(elemento: any) {
    elemento.classList.add('invalido')
    elemento.classList.remove('valido')
    elemento.setAttribute('aria-invalid', 'true')
}

function retirarCampoInvalido(elemento: any) {
    elemento.classList.remove('invalido')
    elemento.classList.add('valido')
    elemento.setAttribute('aria-invalid', 'false')
}