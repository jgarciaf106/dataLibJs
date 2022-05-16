const fs = require("fs");

const folders = ["01_notebooks", "02_data", "03_js_scripts"];
const targetSubDir = "./02_data";
const subFolders = ["01_input_files", "02_output_files", "03_query_files", "04_password_files"];


/* Creating a folder structure. */
for (let folder in folders) {
    if (!fs.existsSync(`./${folders[folder]}`)) {
        fs.mkdirSync(`./${folders[folder]}`);
        if (fs.existsSync(targetSubDir)) {
            for (let subFolder in subFolders) {
                fs.mkdirSync(`./${targetSubDir}/${subFolders[subFolder]}`);
            }
        }
    }
}

fs.writeFile('.env', '// Place all you enviroment variables within this file.', function (err) {
    if (err) throw err;
  });

