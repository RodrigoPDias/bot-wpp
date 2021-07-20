// Supports ES6
// import { create, Whatsapp } from 'sulla';
const sulla = require('sulla');

sulla.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Ola') {
      client.sendText(message.from, 'Ola eu um bot');
    }
    else if (message.body === 'Ola bot ') {
        client.sendText(message.from, 'Ola eu sou um bot');
    }
  });
}