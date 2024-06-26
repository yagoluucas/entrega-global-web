'use client'
import Link from 'next/link'
import './style.css'
import { useRouter } from "next/navigation"
import { useState, useEffect } from 'react'
import BotaoCadastro from '../BotaoCadastro'
import { validaCampoTexto } from "@/utils";
import { enviarLogin } from './funcoes'
import {mostrarResultado} from '@/utils'

// componente responsável por renderizar o formulário de login
export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [desativado, setDesativado] = useState(true)
    const [textoBtn, setTextoBtn] = useState('Entrar')
    const rota = useRouter()

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


    async function logaUsuario(usuario: string, senha: string) {
        setTextoBtn('aguarde...')
        const resposta: any = await enviarLogin(usuario, senha)
        setTextoBtn('Entrar')
        if (resposta == "Usuário logado") {
            mostrarResultado('/sinal-certo.webp','sinal certo', 'Login efetuado com sucesso', 'sucesso', 'login', 3000)
            setTimeout(() => {
                rota.push(`/denuncias/${usuario}`)
            }, 3000)
            return
        } 
        
        mostrarResultado('/sinal-errado.webp','sinal errado', resposta, 'falha', 'login', 3000)
    }
 
    return (
        <section className="login-container">
            <form className="login-form">
                <h1>Login</h1>
                <h2 className="subtitulo">Entrar na sua conta</h2>
                <div className="credenciais">
                    <input onKeyDown={(e) => {validaCampoTexto(e)}} onKeyUp={(e) => {colocaValor(e, 'usuario')}} placeholder="Usuário" id="usuario" type="text" />
                    <input onKeyDown={(e) => {validaCampoTexto(e)}} onKeyUp={(e) => {colocaValor(e, 'senha')}} placeholder="senha" name="senha" id="senha" type="password" />
                </div>              
            </form>
            <BotaoCadastro texto={textoBtn} desativado={desativado} onClick={() => {logaUsuario(usuario, senha)}} />
            <span className='novo--usuario'>Novo por aqui ? faça o seu cadastro clicando <Link href={'/cadastro'}>aqui</Link></span>
        </section>
    )
}