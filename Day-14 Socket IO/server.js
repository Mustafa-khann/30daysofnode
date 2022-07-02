const { emitWarning } = require('process');

const app = require('express')();
var server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(3000);
console.log('Server listening on port 3000');

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/admin', (req,res) => {
    res.sendFile(__dirname + '/admin.html');
})


io.on('connection', (socket)=>{
    socket.emit('welcome', {data: "welcome"});

    socket.on('new', (data) => {
        console.log('About to upload Quote');
        io.socket.emit('next', {data: data});
    })
})