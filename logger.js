
var url="https://mylogger.io/log";


// function log(){
//  fetch('https://api.sampleapis.com/wines/reds').then((response)=>{

//     console.log(response.data);
//  }).catch((error)=>{

//     console.log(error);
//  })
// }

// log()


function log(message="hi this is haris"){
    //sending an https request
    console.log(message);

}


log("rehan khan");

module.exports.log= log; //exporting log function outside of this module


