// //console.log("rehan khan");//global object
// setTimeout(()=>{
// console.log("haris khan");
// },4000)


//window //helps us to acces global object
//like windows.console.log

//modules
//modules are made becuase we donot want our code to be mixed 
//every file in a node enviroment is a module

// console.log(module);l

//in order to load a module
var logger=require('./logger.js')

console.log(logger);
