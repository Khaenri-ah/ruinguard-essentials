// eslint-disable-next-line no-unused-vars
import { Client, Event } from '@ruinguard/core';

export default new Event({
  event: 'ready',
  once: true,

  /**
   * Shows client user tag in console
   * @function run
   * @param {Client} client - client object
   */
  run(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
});
