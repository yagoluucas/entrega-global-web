import './style.css'
import { CardDenunciaProps } from './interface'
export default function CardDenuncia(props: CardDenunciaProps) {
    return (
        <div className="card--denuncia">
            <h3 className="titulo">
                {props.titulo}
            </h3>

            <p className="descricao">
                {props.descricao}
            </p>

            <p className='local'>
                Local: {props.local}
            </p>
        </div>
    )
}