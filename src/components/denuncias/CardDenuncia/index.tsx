import './style.css'
import { CardDenunciaProps } from './interface'
export default function CardDenuncia(props: CardDenunciaProps) {
    return (
        <div className="conteudo">
            <h1 className="titulo">
                {props.titulo}
            </h1>

            <p className="descricao">
                {props.descricao}
            </p>
        </div>
    )
}