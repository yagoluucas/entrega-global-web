export async function pegueTodasEmpresas() {
    try{
        const resposta = await fetch('http://localhost:8080/fakecompany')
        const empresas = await resposta.json()
        return empresas
    }catch(error){
        console.log(error)
    }   
}