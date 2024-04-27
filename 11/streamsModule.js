const fs = require("fs");

// for (let i = 0; i < 100000; i++) {
//   fs.writeFileSync("./data.txt", "hello", { flag: "a" });
// }

const stream = fs.createReadStream("./data.txt", { encoding: "utf-8" });

stream.on("data", (data) => {
  console.log(data);
});
