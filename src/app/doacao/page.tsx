import FormularioDoacao from "@/components/doacao/FormularioDoacao";
import InfoDoacao from "@/components/doacao/InfoDoacao";
import '@/styles/doacao.css'
import Image from "next/image";
export default function Doacao() {
    return (
        <main className="doacao">
            <div>
                <InfoDoacao titulo="Para onde nosso dinheiro é destinado ?" texto="Suas doações são direcionadas para projetos de conservação marinha, limpeza de oceanos, proteção da vida marinha e promoção de práticas sustentáveis"
                />

                <InfoDoacao titulo="Para onde nosso dinheiro é destinado ?" texto="Suas doações são direcionadas para projetos de conservação marinha, limpeza de oceanos, proteção da vida marinha e promoção de práticas sustentáveis"
                />
            </div>
            <FormularioDoacao />
        </main>
    )
}