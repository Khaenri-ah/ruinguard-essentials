import { Command } from '@ruinguard/core';

export default new Command({
  data: {
    name: 'ping',
    description: 'pong!',
  },

  async run(interaction) {
    return interaction.embed(`my current ping: ${interaction.client.ws.ping}ms`);
  },
});
