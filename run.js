const remix = require("@remix-run/dev")
const fs = require("fs");

const args = process.argv.slice(2);
const count = args[0] ? parseInt(args[0]) : 1;

console.log(`Creating sample routes...`)

fs.rmSync("app/routes/__a", {recursive: true, force: true}, () => {})
for (let i = 0; i < count; i++) {
  for (let j = 1; j <= 10; j++) {
    for (let k = 0; k < 5; k++) {
      for (let l = 0; l < 2; l++) {
        fs.mkdirSync(`app/routes/__a/__b/__c/${i}/${j}/${k}/${l}`, { recursive: true }, () => {})
        fs.writeFileSync(`app/routes/__a/__b/__c/${i}/index.js`, `export default function Index() { return <div>hello</div> }`)
        fs.writeFileSync(`app/routes/__a/__b/__c/${i}/${j}/index.js`, `export default function Index() { return <div>hello</div> }`)
        fs.writeFileSync(`app/routes/__a/__b/__c/${i}/${j}/${k}/${l}/index.js`, `export default function Index() { return <div>hello</div> }`)
      }
    }
  }
}

remix.cli.run(["routes"]).then(() => {
  process.exit(0);
}, error => {
  console.error(error);
  process.exit(1);
})