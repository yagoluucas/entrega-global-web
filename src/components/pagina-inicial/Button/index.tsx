import ButtonProps from "./interface";
import Link from "next/link";
import './style.css'
export default function Button(props: ButtonProps){
    return (
        <Link className={"btn--primeira--pagina " + props.tamanho} href={props.linkBotao}>{props.textoBotao}</Link>
    )
}