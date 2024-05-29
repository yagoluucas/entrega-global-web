import Image from "next/image";
import Botao from "../Botao";

export default function QuintaSecao() {
    return (
        <section>
            <div>
                <div>
                    
                </div>
            </div>
            <div>
                <Image alt="Mapa com diversas estradas" src={'/pagina-inicial/mapa.webp'} width={400} height={300}/>
                <div>
                    <h2>Pontos de coleta</h2>
                    <p>Ajude a manter os oceanos limpos: clique no botão para encontrar os pontos de coleta mais próximos e faça a diferença hoje mesmo!</p>
                    <Botao textoBotao="Ver pontos" tamanho="small" linkBotao="/coleta"/>
                </div>
            </div>
        </section>
    )
}