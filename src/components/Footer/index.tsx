import Link from 'next/link'
import './style.css'
import Image from 'next/image'
import logo from './logo.png'

// footer da nossa aplicação que está disponível em todas as páginas
export default function Footer() {
    return (
        <footer>
            <section className='rede--social'>
                <h2>Nos siga nas redes sociais</h2>
                <div className='icones'>
                    <a className='icone--rede--social facebook' href="#"><img src="/facebook-logo-bold.svg" alt="icone facebook" /></a>
                    <a className='icone--rede--social instagram' href="#"><img src="/instagram-logo-bold.svg" alt="icone instagram" /></a>
                    <a className='icone--rede--social linkedin' href="#"><img src="/linkedin-logo-bold.svg" alt="icone linkedin" /></a>
                </div>
            </section>

            <nav className='links--uteis'>
                <ul>
                    <li><Link href={'/doacao'}>Doe</Link></li>
                    <li><Link href={'/denuncias'}>Denuncie</Link></li> 
                    <li><Link href={'/coleta'}>Pontos de coleta</Link></li>
                </ul>
            </nav>

            <section className='alunos'>
                <Image src={logo.src} alt="Logo da empresa" width={80} height={80} />
                <p>© 2024 MR.turtle - Todos os direitos reservados</p>
                <ul>
                    <li>Nome: Yago Lucas rm: 5503013 turma : 1TDSPC</li>
                    <li>Nome: Nicolas Martins rm: 553478 turma : 1TDSPC</li>
                    <li>Nome: Ander Kamada rm: 553449 turma : 1TDSPC</li>
                </ul>
            </section>
        </footer>
    )
}