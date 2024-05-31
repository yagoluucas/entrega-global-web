'use client'
import Link from "next/link";
import './style.css'
import BotaoCadastro from "../BotaoCadastro";
import { useEffect, useState } from "react";
import { enviarCadastro } from "./funcoes";
import { validaCampoEmailTelefone, validaCampoTexto,emailRegex } from "@/utils";

export default function CadastroSection() {

    const [desativado, setDesativado] = useState(true)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function setaValorCampo(e: any, tipo: string) {
        if (tipo == 'nome') {
            setNome(e.target.value)
        } else if (tipo == 'email') {
            setEmail(e.target.value)
        } else {
            setSenha(e.target.value)
        }
    }

    useEffect(() => {
        if (nome.length >= 3 && senha.length > 3 && emailRegex.test(email)) {
            setDesativado(false)
        } else {
            setDesativado(true)
        }
    }, [nome, email, senha])

    return (
        <section className="cadastro">
            <div>
                <h1>Crie a sua conta</h1>
                <h2>Crie sua conta para acessar e registrar denúncias</h2>
            </div>
            <form className="form--cadastro">
                <label htmlFor="nome">Nome:</label>
                <input onKeyDown={(e) => {validaCampoTexto(e)}} onKeyUp={(e) => {setaValorCampo(e, "nome")}} type="text" id="nome" name="nome" placeholder="Nome completo*" required />
                <label htmlFor="email">Email:</label>
                <input onKeyDown={(e) => {validaCampoEmailTelefone(e, emailRegex)}} onKeyUp={(e) => {setaValorCampo(e, "email")}} type="email" id="email" placeholder="Email*" name="email" required />
                <label htmlFor="senha">Senha:</label>
                <input onKeyDown={(e) => {validaCampoTexto(e)}} onKeyUp={(e) => {setaValorCampo(e, "senha")}} type="password" id="senha" placeholder="Senha*" name="senha" required />
            </form>
            <BotaoCadastro texto='Cadastrar' desativado={desativado} onClick={() => {enviarCadastro(nome, email, senha)}} />
            <span>Já tem uma conta ? <Link href={'/login'}>Entrar</Link></span>
        </section>
    )
}