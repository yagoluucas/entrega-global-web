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

export type {DataCompanias}