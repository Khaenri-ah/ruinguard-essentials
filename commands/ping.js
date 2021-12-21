import { Command } from '@ruinguard/core';

export default new Command({
  data: {
    name: 'ping',
    description: 'pong!',
  },

  async run(interaction) {
    return interaction.embed(`pong! My ping is ${interaction.client.ws.ping}ms`);
  },
});
