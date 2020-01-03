// bin/www.js
/**
 * Module dependencies.
 */
import app from '../app';
import debugLib from 'debug';
import socketIO from 'socket.io';
import { genId } from '../routes'

const debug = debugLib('your-project-name:server');

// generated code below.
const server = app.listen(4000, () => {
  console.log('listening to port 4000 now');
});

const io = socketIO(server);
io.on('connection', socket => {
  console.log(socket.id);
  socket.on('new order', () => {
    io.emit('new order', { id: genId() });
    console.log('emit new order')
  });
});
