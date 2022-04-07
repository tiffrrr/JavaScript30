// https://tiffrrr.github.io/JavaScript30/
var fs =require('fs')
var arr = [];
fs.readdirSync('./').forEach(file => {
    if(file.includes('_')){
        // 首次變更資料夾名稱
        // var newfileName = file.replace(' - ','_').replace(/, /g,'-').replace(/ /g,'-')
        // local
        arr.push({"name":file.slice(3),"link":"/"+file})
        // publish
        // arr.push({"name":file.slice(3),"link":"https://tiffrrr.github.io/JavaScript30/"+file})
    }
});
fs.writeFile('index.json',`${JSON.stringify({...arr})}`, function (err) {
    if (err)
        console.log(err);
    else
        console.log(JSON.stringify({...arr}));
});
// console.log();