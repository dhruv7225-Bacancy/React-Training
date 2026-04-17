export type Patient={
    id:number,
    name:string,
    height:number
}

export type Visit={
    id: number, 
    patientId: number, 
    date: string, 
    weight: number, 
    doctor: string
}