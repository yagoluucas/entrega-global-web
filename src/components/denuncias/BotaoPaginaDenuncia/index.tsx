import { BotaoPaginaDeunciaProps } from "./interface";
import './style.css'

// este componente é um botão que está disponível em toda página de denuncia
export default function BotaoPaginaDenuncia(props: BotaoPaginaDeunciaProps) {
    return (
        <button disabled={props.desabilitado} onClick={props.onClick} className="denuncia">{props.texto}</button>
    )
}