'use client'
import { useRouter } from "next/navigation";
import LoginDiv from "@/components/Login";
import { useEffect } from "react";

export default function Login() {
    const rota = useRouter()


    useEffect(() => {
        if (localStorage.getItem('usuario')!== null) {
            const usuario = JSON.parse(localStorage.getItem('usuario')!);
            rota.push(`/denuncias/${usuario}`);
        }
    }, []);

    return (
            <main>
                <LoginDiv />
            </main>
        )

    
}
