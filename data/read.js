import pool from "../pool.js";

const readData = async () => {
    try {
      const res = await pool.query('SELECT * FROM execucoes');
      console.log('Dados:', res.rows);
    } catch (err) {
      console.error('Erro ao ler dados:', err);
    }
  };

readData()