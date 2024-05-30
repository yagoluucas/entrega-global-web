
import Image from 'next/image';
import './style.css';
export default function TerceiraSecao() {
    return (
        <section className="terceira--secao">
            <div>
                <h2>
                    Por que Denunciar ?
                </h2>
                <ul>
                    <li>Fortalecimento da Lei</li>
                    <span>Denúncias fornecem às autoridades informações para investigar e punir infratores, garantindo o cumprimento das leis ambientais e desestimulando práticas ilegais.</span>
                    <li>Conscientização</li>
                    <span>Cada denúncia aumenta a conscientização pública sobre a importância da proteção marinha, educando a sociedade e promovendo uma cultura de conservação.</span>
                    <li>Prevenção e Recuperação</li>
                    <span>Denúncias permitem ações rápidas para prevenir e mitigar danos, ajudando na recuperação de áreas afetadas e protegendo os ecossistemas a longo prazo.</span>
                    <li>Incentivo à Sustentabilidade</li>
                    <span>Expor práticas prejudiciais pressiona empresas e indivíduos a adotarem métodos sustentáveis, beneficiando o meio ambiente, a economia e as comunidades locais.</span>
                </ul>
            </div>
            <Image alt='' src={'/denuncias/2.png'} width={400} height={400}/>
        </section>
    )
}