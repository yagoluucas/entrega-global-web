'use client'
import Image from "next/image";
import Link from "next/link";
import './style.css'
import logo from './logo.png'
import './navegacao-mobile.css'
import { useRef, useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

// Header da nossa aplicação que está disponível em todas as páginas
export default function Header(){
    const path = usePathname();
    const [tituloEntrar, setTituloEntrar] = useState('Entrar');
    const navRef = useRef<HTMLElement>(null);

    function abrirMenu(e: any) {
        navRef.current?.classList.remove('esconder');
        navRef.current?.classList.add('mostrar');
    }

    function fecharMenu(e: any) {
        navRef.current?.classList.remove('mostrar');
        navRef.current?.classList.add('esconder');
    }

    useEffect(() => {
        navRef.current?.classList.remove('mostrar');
        navRef.current?.classList.add('esconder');
        if (localStorage.getItem('usuario') !== null) {
            setTituloEntrar('Conta');
        }
    }, [path])

    return (
        <header>
            <Link href={'/'}>
                <Image src={logo.src} alt="Logo da empresa" width={80} height={80}/>
            </Link>

            <Image onClick={(e) => {abrirMenu(e)}} src={'/menu.svg'} alt="Menu de navegação" width={45} height={45} className="menu--mobile mostrar--menu"/>
            <nav className="navegacao">
                <ul>
                    <li><Link href={'/coleta'}>Pontos de coleta</Link></li>
                    <li><Link href={'/denuncias'}>Denuncie</Link></li>
                    <li><Link href={'/doacao'}>Doe</Link></li>
                    <li>
                        <Link className="link--login" href={'/login'}>
                            <Image alt="icone de login" width={25} height={25} src={'/user.svg'}/> {tituloEntrar}
                        </Link>
                    </li>
                </ul>
            </nav>


            <nav ref={navRef} className="navegacao-mobile">
                <Image onClick={(e) => {fecharMenu(e)}} src={'/fechar.svg'} alt="Fechar menu" width={45} height={45} className="menu--mobile"/>
                <ul>
                    <li><Link href={'/coleta'}>Pontos de coleta</Link></li>
                    <li><Link href={'/denuncias'}>Denuncie</Link></li>
                    <li><Link href={'/doacao'}>Doe</Link></li>
                    <li>
                        <Link className="link--login" href={'/login'}>
                            <Image alt="icone de login" width={25} height={25} src={'/user.svg'}/> Entrar
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}