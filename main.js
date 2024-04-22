import write_start from './DB_write.js'
import update_status from './DB_update.js'
import excel_data from './read_excel.js'


const json = await excel_data()
console.log('Iniciou a execução')
const id = await write_start('Financeiro - 01', json)


// AUTOMAÇÃO....
await new Promise(resolve => setTimeout(resolve, 5000))

console.log('Executando a automação')
await update_status(id, 'Em execução')
await new Promise(resolve => setTimeout(resolve, 10000))
console.log('Auomtação finalizada')


await update_status(id, 'Finalizado')
console.log('Processo finalizado')