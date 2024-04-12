import 'dotenv/config'
import insertData from './data/insert.js'



export default async function write_start(automacao, dados){
    const quantidade = dados.length
    const usuario = dados[0].Usuario
    const status = 'Iniciada'

    const id = insertData(automacao, quantidade, usuario, status)
    return id
}

