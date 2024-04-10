const deleteData = async (id) => {
    const queryText = 'DELETE FROM automacao_execucoes WHERE id = $1';
    try {
      await pool.query(queryText, [id]);
      console.log('Dados deletados com sucesso.');
    } catch (err) {
      console.error('Erro ao deletar dados:', err);
    }
  };
  