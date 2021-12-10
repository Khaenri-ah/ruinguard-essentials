import { Event } from '@ruinguard/core';

export default new Event({
  event: 'ready',
  once: true,

  run() {
    console.log('ready!');
  },
});
