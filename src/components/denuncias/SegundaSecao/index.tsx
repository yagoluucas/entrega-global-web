import Image from 'next/image';
import './style.css';
import Link from "next/link";
export default function SegundaSecao() {
    return (
        <section className="segunda--secao">
            <div>
                <h2>Como posso denunciar ?</h2>
                <ol>
                    <li>Acessa a página de <Link href={'/login'}>login</Link></li>
                    <li>Caso não tenha conta, será necessário criar uma</li>
                    <li>Após o login, clique em &quot;Denunciar&quot;</li>
                    <li>Preencha o formulário com as informações necessárias</li>
                    <li>Envie a denuncia</li>
                </ol>
            </div>
            <Image alt="pessoas cuidando do planeta" src={'/denuncias/fundo-pessoas.png'} width={600} height={600}/>
        </section>
    )
}
