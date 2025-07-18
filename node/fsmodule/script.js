const { log } = require('console');
const fs=require('fs');

// fs.writeFile("abcd.txt","hey hello",function(err){
//     if(err) console.log(err);
//     else console.log("File created");
// });

// by default reading return hexa decimal code means raw buffer if we want original data we need to pass utf8 after file location
// fs.readFile('abcd.txt','utf8',function(err,data){
//     if(err) console.log(err);
//     else console.log(data);
// })


//appending means adding data in existing file 
// fs.appendFile('abcd.txt',' appended data',function(err){
//     if(err) console.log(err);
//     else console.log("appended");
// })

// renaming file 
// fs.rename('abcd.txt','hey.txt',function(err){
//     if(err) console.log(err);
//     console.log("renamed");
// })

//deleting files which is unlink 
// fs.unlink('abcd.txt',function(err){
//     if(err) console.log(err);
//     console.log("deleted");
// })

//creating folders 
// fs.mkdir('lolo',function(err){
//     if(err) console.log(err);
//     console.log("Folder created");
// })

// reading folder like it will give the content inside it like files name and folders name
// fs.readdir('lolo',function(err,files){
//     if(err) console.log(err);
//     console.log(files);
// })


// deleting folders
// fs.rmdir('lolo',{recursive:true},function(err){
//     if(err) console.log(err);
//     console.log("Folder deleted");
// })