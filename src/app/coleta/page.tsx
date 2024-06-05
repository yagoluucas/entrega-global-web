'use client'
import CardEcopontos from "@/components/coleta/CardEcopontos"
import '@/styles/ecopontos.css'
import { ecopontos } from "@/interfaces/interface"
import { useEffect, useState } from "react"



export default function Coleta() {

    const [data, setData] = useState<ecopontos[]>([])
    const [error, setError] = useState(false)

    async function getInfoEcopontos() {
        try {
            const result = await fetch("/api/ecopontos", {
                method: "GET"
            })
            const data = await result.json()
            setData(data)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        getInfoEcopontos()
    }, [])

    if (error) {
        return (
            <h1>
                error
            </h1>
        )
    }
    
    return (
        <main className="ecopontos">
            <section className="lista--ecopontos">
                {data.map((item, index) => {
                    const recebeGesso = item.recebeGesso ? "Sim" : "Não"
                    return (
                        <CardEcopontos
                            imagem="/ecopontos/ecoponto.png"
                            key={index}
                            ecoponto={item.ecoponto}
                            endereco={item.endereco}
                            bairro={item.bairro}
                            cep={item.cep}
                            recebeGesso={recebeGesso}
                            enderecoCompleto={`https://www.google.com/maps/search/?api=1&query=${item.endereco}, ${item.bairro}, ${item.cep}`}
                        />
                    )
                })}
            </section>
        </main>
    )
}