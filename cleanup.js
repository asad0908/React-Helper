const fs = require("fs");
const readline = require("readline");

//remove logo.svg
fs.unlink("./src/logo.svg", (err) => {
  err && console.log(err);
});

//remove setupTests.js
fs.unlink("./src/setupTests.js", (err) => {
  err && console.log(err);
});

//remove App.test.js file
fs.unlink("./src/App.test.js", (err) => {
  err && console.log(err);
});

//cleaning up app.css fully
fs.writeFile("./src/App.css", "", (err) => {
  err && console.log(err);
});

//replacing header part of App.js with only div
const appFile = `import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Cleanup Successfull</h1>
    </div>
  );
}

export default App;
`;

fs.writeFile("./src/App.js", appFile, (err) => {
  err && console.log(err);
});

//make margin and padding 0 in index.css
const newIndex = `* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

fs.writeFile("./src/index.css", newIndex, (err) => {
  err && console.log(err);
});
