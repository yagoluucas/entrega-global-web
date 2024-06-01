import { BotaoPaginaDeunciaProps } from "./interface";
import './style.css'
export default function BotaoPaginaDenuncia(props: BotaoPaginaDeunciaProps) {

    return (
        <button disabled={props.desabilitado} onClick={props.onClick} className="denuncia">{props.texto}</button>
    )
}