import PrimeiraSecao from "@/components/pagina-inicial/PrimeiraSecao";
import SegundaSecao from "@/components/pagina-inicial/SegundaSecao";
import '@/styles/pagina-principal.css'
export default function Home() {
  return (
    <main className="pagina--principal">
      <PrimeiraSecao />
      <SegundaSecao />
    </main>
  );
}
