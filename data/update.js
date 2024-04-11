import pool from "../pool.js";

export default async function updateData(id, status, query) {
    const queryText = query;
    try {
      await pool.query(queryText, [status, id]);
      console.log('Dados atualizados com sucesso.');
    } catch (err) {
      console.error('Erro ao atualizar dados:', err);
    }
  };
