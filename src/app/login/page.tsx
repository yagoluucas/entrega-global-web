'use client'
import { useRouter } from "next/navigation";
import LoginDiv from "@/components/Login";

export default function Login() {
    const rota = useRouter()
    if (localStorage.getItem('usuario') !== null && typeof window!== 'undefined') {   
        const usuario = JSON.parse(localStorage.getItem('usuario')!) 
        rota.push(`/denuncias/${usuario}`)
    } else {
        return (
            <main>
                <LoginDiv />
            </main>
        )
    }

    
}
