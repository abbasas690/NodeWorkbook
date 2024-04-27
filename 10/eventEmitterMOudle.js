const eventEmmiter = require("events");

const customEmmiter = new eventEmmiter();
// 1. on : listen/register for an event
// 2. once: listen/register for an event only once.
// 3. emit: emit/call an event

customEmmiter.on("response", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});

customEmmiter.emit("response", "abbas", 89);
customEmmiter.emit("response", "arun", 98);
