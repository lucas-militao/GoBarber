import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';
import appointmentsRouter from './routes/appointments.routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(appointmentsRouter);

app.listen(3333, () => {
  console.log('🎶SServer started on port 3333!');
});
