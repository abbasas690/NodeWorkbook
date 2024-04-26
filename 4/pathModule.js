import path from "path";

console.log(path.basename("c:\\nodejs\\app.js", ".js"));
console.log(path.dirname("c:\\nodejs\\js\\app.js"));
console.log(path.extname("c:\\nodejs\\app.html"));

console.log(path.join("c:", "abbas", "download"));
console.log(path.join("c:", "abbas", "download", ".."));

console.log(path.normalize("c:\\course\\reducx\\store\\features"));

console.log(path.parse("c:\\nodejs\\app.js"));
