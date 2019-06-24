const fs =require('fs');
const path=require('path');

var jsonInput = {
    'firstName':'Nattapat',
    'lastName':'Sutapakorn'
};
console.log(Object.keys(jsonInput));
console.log(Object.values(jsonInput));
var result = '';
var header ='|ENV|';
var data ='|UAT|';
Object.keys(jsonInput).forEach( (item,index,array)=>{
	console.log(item); // key
    console.log(jsonInput[item]); // value
    console.log('index:'+index); // value
    console.log(array); // value
    result = result + item +':'+jsonInput[item]+'\n';
    header = header +item+'|';
    data = data +jsonInput[item]+'|';
    
});
console.log(header+'\n'+data);

fs.writeFile(
  path.join(__dirname,'/output', 'hello.txt'),
  result,
  err => {
    if (err) throw err;
    console.log('File written to...');
  });
