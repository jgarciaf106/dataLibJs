const sql = require("mssql/msnodesqlv8");


class Data {

  constructor(message) {
    this.message = message;
  }

  getMessage() {
    console.log(this.message);
  }

  run_sql_query = async (table, engine) => {
    try {
      await sql.connect(engine);
      const result = await sql.query(`select * from ${table}`);
      console.log(result);
      sql.close();
    } catch (err) {
      console.dir(err.recordset);
    }
  };
}

module.exports = Data;
