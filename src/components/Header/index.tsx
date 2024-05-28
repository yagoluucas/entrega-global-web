import Image from "next/image";
import Link from "next/link";
import './style.css'
export default function Header(){
    return (
        <header>
            <Link href={'/'}>
                <Image src={'/logo.png'} alt="Logo da empresa" width={80} height={80}/>
            </Link>
            <nav>
                <ul>
                    <li><Link href={'/coleta'}>Pontos de coleta</Link></li>
                    <li><Link href={'/denuncias'}>Denuncie</Link></li>
                    <li><Link href={'/doacao'}>Doe já</Link></li>
                    <li>
                        <Link className="link--login" href={'/login'}>
                            <Image alt="icone de login" width={25} height={25} src={'/user.svg'}/> Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}