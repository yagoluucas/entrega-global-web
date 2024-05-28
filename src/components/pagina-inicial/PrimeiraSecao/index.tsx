import Button from "../Button";
import './style.css'
export default function PrimeiraSecao() {
    return (
        <section className="primeira--secao">
            <h1 className="titulo--primeira--secao">Ajude a conservar nossos oceanos!</h1>
            <Button tamanho="small" textoBotao="Doe já" linkBotao="/doacao"/>
        </section>
    )
}