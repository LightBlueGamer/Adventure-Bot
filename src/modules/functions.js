const { permLevels } = require("../../config.js");

function permlevel(interaction) {
  let permlvl = 0;

  const permOrder = permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

  while (permOrder.length) {
    const currentLevel = permOrder.shift();
    if (interaction.guild && currentLevel.guildOnly) continue;
    if (currentLevel.check(interaction)) {
      permlvl = currentLevel.level;
      break;
    }
  }
  return permlvl;
}

module.exports = { permlevel };
