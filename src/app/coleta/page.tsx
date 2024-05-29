'use client'
import { useEffect, useState } from "react"


export default function Coleta() {

    const [data, setData] = useState([])

    async function getInfoEcopontos() {
        try{
            const result = await fetch("/api/ecopontos", {
                method: "GET"
            })
            const data = await result.json()
            setData(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getInfoEcopontos()
    }, [])


    return (
        data?.map((item, index) => {
            return (
                <div key={index}>

                    <h1>{item.ecoponto}</h1>

                </div>
            )
        })
    )
}