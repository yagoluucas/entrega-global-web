'use client'
import Link from 'next/link'
import './style.css'
import { useEffect, useState } from 'react'
import {enviarDoacao} from './funcoes'
import { emailRegex, telefoneRegex, validaCampoEmailTelefone, validaCampoNumero, validaCampoTexto } from '@/utils'
import { parse } from 'next/dist/build/swc'


export default function FormularioDoacao() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [valor, setValor] = useState('')
    const [desativado, setDesativado] = useState(true)

    useEffect(() => {
        if (nome.length >= 3 && emailRegex.test(email) && parseFloat(valor) >= 1){
            setDesativado(false)
        }else {
            setDesativado(true)
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
            case "telefone":
                setTelefone(e.target.value)
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
                    <input onKeyDown={(e) => {validaCampoTexto(e)}} onKeyUp={(e) => {colocaValor(e, "nome")}} type="text" id="nome" name="nome" placeholder="Nome completo*" required />

                    <label htmlFor="email">Email:</label>
                    <input onKeyDown={(e) => {validaCampoEmailTelefone(e, emailRegex)}} onKeyUp={(e) => {colocaValor(e, "email")}} type="email" id="email" placeholder="Email*" name="email" required />

                    <label htmlFor="telefone">Telefone:</label>
                    <input onKeyUp={(e) => {validaCampoEmailTelefone(e, telefoneRegex)}} onChange={(e) => {colocaValor(e, "telefone")}} type="tel" id="telefone" placeholder="Telefone" name="telefone" />

                    <label htmlFor="valor">Valor em reais:</label>
                    <input onChange={(e) => {validaCampoNumero(e)}} onClick={(e) => {colocaValor(e, "valor")}} onKeyUp={(e) => {colocaValor(e, "valor")}} type="number" min={1} placeholder="R$00,00" id="valor" name="valor" required />

                </form>
                <button onClick={() => {enviarDoacao(nome, email, telefone, valor)}} disabled={desativado}>Doar</button>
            </div>
            <p>Ao continuar, você concorda com os <Link href={'/termos'}>Termos de Uso</Link></p>
        </section>
    )
}