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

module.exports = {
  DataBase:DataBase
}