const DataBase = require('datalibjs/DataBase');
const Data = require('datalibjs/Data');


const config = { 
    database: "hrods",
    server: "localhost",
    port: 1433,
    trustedConn: true,
   }

const db = new DataBase(config);
const od = new Data(config);

engine = db.setEngine();

let data = od.runSqlQuery("Select * From fedl2",engine,{});

console.log(data);