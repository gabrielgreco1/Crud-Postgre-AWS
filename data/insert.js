import pool from "../pool.js";

export default async function insertData(automacao, quantidade, usuario, status) {
    const queryText = `
    INSERT INTO execucoes(automacao, quantidade, usuario, status) 
    VALUES($1, $2, $3, $4)
    RETURNING id`;
    try {
      const res = await pool.query(queryText, [automacao, quantidade, usuario, status]);
      console.log('Execução gravada com sucesso.');
      return (res.rows[0].id)
    } catch (err) {
      console.error('Erro ao inserir dados:', err);
    }
  };