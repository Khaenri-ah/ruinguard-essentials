import { Event } from '@ruinguard/core';

export default new Event({
  event: 'ready',
  once: true,

  run(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
});
