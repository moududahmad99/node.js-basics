const fs = require('fs')

// How to create File Using FS(file_System)
// fs.writeFile('text.txt', 'writeFile(file: fs.PathOrfileDescriptor, data: string | NodeJS.ArrayBufferView, options: fs.WriteFileOptions, callback: fs.NorpraraCallback) : void', function(error){
//     if(error) {
//         console.log(error)
//     } else {
//         console.log('File Created.');
//     }
// })
// Note : writeFile will override


// // AppendFile
// fs.appendFile('text.txt', 'Student Life is not the best period at all. So when you try to do something, think!', function(error){
//     if(error) {
//         console.log(error)
//     } else {
//         console.log('File Created.');
//     }
// })


// // readFile
// fs.readFile('text.txt', 'utf-8', (error, data) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(data);
//     }
// })

// readFile
fs.exists('text.txt', (result) => {
    if(result) {
        console.log('Found')
    } else {
        console.log('Not Found');
    }
})