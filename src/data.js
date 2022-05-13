const sql = require("mssql/msnodesqlv8");
const utils = require("./utils");
const path = require('path');

class Data {

  constructor(config) {
    this.cfg = config
    this.rootPath = path.dirname(__filename)
    this.outputPath = null
    this.queryPath = null
    this.inputPath = null
    this.passPath = null
    this.today = new Date().toISOString().split('T')[0]
    this.fiscalYear = null
    this.currentQuarter = null
    this.fiscalQuarter = null
  }

  setPath(
    setCfgPaths = True,
    setCustomPath = False,
    pathType = null,
    customPath = null,
  ) {

    if (setCfgPaths) {
      this.inputPath = this.root_path + this.cfg["input"]
      this.outputPath = this.root_path + this.cfg["output"]
      this.queryPath = this.root_path + this.cfg["queries"]
      this.passPath = this.root_path + this.cfg["tracker"]
    }
    else {
      if (setCustomPath) {
        if (pathType == "outputData") {
          this.outputPath = customPath
        }
        else if (pathType == "queryFiles") {
          this.queryPath = customPath
        }
        else if (pathType == "inputData") { this.inputPath = customPath }

        else if (pathType == "passTracker") { this.passPath = customPath }

      }

      else {
        paths = createPath()
        this.inputPath = paths[0]
        this.outputPath = paths[1]
        this.queryPath = paths[2]
        this.passPath = paths[3]
      }
    }
  }

  runSqlQuery = async (query, dbEngine, queryParams) => {

    const isEmpty = Object.keys(queryParams).length === 0;

    if (utils.fileExists(query)) {
      if (isEmpty) {
        try {
          await sql.connect(dbEngine);
          const result = await sql.query(query);
          console.log(result.recordset);
        } catch (err) {
          console.dir(err);
        }
      }
      else {
        try {
          await sql.connect(dbEngine);
          const result = await sql.query(query.format(queryParams));
          console.log(result.recordset);
        } catch (err) {
          console.dir(err);
        }
      }
    }
    else {
      if (isEmpty) {
        try {
          await sql.connect(dbEngine);
          const result = await sql.query(query);
          console.log(result.recordset);
        } catch (err) {
          console.dir(err);
        }
      }
      else {
        try {
          await sql.connect(dbEngine);
          const result = await sql.query(query.format(queryParams));
          console.log(result);
        } catch (err) {
          console.dir(err);
        }
      }

    }
    sql.close();
  }
}

module.exports = Data;