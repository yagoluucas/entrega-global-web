import './style.css'
import { CardDenunciaProps } from './interface'

// Card resposável por renderizar uma denuncia
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
                <span>Local:</span> {props.local}
            </p>
        </div>
    )
}