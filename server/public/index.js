const socket = io.connect('http://localhost:4000');

const btn = document.querySelector('#btn-send')
btn.addEventListener('click', () => {
  socket.emit('new order')
  console.log('button clicked')
})