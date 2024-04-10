import pool from "../pool.js";

const updateData = async (id, novoNomeAutomacao) => {
    const queryText = 'UPDATE automacao_execucoes SET nome_automacao = $1 WHERE id = $2';
    try {
      await pool.query(queryText, [novoNomeAutomacao, id]);
      console.log('Dados atualizados com sucesso.');
    } catch (err) {
      console.error('Erro ao atualizar dados:', err);
    }
  };
s  