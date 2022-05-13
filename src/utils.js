

const path = require('path');
const fs = require("fs");

const fileExists = (filePath) => {
    return fs.existsSync(filePath);
}

const makeDir = (path) => {
    fs.mkdir(path, (err) => {        
        err ? false : true;
    });
    return path;
}

const createPath = () => {

    let outputPath = [];
    let root = path.dirname(__filename);
    let targetDir = "02_data";
    let paths = ["01_input_files", "02_output_files", "03_query_files", "04_password_files"];

    for (let path in paths) {
        if (!fileExists(root + `\\${targetDir}\\${paths[path]}`)) {
            let createdPath = makeDir(root + `\\${targetDir}\\${paths[path]}`);
            outputPath.push(createdPath);
        }
    }
    return outputPath
}


module.exports = {fileExists, createPath};