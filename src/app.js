import express from 'express';
import routes from '../../go_barber/src/routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // Permite aplicaçao receber requisicoes no formato json
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
