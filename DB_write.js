import 'dotenv/config'
import insertData from './data/insert.js'
import updateData from './data/update.js'


export default async function write_start(automacao, dados){
    const quantidade = dados.length
    const usuario = dados[0].Usuario
    const status = 'Em execução'

    const data = {automacao, quantidade, usuario, status}
    const id = insertData(data.automacao, data.quantidade, data.usuario, data.status)
    return id
}


export async function update_status(id, status){
    const query = 'UPDATE automacao_execucoes SET status = $1 WHERE id = $2'
    updateData()
}

