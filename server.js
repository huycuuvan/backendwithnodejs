const app = require("./src/app");
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log("Hello world with port 8080");
});
// process.on("SIGINT", () => {
//   server.close(() => console.log("Exit server"));
// });
