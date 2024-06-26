import Image from "next/image";
import Botao from "../Botao";
import './style.css'

export default function TerceiraSecao() {
    return (
        <section className="terceira--secao">
            <div className="img">
                <Image src={'/pagina-inicial/microplastico.png'} alt="Dedo com vários microplasticos" width={600} height={600}/>
            </div>
            <div className="info">
                <h2>
                    O Impacto dos Microplásticos no Meio Ambiente
                </h2>
                <p>
                    Invisíveis a olho nu, eles se originam de produtos comuns e da degradação de plásticos maiores, trazendo riscos significativos para o meio ambiente e a saúde humana
                </p>
                <Botao textoBotao="Saiba Mais" linkBotao="https://www.ecycle.com.br/microplastico/" tamanho="small"/>
            </div>
        </section>
    )
}