import PrimeiraSecao from "@/components/denuncias/PrimeiraSecao";
import SegundaSecao from "@/components/denuncias/SegundaSecao";
import TerceiraSecao from "@/components/denuncias/TerceiraSecao";


export default function Denuncia() {
    return (
        <main className="denuncia">
            <PrimeiraSecao />
            <SegundaSecao/>
            <TerceiraSecao />
        </main>
    )
}    