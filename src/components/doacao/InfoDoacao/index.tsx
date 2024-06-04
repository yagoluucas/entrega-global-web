import {InfoDoacaoProps} from './interface'
import './style.css'

// componente responsável por renderizar as informações ao lado do formulário de doação
export default function InfoDoacao(props: InfoDoacaoProps) {
    return (
        <section className='info--doacao'>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
            {props.children}
        </section>
    )
}