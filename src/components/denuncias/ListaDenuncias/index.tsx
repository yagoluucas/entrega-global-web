'use client'

import { ListaDenunciasProps } from "./interface"
export default function ListaDenuncias(props: ListaDenunciasProps) {
    return (
        <section>
            <h2>{props.titulo}</h2>
            <div>
                {props.children}
            </div>
        </section>
    )
}