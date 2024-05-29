import { ecopontos } from "@/interfaces/interface";

export default function CardEcopontos(props: ecopontos) {
    return (
        <div key={props.key}>
            <h1>Nome ecoponto: {props.ecoponto}</h1>
            <p>Bairro: {props.bairro}</p>
            <p>Cep: {props.cep}</p>
            <p>Rua e numero: {props.endereco}</p>
            <p>Recebe gesso: {props.recebeGesso}</p>
        </div>
    )
}