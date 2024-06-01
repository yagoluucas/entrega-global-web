'use client'
import { useEffect, useState } from "react"
import { validaCampoTexto } from "@/utils"
import './style.css'
import BotaoPaginaDenuncia from "../BotaoPaginaDenuncia"
import { salvarDenuncia } from "./funcoes"

export default function RegistrarDenuncia() {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [local, setLocal] = useState('')
    const [desativado, setDesativado] = useState(true)

    function setaValorCampo(e: any, tipo: string) {
        switch (tipo) {
            case "titulo":
                setTitulo(e.target.value)
                break
            case "descricao":
                setDescricao(e.target.value)
                break
            default:
                setLocal(e.target.value)
        }
    }

    useEffect(() => {
        console.log(titulo.length >= 3 && descricao.length >= 3)
        if (titulo.length >= 3 && descricao.length >= 3 && local.length >= 3) {
            setDesativado(false)
        } else {
            setDesativado(true)
        }
    }, [titulo, descricao, local])

    return (
        <section className="secao--registrar--denuncia">
            <h2>Registrar Denúncia</h2>
            <form>
                <div>

                    <label htmlFor="titulo">Titulo da denuncia</label>
                    <input onKeyUp={(e) => { validaCampoTexto(e) }} onChange={(e) => { setaValorCampo(e, "titulo") }} type="text" placeholder="Titulo" name="titulo" id="titulo" />

                    <label htmlFor="local">Local:</label>
                    <input onKeyUp={(e) => { validaCampoTexto(e) }} onChange={(e) => {setaValorCampo(e, "local")}} type="text" placeholder="Ex: Praia Grande" name="local" id="local" />

                </div>

                <textarea onKeyUp={(e) => { validaCampoTexto(e) }} onChange={(e) => { setaValorCampo(e, "descricao") }} maxLength={200} minLength={4} placeholder="Descrição"></textarea>
            </form>

            <BotaoPaginaDenuncia onClick={() => { salvarDenuncia(titulo, local, descricao) }} desabilitado={desativado} texto="Registrar Denuncia" />
        </section>
    )
}