'use client'
import { useRouter } from "next/navigation";
import LoginDiv from "@/components/Login";

export default function Login() {

    if (localStorage.getItem('usuario') !== null) {
        const rota = useRouter()
        const usuario = JSON.parse(localStorage.getItem('usuario')!)
        console.log(usuario)    
        rota.push(`/denuncias/${usuario}`)
    } else {
        return (
            <main>
                <LoginDiv />
            </main>
        )
    }

    
}