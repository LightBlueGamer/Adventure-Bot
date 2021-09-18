const ms = require("pretty-ms");
module.exports = {
    devCmd: true,
    permLevel: 10,
    data: {
      name: "eval",
      type: 3
    },
    async execute(interaction) {
      const message = interaction.channel.messages.resolve(interaction.targetId);
      const code = this.cleanInput(message.content);
      try {
        const evaled = eval(code);
        const clean = await this.clean(this.client, evaled);
        const MAX_CHARS = 3 + 2 + clean.length + 3;
        if (MAX_CHARS > 4000) {
          await interaction.editReply("Output exceeded 4000 characters. Sending as a file.", { files: [{ attachment: Buffer.from(clean), name: "output.txt" }]});
        }
        await interaction.editReply(codeBlock("js", clean));
      } catch (err) {
        console.log(err);
      }
    },
};
