import updateData from './data/update.js'

export default async function update_status(id, status){
    const query = 'UPDATE execucoes SET status = $1 WHERE id = $2'
    updateData(id, status, query)
}
