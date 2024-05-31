'use client'
import Link from 'next/link'
import './style.css'
import { useState, useEffect } from 'react'
import BotaoCadastro from '../BotaoCadastro'
import { validaCampoTexto } from "@/utils";
import { enviarLogin } from './funcoes'

export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [desativado, setDesativado] = useState(true)

    function colocaValor(e:any, tipo:string) {
        if (tipo == 'usuario') {
            setUsuario(e.target.value)
        } else {
            setSenha(e.target.value)
        }
    }

    useEffect(() => {
        if (usuario.length >= 3 && senha.length > 3) {
            setDesativado(false)
        } else {
            setDesativado(true)
        }
    }, [usuario, senha])
 
    return (
        <section className="login-container">
            <form className="login-form">
                <h1>Login</h1>
                <h2 className="subtitulo">Logar com a sua conta</h2>
                <div className="credenciais">
                    <input onKeyDown={(e) => {validaCampoTexto(e)}} onKeyUp={(e) => {colocaValor(e, 'usuario')}} placeholder="Usuário" id="usuario" type="text" />
                    <input onKeyDown={(e) => {validaCampoTexto(e)}} onKeyUp={(e) => {colocaValor(e, 'senha')}} placeholder="senha" name="senha" id="senha" type="password" />
                </div>              
            </form>
            <BotaoCadastro texto='Entrar' desativado={desativado} onClick={() => {enviarLogin(usuario, senha)}} />
            <span className='novo--usuario'>Novo por aqui ? faça o seu cadastro clicando <Link href={'/cadastro'}>aqui</Link></span>
        </section>
    )
}