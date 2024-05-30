import { ecopontos } from "@/interfaces/interface";
import Image from "next/image";
import './style.css';

export default function CardEcopontos(props: ecopontos) {
    return (
        <div className="card--ecoponto" key={props.key}>
            <Image src={props.imagem} width={400} height={300} alt="Fachada de local do ecoponto" />
            <div className="info">
                <h2>Nome ecoponto:</h2><span>{props.ecoponto}</span>
                <p>Bairro:</p><span>{props.bairro}</span>
                <p>Cep:</p><span>{props.cep}</span>
                <p>Rua e numero:</p><span>{props.endereco}</span>
                <p>Recebe gesso:</p><span>{props.recebeGesso}</span>
                <a href={props.enderecoCompleto} target="_blanck">Ver no mapa</a>
            </div>
        </div>
    )
}