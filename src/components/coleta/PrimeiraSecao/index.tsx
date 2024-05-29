import Image from "next/image";
import './styles.css';
export default function PrimeiraSecao() {
    return (
        <section className="econtrar--ecoponto">
            <Image alt="Mapa com diversas estradas" src={'/pagina-inicial/mapa.webp'} width={400} height={300} />
            <div>
                <h1>Encontre Pontos de Coleta no seu bairro</h1>
                <p>Ajude a manter os oceanos limpos: digite um bairro para verificar se existe algum ponto de coleta nele</p>
            </div>
            <div>
                <input type="text" placeholder="Digite o bairro" />
                <button>Buscar</button>
            </div>    
        </section>
    )
}