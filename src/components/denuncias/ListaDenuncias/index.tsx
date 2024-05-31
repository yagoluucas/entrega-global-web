'use client'
import './style.css'
import { ListaDenunciasProps } from "./interface"
export default function ListaDenuncias(props: ListaDenunciasProps) {
    return (
        <section className="lista--denuncia">
            <h2>{props.titulo}</h2>
            <div className='denuncias'>
                {props.children}
            </div>
        </section>
    )
}