import PaginaDenuncia from "@/components/denuncias/PaginaDenuncia";

export default function DenunciasFeitas(props: any) {
    return (
        <PaginaDenuncia usuario={props.params.usuario}/>
    )
}