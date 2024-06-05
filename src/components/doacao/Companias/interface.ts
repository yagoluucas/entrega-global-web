interface DataCompanias{
    name:string,
    id:string
    phone:string,
    contact:ContactCompanias
}

interface ContactCompanias{
    email:string,
    country:string,
}

interface CompaniasProps{
    data:DataCompanias[]
}

export type {DataCompanias, CompaniasProps}