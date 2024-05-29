import PrimeiraSecao from "@/components/pagina-inicial/PrimeiraSecao";
import QuartaSecao from "@/components/pagina-inicial/QuartaSecao";
import QuintaSecao from "@/components/pagina-inicial/QuintaSecao";
import SegundaSecao from "@/components/pagina-inicial/SegundaSecao";
import TerceiraSecao from "@/components/pagina-inicial/TerceiraSecao";
import '@/styles/pagina-principal.css'
export default function Home() {
  return (
    <main className="pagina--principal">
      <PrimeiraSecao />
      <SegundaSecao />
      <TerceiraSecao />
      <QuartaSecao />
      <QuintaSecao />
    </main>
  );
}
