import { ecopontos } from "@/interfaces/interface";
import Image from "next/image";

export default function CardEcopontos(props: ecopontos) {
    return (
        <div key={props.key}>
            <Image src={props.imagem} width={400} height={300} alt="Fachada de local do ecoponto" />
            <div>
                <h1>Nome ecoponto: {props.ecoponto}</h1>
                <p>Bairro: {props.bairro}</p>
                <p>Cep: {props.cep}</p>
                <p>Rua e numero: {props.endereco}</p>
                <p>Recebe gesso: {props.recebeGesso}</p>
            </div>
        </div>
    )
}