const sql = require("mssql/msnodesqlv8");

class DataBase {
  config = {
    database: "",
    server: "",
    port: 0,
    trustedConn: false,
  };

  constructor(dbConfig) {
    this.config = dbConfig;
  }

  setEngine() {
    const dbEngine = {
      database: this.config.database,
      server: this.config.server,
      port: this.config.port,
      options: {
        trustedConnection: this.config.trustedConn,
        driver: "msnodesqlv8",
      },
    };

    return dbEngine;
  }
}

class Data {

  constructor() {
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

module.exports.DataBase = DataBase;
module.exports.Data = Data;
