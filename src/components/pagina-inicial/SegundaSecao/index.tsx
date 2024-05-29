import CardNoticia from "../CardNoticia";
import './style.css'
export default function SegundaSecao() {
    return (
        <section className="segunda--secao">
            <CardNoticia
                tituloTexto="Aquecimento dos oceanos atinge nível inédito"
                paragrafoTexto="Os oceanos atingiram a temperatura mais alta já registrada pelos cientistas"
                linkBotao="https://g1.globo.com/jornal-nacional/noticia/2024/03/07/aquecimento-dos-oceanos-atinge-nivel-inedito-nos-estudos-cientificos-pesquisadores-culpam-a-queima-de-combustiveis-fosseis.ghtml"
                altImagem="Pinguins ao lado um do outro conversando em cima de um pedaço de gelo"
                srcImagem="/pagina-inicial/pinguins-noticia.png"
            />

            <CardNoticia
                tituloTexto="Algas marinhas podem diminuir a crise climática"
                paragrafoTexto="Algas marinhas podem se tornar emergente em soluções ambientais"
                linkBotao="https://umsoplaneta.globo.com/clima/noticia/2024/03/27/algas-marinhas-podem-se-tornar-um-mercado-emergente-em-solucoes-ambientais.ghtml"
                altImagem="Homem navegando com uma canoa e algas ao fundo"
                srcImagem="/pagina-inicial/algas-marinhas-noticia.webp"
            />

            <CardNoticia
                tituloTexto="Espécie de baleia rara volta a surgir na América Latina"
                paragrafoTexto="Após 100 anos, espécie de baleia volta a aparecer na costa da Argentina"
                linkBotao="https://www.cnnbrasil.com.br/tecnologia/apos-100-anos-especie-de-baleia-volta-a-aparecer-na-costa-da-argentina/"
                altImagem="Baleia no oceano"
                srcImagem="/pagina-inicial/baleia-noticia.png"
            />
        </section>
    )
}