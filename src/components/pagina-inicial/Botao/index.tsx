import BotaoProps from "./interface";
import Link from "next/link";
import './style.css'
export default function Botao(props: BotaoProps){
    return (
        <Link className={"btn--primeira--pagina " + props.tamanho} href={props.linkBotao}>{props.textoBotao}</Link>
    )
}