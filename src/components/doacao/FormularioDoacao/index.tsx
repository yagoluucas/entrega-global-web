'use client'
import Link from 'next/link'
import './style.css'
import { useEffect, useState } from 'react'
import {enviarDoacao} from './funcoes'


export default function FormularioDoacao() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [valor, setValor] = useState(1)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (nome.length >= 3 || email.length >= 3 || valor == 0) {
            setDisabled(false)
        }else {
            setDisabled(true)
        }
    }, [nome, email, valor])


    function colocaValor(e:any, tipo:string) {
        switch(tipo) {
            case "nome":
                setNome(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            default:
                setValor(e.target.value)        
        }
    }

    return (
        <section className="formulario--doacao">
            <h1>Você está doando para campanha <span>VivaMar</span>, da organização <span>Mr.Turtle</span></h1>
            <div>
                <form>
                    <label htmlFor="nome">Nome:</label>
                    <input onKeyUp={(e) => {colocaValor(e, "nome")}} type="text" id="nome" name="nome" placeholder="Nome completo*" required />
                    <label htmlFor="email">Email:</label>
                    <input onKeyUp={(e) => {colocaValor(e, "email")}} type="email" id="email" placeholder="Email*" name="email" required />
                    <label htmlFor="valor">Valor em reais:</label>
                    <input onClick={(e) => {colocaValor(e, "valor")}} onKeyUp={(e) => {colocaValor(e, "valor")}} type="number" min={1} placeholder="R$00,00" id="valor" name="valor" required />
                </form>
                <button onClick={() => {enviarDoacao(nome, email, valor)}} disabled={disabled}>Doar</button>
            </div>
            <p>Ao continuar, você concorda com os <Link href={'/termos'}>Termos de Uso</Link></p>
        </section>
    )
}