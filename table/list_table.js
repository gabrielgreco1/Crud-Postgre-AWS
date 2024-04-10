import pool from "../pool.js";

const listTables = async () => {
    const queryText = `SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';`;
    try {
      const res = await pool.query(queryText);
      console.log('Tabelas:', res.rows);
    } catch (err) {
      console.error('Erro ao listar tabelas:', err);
    }
  };
  
  listTables();
  