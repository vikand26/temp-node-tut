const EventEmiitter = require('events');

const customEmitter = new EventEmiitter();

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved user ${name} ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic`)
})

customEmitter.emit('response','john',34)