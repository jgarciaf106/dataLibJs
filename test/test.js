const { Data, DataBase } = require('datalibjs');

const config = {
  database: "hrods",
  server: "localhost",
  port: 1433,
  trustedConn: true,
}

const db = new DataBase(config);
const od = new Data(config);

let engine = db.setEngine();

const sql = require("mssql/msnodesqlv8");

// const runSqlQuery = (query, dbEngine) => {  
//     try {
//       const mssql = sql.connect(dbEngine)
//       const result = mssql.query(query)
//       console.table(result.recordset)
//       sql.close()
//     } catch (err) {
//       console.log(err);
//     }
//   }
//

const runSqlQuery = (query, dbEngine) => {  
  return sql.connect(dbEngine)
    .then(pool => {
      return pool.request()
        .query(query)
    })
    .then(result => { return result })
    .catch(err => {
      console.log(err);
    });
}
( async () => {
  await runSqlQuery("Select * From fedl1",engine).then(result => {  console.table(result.recordset) })

}
)



