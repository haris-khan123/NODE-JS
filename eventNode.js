const EventEmitter=require('events'); //here the EventEmitter is a class
//making an instance of that class
const emitter= new EventEmitter(); 

//register a listner
emitter.on('messageLogged',()=>{
    console.log("listener called");
})  //first argument is the name of the method



emitter.emit('messageLogged')       //raise an evvent  it means making a noise
