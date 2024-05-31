'use client'
import './style.css'
import { PaginaDenunciaProps } from "./interface";
import BotaoPaginaDenuncia from "../BotaoPaginaDenuncia";
import { useState, useEffect, useRef } from "react";
import ListaDenuncias from "../ListaDenuncias";

export default function PaginaDenuncia(props: PaginaDenunciaProps) {
    const [titulo, setTitulo] = useState("Todas denuncias")
    const [denuncias, setDenuncias] = useState([
        {
            titulo: "",
            descricao: "",
        }
    ])

    function todasDenuncias() {
        setTitulo("Todas denuncias")
    }

    function minhasDenuncias() { 
        setTitulo("Minhas denuncias")
    }

    function novaDenuncia() {
        console.log("Novas denuncias")
    }

    function sair() {
        console.log("Sair")
    }

    return (
        <main className="usuario--logado">
            <nav className="navegacao--denuncias">
                <div>
                    <h1>Olá, {props.usuario}</h1>
                    <ul>
                        <li><BotaoPaginaDenuncia onClick={todasDenuncias} texto="Denuncias"/></li>
                        <li><BotaoPaginaDenuncia onClick={minhasDenuncias} texto="Minhas denuncias"/></li>
                        <li><BotaoPaginaDenuncia onClick={novaDenuncia} texto="Nova denuncia"/></li>
                        <li className="btn--sair"><BotaoPaginaDenuncia onClick={sair} texto="Sair"/></li>
                    </ul>
                </div>
                
            </nav>

            <ListaDenuncias  titulo={titulo} 
            children={denuncias.map((item,index) => {
                return <div key={index}>{item.titulo}</div>
            })}/>
        </main>
    )
}