// promis api
import { error } from "console";
import * as fs from "fs/promises";
import * as Fs from "fs";

// creating Directory /folder

// try {
//   await fs.mkdir("c:\\nodejs\\c\\d\\b", { recursive: true });
//   console.log("folder is create");
// } catch (e) {
//   console.log(e);
// }

// read the folder/directory

// try {
//   const file = await fs.readdir("c:\\nodejs");
//   for (const f of file) {
//     console.log(f);
//   }
// } catch (e) {
//   console.log(error);
// }

// remove folder/directory

// try {
//   await fs.rmdir("C:\\nodejs\\c\\d");
//   console.log("the directory is removed");
// } catch (e) {
//   console.log(e);
// }

// create and write files

// try {
//   await fs.writeFile("README.md", "hello node abbas");
// } catch (e) {
//   console.log(e);
// }

// try {
//   const data = await fs.readFile("README.md", "utf-8");
//   console.log(data);
// } catch (e) {
//   console.log(e);
// }

// append contend to the file
// try {
//   await fs.appendFile("README.md", " \nthis is a practise session");
// } catch (e) {
//   console.log(e);
// }

// copy file

// try {
//   await fs.copyFile("README.md", "info.txt");
// } catch (e) {
//   console.log(e);
// }

// get the file info

// try {
//   const info = await fs.stat("README.md");
//   console.log(info.isDirectory());
//   console.log(info.isFile());
// } catch (E) {
//   console.log(E);
// }

// callback
// fs.mkdir("c://cprograming", (e) => {
//   if (e) throw e;
//   console.log("make a dirctory");
// });

// sync api
// Fs.mkdirSync("c:\\nodejs\\js", { recursive: true });
