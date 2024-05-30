import Image from 'next/image'
import {InfoDoacaoProps} from './interface'
import './style.css'
export default function InfoDoacao(props: InfoDoacaoProps) {
    return (
        <section className='info--doacao'>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </section>
    )
}