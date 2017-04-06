const fs=require('fs');
const path=require('path')
var mockDir = path.resolve(__dirname, '../mock');
console.log(process.cwd())
console.log(__dirname)
var lu=path.join(__dirname,'../mock');
console.log(lu)
console.log(mockDir)
path.resolve(__dirname,'./mock')
fs.readdirSync(mockDir).forEach((file)=>{

    console.log(file)
    var filePath = path.resolve(mockDir, file);
    console.log(fs.statSync(filePath))
    console.log(fs.statSync(filePath).isDirectory())
    if (fs.statSync(filePath).isDirectory()) {
        console.log('ok')
    }
})
