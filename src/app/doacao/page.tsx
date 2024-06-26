import FormularioDoacao from "@/components/doacao/FormularioDoacao";
import InfoDoacao from "@/components/doacao/InfoDoacao";
import '@/styles/doacao.css'
export default function Doacao() {
    return (
        <main className="doacao">
            <div>
                <InfoDoacao titulo="Para onde nosso dinheiro é destinado ?" texto="Suas doações são direcionadas para projetos de conservação marinha, limpeza de oceanos, proteção da vida marinha e promoção de práticas sustentáveis">
                </InfoDoacao>

                <InfoDoacao titulo="Seu presente pode salvar o oceano e a vida marinha!" texto="Nosso oceano unifica o mundo como nada mais. E salvá-lo de ameaças contínuas é uma causa que afeta a todos nós. Estamos na linha de frente da proteção dos oceanos, investindo em pesquisa, liderança e defesa que promovam soluções baseadas em evidências que funcionem.
"
                />
            </div>
            <FormularioDoacao />
        </main>
    )
}