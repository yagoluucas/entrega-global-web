'use client'
import { useEffect, useState } from "react"
import { validaCampoTexto } from "@/utils"

export default function RegistrarDenuncia() {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [desativado, setDesativado] = useState(true)

    function setaValorCampo(e: any, tipo: string) {
        if (tipo == 'titulo') {
            setTitulo(e.target.value)
        } else {
            setDescricao(e.target.value)
        }
    }

    useEffect(() => {
        if (titulo.length >= 3 && descricao.length >= 15) {
            setDesativado(false)
        } else {
            setDesativado(true)
        }    
    }, [titulo, descricao])

    return (
        <section>
            <h1>Registrar Denúncia</h1>
            <p>Registre aqui a sua denúncia</p>
            <form>
                <div>
                    <label onKeyDown={(e) => {validaCampoTexto(e)}} htmlFor="titulo">Titulo da denuncia</label>
                    <input onChange={(e) => {setaValorCampo(e, "titulo")}} type="text" placeholder="titulo" name="titulo" id="titulo"/>
                </div>
                <textarea onChange={(e) => {setaValorCampo(e, "descricao")}} maxLength={200} minLength={15} placeholder="Descrição"></textarea>
            </form>
            <button disabled={desativado}>Enviar</button>
        </section>
    )
}