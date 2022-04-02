const fs = require("fs");
const consoleSuccessColor = "\x1b[32m";
const consoleErrorColor = "\x1b[31m";
const consoleClearColors = "\x1b[0m";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const templateTypes = ["controllers", "models", "routes", "validators"];

const templateFilePaths = templateTypes.map((type) => {
  return `${__dirname}/template-files/${type}/index.js`;
});

const sayError = (message) => {
  console.error(`${consoleErrorColor}${message}${consoleClearColors}`);
};

const saySuccess = (message) => {
  console.log(`${consoleSuccessColor}${message}${consoleClearColors}`);
}

class createAPIFiles {

  constructor() {
    this.databaseTableName = "";
    this.askTheQuestion();
  }

  askTheQuestion() {
    readline.question(
      "\n What is the name of the database table you'd like to create an API for? ",
      this.handleQuestionResponse.bind(this)
    );
  }

  handleQuestionResponse(databaseTableName) {
    this.databaseTableName = databaseTableName;

    if (this.checkFilesAlreadyExist()) {
      sayError(`Files for "${databaseTableName}" API endpoint already exist, please try again with a new name.` );
      this.askTheQuestion();
    } else {
      // We are done asking questions, close the readline so that we don't wait for more input.
      readline.close();
      this.generateNewFiles();
    }
  }

  checkFilesAlreadyExist(){
    for (const templateType of templateTypes) {
      if (fs.existsSync(`src/${templateType}/${this.databaseTableName}.js`)) {
        return true;
      }
    }
    return false;
  }

  generateNewFiles() {
    const mapObj = { $databaseTableName: this.databaseTableName };

    // Oldschool function declaration syntax, because we need to bind(), below.
    templateFilePaths.forEach(function (templateFilePath, i) {
      try {
        // Read the template file.
        let data = fs.readFileSync(templateFilePath, "utf8");

        // Replace the token in the templates.
        let variableReplacements = data.replace(/\$databaseTableName/gi,(matched) => mapObj[matched]);

        // Write the new file out.
        fs.appendFileSync(`src/${templateTypes[i]}/${this.databaseTableName}.js`,
          variableReplacements,
          "utf8",
        );
      } catch (err) {
        sayError("generateNewFiles error:" + err);
        return; // We are in a loop, move on to next file.
      }

      saySuccess(`Success! ${templateTypes[i]} created!`);
    }.bind(this));
  }
}

new createAPIFiles();
