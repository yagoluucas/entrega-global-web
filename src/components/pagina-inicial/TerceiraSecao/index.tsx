import Image from "next/image";
import Button from "../Button";
import './style.css'

export default function TerceiraSecao() {
    return (
        <section className="terceira--secao">
            <Image src={'/pagina-inicial/microplastico.png'} alt="Dedo com vários microplasticos" width={400} height={500}/>
            <div>
                <h2>
                    O Impacto dos Microplásticos no Meio Ambiente
                </h2>
                <p>
                    Invisíveis a olho nu, eles se originam de produtos comuns e da degradação de plásticos maiores, trazendo riscos significativos para o meio ambiente e a saúde humana
                </p>
                <Button textoBotao="Saiba Mais" linkBotao="https://www.ecycle.com.br/microplastico/" tamanho="small"/>
            </div>
        </section>
    )
}