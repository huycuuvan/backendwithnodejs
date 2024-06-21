const mongoose = require("mongoose");
const _SECOND = 5000;
const os = require("os");
const process = require("process");
// count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log("number of connection:", numConnection);
};

// check overload connect
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length; // kiem tra cpu
    const memoryUsage = process.memoryUsage().rss; //kiem tra bo nho da su dung

    // Gia su so luong ket noi la 5
    const maxConnections = numCores * 5;
    console.log(`Active connections:${numConnection}`);
    console.log(`memory usage: ${memoryUsage / 1024 / 1024}MB`);
    if (numConnection > maxConnections) {
      console.log("Connection overload detected");
    }
  }, _SECOND); // Monitor every 5 seconds
};
module.exports = {
  countConnect,
  checkOverload,
};
