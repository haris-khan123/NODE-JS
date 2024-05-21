const { error } = require('console');
// const fs=require('fs');

// const folder=fs.readdirSync('./');

// console.log(folder);
// //asynchronous form



fs.readdir("./",(err,files)=>{ 
    
    if(err)
        {
            console.log("Eroor",err);
        }

        else
        {
            console.log("result",files);
        }

})