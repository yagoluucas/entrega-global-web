import Image from "next/image";
import Botao from "../Botao";
import './style.css'
export default function QuintaSecao() {
    return (
        <section className="quinta--secao">
            <article className="primeira--parte">
                <section className="cadastrar">
                    <Image alt="uma baleia e uma tartaruga em um fundo azul" src={'/pagina-inicial/Mr.Turtle.webp'} width={400} height={300} />
                    <div className="conteudo">
                        <h2>Seja um Turtle</h2>
                        <p>Junte-se a nós na proteção dos oceanos: cadastre-se agora e faça parte da mudança!</p>
                        <Botao textoBotao="Cadastrar" tamanho="small" linkBotao="/login" />
                    </div>
                </section>

                <section className="doe">
                    <Image alt="uma tartaruga no oceano" src={'/pagina-inicial/doacao-Tartaruga.webp'} width={400} height={300} />
                    <div className="conteudo">
                        <h2>Doe para uma Instituição</h2>
                        <p>A MR.Turtle liga você de empresas que promove a saúde dos oceanos</p>
                        <Botao textoBotao="Doe" tamanho="small" linkBotao="/doacao" />
                    </div>
                </section>
            </article>
            <article className="segunda--parte">
                <Image alt="Mapa com diversas estradas" src={'/pagina-inicial/mapa.webp'} width={400} height={300} />
                <div className="conteudo">
                    <h2>Pontos de coleta</h2>
                    <p>Ajude a manter os oceanos limpos: clique no botão para encontrar os pontos de coleta mais próximos e faça a diferença hoje mesmo! Cada pequena ação conta para proteger a vida marinha e garantir um futuro sustentável para nosso planeta</p>
                    <Botao textoBotao="Ver pontos" tamanho="small" linkBotao="/coleta" />
                </div>
            </article>
        </section>
    )
}