import pool from "../pool.js";

export default async function insertData(automacao, quantidade, usuario, status) {
    const queryText = 'INSERT INTO execucoes(automacao, quantidade, usuario, status) VALUES($1, $2, $3, $4)';
    try {
      await pool.query(queryText, [automacao, quantidade, usuario, status]);
      console.log('Dados inseridos com sucesso.');
    } catch (err) {
      console.error('Erro ao inserir dados:', err);
    }
  };
  
insertData('Multas-01', 200, 'heitor', 'merda')