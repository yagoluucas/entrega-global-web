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