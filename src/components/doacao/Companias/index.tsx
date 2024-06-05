'use client'
import { useState, useEffect } from 'react'
import { pegueTodasEmpresas } from './funcoes'
import { DataCompanias } from './interface'
export default function Companias() {

    const [companias, setCompanias] = useState([])

    async function pegueAsCompanias() {
        setCompanias(await pegueTodasEmpresas())
    }

    useEffect(() => {
        pegueAsCompanias()
    }, [])

    return (
        <div>
            <h1>Companias</h1>
            {companias.data ? companias.data.map((item: DataCompanias) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.phone}</p>
                        <p>{item.contact.email}</p>
                        <p>{item.contact.country}</p>
                    </div>
                )
            }) : <p>Carregando...</p>}
        </div>
    )
}