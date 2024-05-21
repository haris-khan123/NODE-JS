const os= require('os');

const totalmem=os.totalmem()
const freemem=os.freemem()

console.log(`total memory is ${totalmem}`,`free memory is ${freemem}`);