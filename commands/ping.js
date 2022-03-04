// eslint-disable-next-line no-unused-vars
import { Command, CommandInteraction, MessageEmbed } from '@ruinguard/core';

export default new Command({
  data: {
    name: 'ping',
    description: 'pong!',
  },

  /**
   * replies with ping
   * @function run
   * @param {CommandInteraction} interaction - interaction object
   */
  async run(interaction) {
    const pinging = new MessageEmbed().setColor('2f3036').setTitle('Pinging...').setDescription('Pinging...');
    const sent = await interaction.reply({ embeds: [pinging], fetchReply: true });

    pinging.setTitle('**Pong!**').setDescription(`Websocket Ping: ${interaction.client.ws.ping || interaction.client.ws.shards.ping}\n My response ping: ${sent.createdTimestamp - interaction.createdTimestamp}`);

    await interaction.editReply({ embeds: [pinging] });
  },
});
