import Link from 'next/link'
import './style.css'
export default function FormularioDoacao() {
    return (
        <section className="formulario--doacao">
            <h1>Você está doando para campanha <span>VivaMar</span>, da organização <span>Mr.Turtle</span></h1>
            <div>
                <form>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome completo*" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email*" name="email" required />
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" min={1} placeholder="Valor*" id="valor" name="valor" required />
                </form>
                <button>Doar</button>
            </div>
            <p>Ao continuar, você concorda com os <Link href={'/termos'}>Termos de Uso</Link></p>
        </section>
    )
}