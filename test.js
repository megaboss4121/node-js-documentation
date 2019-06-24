function first() {
    // Simulate a code delay
    setTimeout(function () {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}
//   first();
//   second();

var promise1 = new Promise(function (resolve, reject) {
    resolve('1');
});
// const third = promise1.then(suss => {
//     console.log(suss);
// }
// , rej => { 
//     console.log('k') 
// },function (resolve, reject) {
//     resolve('Success2!');
//     console.log(1);
// }).then(suss => {
//     console.log(suss);
//     }, rej => { 
//         console.log(rej) 
//     });

function a(){
return 1;
};
const a1 =a();
var p1 = a().then(res=>{
    console.log(res);
    return '2';
}).then(res=>{console.log(res)
return '3';
}).then(suss=>console.log(suss)).catch(err=>
    {throw err;})