const {
  fs,
  writeFileSync,
  mkdirSync,
  readFileSync,
  copySync,
  existsSync,
  rmSync,
} = require("fs-extra");
const path = require("path");
const yaml = require("js-yaml");

const srcDir = path.join(__dirname, "src");
const distDir = path.join(__dirname, "dist");
const imgDir = path.join(srcDir, "img");
const linkListPath = path.join(srcDir, "list.yml");
const imgPath = path.join(distDir, "img");
const distPath = path.join(distDir, "links.json");

try {
  const listData = yaml.load(readFileSync(linkListPath, "utf8"));

  if (existsSync(distDir)) {
    rmSync(distDir, { recursive: true, force: true });
  }
  mkdirSync(distDir);

  copySync(imgDir, imgPath);
  writeFileSync(distPath, JSON.stringify(listData, null, 2));

  console.log(listData);
  console.log("List generate complete.");
} catch (e) {
  console.error(e)
}