import XLSX from 'xlsx';

export default async function excel_data(){

const workbook = XLSX.readFile('teste.xlsx');
const sheet_name_list = workbook.SheetNames;
const dados = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

return dados
}