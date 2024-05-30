import Image from 'next/image';
import './style.css';
import Link from "next/link";
export default function SegundaSecao() {
    return (
        <section className="segunda--secao">
            <div>
                <h2>Veja abaixo o passo a passo para registrar uma denuncia</h2>
                <ol>
                    <li>Acessa a página de <Link href={'/login'}>login</Link></li>
                    <li>Caso não tenha conta, será necessário criar uma</li>
                    <li>Após o login, clique em "Denunciar"</li>
                    <li>Preencha o formulário com as informações necessárias</li>
                    <li>Envie a denuncia</li>
                </ol>
            </div>
            <Image alt='' src={'/denuncias/1.png'} width={600} height={600}/>
        </section>
    )
}