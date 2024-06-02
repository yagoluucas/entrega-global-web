'use client'
import './style.css'
import { PaginaDenunciaProps } from "./interface";
import BotaoPaginaDenuncia from "../BotaoPaginaDenuncia";
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import ListaDenuncias from "../ListaDenuncias";
import CardDenuncia from '../CardDenuncia';
import RegistrarDenuncia from '../RegistrarDenuncia';
import Image from 'next/image';
import { todasDenuncias, minhasDenuncias, novaDenuncia, fecharMenu, mostrarMenu } from './funcoes';

export default function PaginaDenuncia(props: PaginaDenunciaProps) {
    const rota = useRouter()
    const [titulo, setTitulo] = useState("Todas denuncias")
    const [fazerDenuncia, setFazerDenuncia] = useState(false)
    const refMenu = useRef(null)
    const refIconeMostrar = useRef(null)
    const sectionRef = useRef(null)
    let nomeUsuario = JSON.parse(localStorage.getItem('usuario')!)
    nomeUsuario = nomeUsuario.substring(0, nomeUsuario.indexOf(' '))

    const [denuncias, setDenuncias] = useState(() => {
        return [{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },{
            titulo: "Denuncia 1",
            descricao: "Descricao top da denuncia 1",
            local: "Rua 1"
        },]
    })

    function sair() {
        localStorage.removeItem("usuario")
        alert("Usuario deslogado")
        rota.push("/login")
    }


    return (
        <main className="usuario--logado">
            <Image onClick={() => {mostrarMenu(refMenu)}} className='abrir--menu' src="/arrow-square-right-fill.svg" alt="icone menu" width={40} height={40} />

            <nav ref={refMenu} className="navegacao--denuncias">
                <Image onClick={() => {fecharMenu(refMenu)}} className='icone--fechar' src="/x-square-fill.svg" alt="icone fechar" width={40} height={40} />
                <div>
                    <h1>Olá, {nomeUsuario}</h1>
                    <ul>
                        <li><BotaoPaginaDenuncia onClick={() => {todasDenuncias(setFazerDenuncia, setTitulo, setDenuncias)}} texto="Denuncias" /></li>
                        <li><BotaoPaginaDenuncia onClick={() => {minhasDenuncias(setFazerDenuncia, setTitulo, setDenuncias)}} texto="Minhas denuncias" /></li>
                        <li><BotaoPaginaDenuncia onClick={() => {novaDenuncia(setFazerDenuncia, setTitulo)}} texto="Nova denuncia" /></li>
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