module.exports = function (io) {
  io.on('connection', function(socket){
    console.log('a user connected');
    // console.log(socket.id)
    socket.on('add', function(data){
      // const msg = socket.id + ' adding: ' + data.a + '-' + data.b;
      const msg = {
        id: socket.id,
        msg: 'adding',
        time: new Date()
      }
      io.emit('adding', msg);
      console.log(msg);
    })
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
 };