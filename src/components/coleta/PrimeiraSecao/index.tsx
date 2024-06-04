import Image from "next/image";
import './style.css';

// esta é a primeira seção da página de coleta
export default function PrimeiraSecao() {
    return (
        <section className="econtrar--ecoponto">
            <Image alt="Mapa com diversas estradas" src={'/pagina-inicial/mapa.webp'} width={400} height={300} />
            <div>
                <h1>Encontre Pontos de Coleta no seu bairro</h1>
                <p>Ajude a manter os oceanos limpos: Encontre ecopontos perto de você</p>
            </div>   
        </section>
    )
}