import { BotaoPaginaDeunciaProps } from "./interface";
import './style.css'
export default function BotaoPaginaDenuncia(props: BotaoPaginaDeunciaProps) {

    return (
        <button onClick={props.onClick} className="denuncia">{props.texto}</button>
    )
}