const fs = require('fs')
const path = require('path')
import ecopontosJson from './ecopontos.json'

export async function GET() {
    try {
        const data = JSON.stringify(ecopontosJson)
        return Response.json(JSON.parse(data), { status: 200 })
    }
    catch (error) {
        return Response.json({ message: 'Erro ao buscar os ecopontos', error }, { status: 500 })
    }
}