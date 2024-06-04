'use client'
import { validaCampoNumero } from '@/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { enviarDoacao } from './funcoes'
import './style.css'


export default function FormularioDoacao() {


    const [valor, setValor] = useState('')
    const [desativado, setDesativado] = useState(true)

    useEffect(() => {
        if (parseFloat(valor) >= 1){
            setDesativado(false)
        }else {
            setDesativado(true)
        }
    }, [valor])



    function colocaValor(e:any) {
        setValor(e.target.value) 
    }

    return (
        <section className="formulario--doacao">
            <h1>Você está doando para campanha <span>VivaMar</span>, da organização <span>Mr.Turtle</span></h1>
            <div>
                <form>

                    <label htmlFor="valor">Valor em reais:</label>
                    <input onChange={(e) => {validaCampoNumero(e)}} onClick={(e) => {colocaValor(e)}} onKeyUp={(e) => {colocaValor(e)}} type="number" min={1} placeholder="R$00,00" id="valor" name="valor" required />

                </form>
                <button onClick={() => {enviarDoacao(valor)}} disabled={desativado}>Doar</button>
            </div>
            <p>Ao continuar, você concorda com os <Link href={'/termos'}>Termos de Uso</Link></p>
        </section>
    )
}
