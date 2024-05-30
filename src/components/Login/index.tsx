'use client'
import './style.css'
import { useState, useEffect } from 'react'
export default function LoginDiv() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [desativado, setDesativado] = useState(true)

    function colocaValor(e:any, tipo:string) {
        console.log(e.target.value)
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

    function enviarLogin() {
        console.log(usuario, senha)
    }
 
    return (
        <section className="login-container">
            <form className="login-form">
                <h1>Login</h1>
                <h2 className="subtitulo">Logar com a sua conta</h2>

                <div className="credenciais">
                    <input onKeyUp={(e) => {colocaValor(e, 'usuario')}} placeholder="Usuário" id="usuario" type="text" />
                    <input onKeyUp={(e) => {colocaValor(e, 'senha')}} placeholder="senha" name="senha" id="senha" type="password" />
                </div>              
            </form>
            <button onClick={enviarLogin} disabled={desativado}>Login</button>
        </section>
    )
}