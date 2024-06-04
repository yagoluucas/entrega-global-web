import Image from "next/image";
import Botao from "../Botao";
import CardNoticiaProps from './interface'
import './style.css'

// componente responsável por renderizar os cards de notícias da segunda seção da primeira página
export default function CardNoticia(props: CardNoticiaProps) {
    return (
        <div className="card--noticias">
            <Image className="image" src={props.srcImagem} alt={props.altImagem} width={400} height={100} />

            <div className="content">
                
                <h2 className="title">
                    {props.tituloTexto}
                </h2>

                <p className="paragrafo">
                    {props.paragrafoTexto}
                </p>

                <Botao tamanho="btn--card" textoBotao="Saiba Mais" linkBotao={props.linkBotao} />
            </div>
        </div>
    )
}