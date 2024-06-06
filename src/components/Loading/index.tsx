import './style.css';

// componente responsável por mostrar um carregamento na tela
export default function Loading() {
    return (
        <section className='secao--carregamento'>
            <h1 className='text-xl my-7'>Carregando...</h1>
            <div className="carregando">
                <div className="caixaSuperior"></div>
                <div className="caixaEsquerda"></div>
                <div className="caixaDireita"></div>
            </div>
        </section>
    )
}