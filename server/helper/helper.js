const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");
const uniqid = require("uniqid");

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}

const getNewId = () => {
  console.log(uniqid);
  return uniqid();
};

module.exports = { writeJSONFile, getNewId };
