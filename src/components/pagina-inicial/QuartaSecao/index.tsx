import Image from "next/image";
import Botao from "../Botao";
import './style.css'

// componente responsável por renderizar a quarta seção da primeira página
export default function QuartaSecao(){
    return (
        <section className="quarta--secao">
            <div className="img">
                <Image src={'/pagina-inicial/img-denuncia.png'} alt="Praia com vários lixos na areia" width={600} height={600}/>
            </div>
            <div className="info">
                <h2>
                    Denuncie maus tratos à vida marinha!
                </h2>
                <p>
                    Ajude a preservar nossos oceanos: denuncie práticas prejudiciais. Cada ação conta para um futuro mais sustentável para a vida marinha
                </p>
                <Botao textoBotao="Denuncia" linkBotao="/denuncias" tamanho="small"/>
            </div>
        </section>
    )
}