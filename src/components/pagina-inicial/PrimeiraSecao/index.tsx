import Botao from "../Botao";
import './style.css'
export default function PrimeiraSecao() {
    return (
        <section className="primeira--secao">
            <h1 className="titulo--primeira--secao">Ajude a conservar nossos oceanos!</h1>
            <Botao tamanho="small" textoBotao="Doe já" linkBotao="/doacao"/>
        </section>
    )
}