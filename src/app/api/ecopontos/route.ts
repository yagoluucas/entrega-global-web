const fs = require('fs')
const path = require('path')

export async function GET() {
    try {
        const data = await fs.readFileSync(`${process.cwd()}\\public\\ecopontos.json` , 'utf-8')
        return Response.json(JSON.parse(data), { status: 200 })
    }
    catch (error) {
        return Response.json({ message: 'Erro ao buscar os ecopontos', error }, { status: 500 })
    }
}