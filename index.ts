const {
  fs,
  writeFileSync,
  mkdirSync,
  readFileSync,
  copySync,
  existsSync,
  rmSync
} = require("fs-extra");
const yaml = require("js-yaml");

try {
 if (existsSync("./dist/")) {
   rmSync("./dist/", { recursive: true, force: true });
 }
  const listData = yaml.load(readFileSync("./list.yaml", "utf8"));
  mkdirSync("./dist/");
  copySync("./img", "./dist/img");

  writeFileSync("./dist/links.json", JSON.stringify(listData));
} catch (e) {
  console.error(e);
}
