const { appendFileSync, truncateSync } = require("fs");
const path = require("path");
truncateSync(path.resolve(__dirname+"logs", "latest.txt"));
let endString = "";
endString += "Loading API...\n";
require("./api");
endString += "API Loaded\nLoading Bot...\n";
require("./bot");
endString += "Bot Loaded\nLoading Game...\n";
require("./game");
endString += "Game Loaded\n";
const { client } = require("./bot");
endString += "⸻".repeat(5);

endString += `\nLoading Commands...
${client.commands.map((x) => `Loaded Command: ${x.data.name}`)}\n
Loading Events...
${client.events.map((x) => `Loaded Event: ${x.name}`).join("\n")}\n
Loading Classes...
${client.classes.map((x) => `Loaded Class: ${x.name}`).join("\n")}\n
Loading Items...
${client.items.map((x) => `Loaded Item: ${x.name}`).join("\n")}\n`;
endString += "⸻".repeat(5);
endString += `\nEverything Loaded Fine!`;

appendFileSync(path.resolve(__dirname+"logs", "latest.txt"), endString);
