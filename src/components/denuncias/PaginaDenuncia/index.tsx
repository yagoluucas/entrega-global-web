'use client'
import './style.css'
import { PaginaDenunciaProps } from "./interface";
import BotaoPaginaDenuncia from "../BotaoPaginaDenuncia";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import ListaDenuncias from "../ListaDenuncias";
import CardDenuncia from '../CardDenuncia';
import RegistrarDenuncia from '../RegistrarDenuncia';

export default function PaginaDenuncia(props: PaginaDenunciaProps) {
    const rota = useRouter()
    const [titulo, setTitulo] = useState("Todas denuncias")
    const [fazerDenuncia, setFazerDenuncia] = useState(false)

    const [denuncias, setDenuncias] = useState(() => {
        return [{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        }]
    })

    function todasDenuncias() {
        setFazerDenuncia(false)
        setTitulo("Todas denuncias")
    }

    function minhasDenuncias() {
        setTitulo("Minhas denuncias")
    }

    function novaDenuncia() {
        setFazerDenuncia(false)
        setTitulo("Nova denuncia")
        setFazerDenuncia(true)
    }

    function sair() {
        localStorage.removeItem("usuario")
        alert("Usuario deslogado")
        rota.push("/login")
    }

    return (
        <main className="usuario--logado">
            <nav className="navegacao--denuncias">
                <div>
                    <h1>Olá, {props.usuario}</h1>
                    <ul>
                        <li><BotaoPaginaDenuncia onClick={todasDenuncias} texto="Denuncias" /></li>
                        <li><BotaoPaginaDenuncia onClick={minhasDenuncias} texto="Minhas denuncias" /></li>
                        <li><BotaoPaginaDenuncia onClick={novaDenuncia} texto="Nova denuncia" /></li>
                        <li className="btn--sair"><BotaoPaginaDenuncia onClick={sair} texto="Sair" /></li>
                    </ul>
                </div>
            </nav>

            {fazerDenuncia ? <RegistrarDenuncia/> : <ListaDenuncias titulo={titulo}
                children={denuncias.map((item, index) => {
                    return <CardDenuncia local={item.local} key={index} descricao={item.descricao} titulo={item.titulo} />
                })} />}
        </main>
    )
}