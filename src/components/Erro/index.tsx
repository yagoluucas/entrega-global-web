import './style.css';
import erro from './erro.webp'
import Image from 'next/image';

// componente mostra uma mensagem de erro caso de algum erro na aplicação
export default function Error() {
    return(
        <section className='secao-erro'>
            <div>
                <Image src={erro} alt="Erro" width={300} height={300} />
            </div>
            <h1>
                Erro ao carregar a página
            </h1>
        </section>
    )
}