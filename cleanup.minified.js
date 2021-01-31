const fs = require("fs"),
  readline = require("readline");
fs.unlink("./src/logo.svg", (n) => {
  n && console.log(n);
}),
  fs.unlink("./src/setupTests.js", (n) => {
    n && console.log(n);
  }),
  fs.unlink("./src/App.test.js", (n) => {
    n && console.log(n);
  }),
  fs.writeFile("./src/App.css", "", (n) => {
    n && console.log(n);
  });
const appFile =
  'import "./App.css";\n\nfunction App() {\n  return (\n    <div className="app">\n      <h1>Cleanup Successfull</h1>\n    </div>\n  );\n}\n\nexport default App;\n';
fs.writeFile("./src/App.js", appFile, (n) => {
  n && console.log(n);
});
const newIndex =
  '* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n';
fs.writeFile("./src/index.css", newIndex, (n) => {
  n && console.log(n);
});
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }),
  getComponentData = (n) =>
    `import React from 'react';\n  import "../css/${n}.css";\n\n  const ${n} = () => {\n      return (\n          <div>\n              \n          </div>\n      );\n  }\n  \n  export default ${n};\n  `;
let recursiveForComponents = () => {
  const n = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  n.question(
    "Enter name of component to make a new component OR Enter q to exit\n",
    (e) => {
      if ("q" === e) return n.close();
      {
        n.close();
        const o = getComponentData(e);
        fs.writeFile(`./src/components/${e}.js`, o, (n) => {
          n && console.log(n);
        }),
          fs.writeFile(`./src/css/${e}.css`, "", (n) => {
            n && console.log(n);
          }),
          recursiveForComponents();
      }
    }
  );
};
r1.question("Do you want to create components now? Y OR N\n", (n) => {
  "Y" === n
    ? (r1.close(),
      fs.mkdir("./src/components", (n) => {
        n && console.log(n);
      }),
      fs.mkdir("./src/css", (n) => {
        n && console.log(n);
      }),
      recursiveForComponents())
    : r1.close();
});
