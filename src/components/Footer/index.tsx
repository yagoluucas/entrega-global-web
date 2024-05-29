import Link from 'next/link'
import './style.css'
import Image from 'next/image'
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

            <section>
                <Image src={'/logo.png'} alt="Logo da empresa" width={80} height={80} />
                <p>© 2021 MR.turtle - Todos os direitos reservados</p>
            </section>
        </footer>
    )
}