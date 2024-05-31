import './style.css'
import {BotaoCadastroProps} from './interface'
export default function BotaoCadastro(props: BotaoCadastroProps) {
    return (
        <button className='cadastro' onClick={props.onClick} disabled={props.desativado}>{props.texto}</button>
    )
}