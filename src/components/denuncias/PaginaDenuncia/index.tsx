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
import { todasDenuncias, minhasDenuncias, novaDenuncia, fecharMenu, mostrarMenu, lerTodasAsDenuncias } from './funcoes';
import { mostrarResultado } from '@/utils';

export default function PaginaDenuncia(props: PaginaDenunciaProps) {
    const rota = useRouter()
    const [titulo, setTitulo] = useState("Todas denuncias")
    const [fazerDenuncia, setFazerDenuncia] = useState(false)
    const refMenu = useRef(null)
    let nomeUsuario = JSON.parse(localStorage.getItem('usuario')!)
    nomeUsuario = nomeUsuario.substring(0, nomeUsuario.indexOf(' ') != -1 ? nomeUsuario.indexOf(' ') : nomeUsuario.length)

    const [denuncias, setDenuncias] = useState([])

    useEffect(() => {
        lerTodasAsDenuncias(setDenuncias)
    }, [])

    function sair() {
        localStorage.removeItem("usuario")
        mostrarResultado('/sinal-certo.webp', 'Sucesso', 'Usuário deslogado', 'sucesso', 'login', 3000)
        setTimeout(() => {
            rota.push("/login")
        }, 3000)
    }

    return (
        <main className="usuario--logado">
            <Image onClick={() => { mostrarMenu(refMenu) }} className='abrir--menu' src="/arrow-square-right-fill.svg" alt="icone menu" width={40} height={40} />

            <nav ref={refMenu} className="navegacao--denuncias mostrar">
                <Image onClick={() => { fecharMenu(refMenu) }} className='icone--fechar' src="/x-square-fill.svg" alt="icone fechar" width={40} height={40} />
                <div>
                    <h1>Olá, {nomeUsuario}</h1>
                    <ul className='flex flex-col'>
                        <li><BotaoPaginaDenuncia onClick={() => { todasDenuncias(setFazerDenuncia, setTitulo, setDenuncias) }} texto="Denuncias" /></li>
                        <li><BotaoPaginaDenuncia onClick={() => { minhasDenuncias(setFazerDenuncia, setTitulo, setDenuncias) }} texto="Minhas denuncias" /></li>
                        <li><BotaoPaginaDenuncia onClick={() => { novaDenuncia(setFazerDenuncia, setTitulo) }} texto="Nova denuncia" /></li>
                        <li className="btn--sair"><BotaoPaginaDenuncia onClick={sair} texto="Sair" /></li>
                    </ul>
                </div>
            </nav>

            {fazerDenuncia ? <RegistrarDenuncia /> : <ListaDenuncias titulo={titulo}>{denuncias.map((item: any, index: number) => {
                return <CardDenuncia local={item.localDenuncia} key={index} descricao={item.descricaoDenuncia
                } titulo={item.tituloDenuncia} />
            })}</ListaDenuncias>}
        </main>
    )
}