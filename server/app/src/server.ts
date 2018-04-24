import * as Hapi from 'hapi';

import { plugins } from './plugins';

let server: Hapi.Server = new Hapi.Server({
  host: '0.0.0.0',
  port: process.env.PORT || 3000
});

const init = async () => {
  // Register plugins
  for (let plugin of plugins) {
    await server.register(plugin);
  }

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
