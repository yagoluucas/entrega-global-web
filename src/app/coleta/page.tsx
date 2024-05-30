'use client'
import CardEcopontos from "@/components/coleta/CardEcopontos"
import PrimeiraSecao from "@/components/coleta/PrimeiraSecao"
import { ecopontos } from "@/interfaces/interface"
import { useEffect, useState } from "react"


export default function Coleta() {

    const [data, setData] = useState<ecopontos[]>([])

    async function getInfoEcopontos() {
        try {
            const result = await fetch("/api/ecopontos", {
                method: "GET"
            })
            const data = await result.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getInfoEcopontos()
    }, [])


    return (
        <main>
            <PrimeiraSecao />
            <section className="flex gap-2 flex-wrap justify-center">
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