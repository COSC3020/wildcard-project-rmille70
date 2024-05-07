const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let startTime;
let endTime;

startTime = performance.now()
let prim1 = dijkstraPrimes(30);
endTime = performance.now()
let time1 = endTime - startTime;
console.log(`Call to dijkstraPrimes() took ${endTime - startTime} milliseconds`);
console.log(prim1);

startTime = performance.now()
let prim2 = seaveOfEratosthenes(30);
endTime = performance.now()
let time2 = endTime - startTime;
console.log(`Call to seaveOfEratosthenes() took ${endTime - startTime} milliseconds`);
console.log(prim2);

startTime = performance.now()
let prim3 = trialDivision(30);
endTime = performance.now()
let time3 = endTime - startTime;
console.log(`Call to trialDivision() took ${endTime - startTime} milliseconds`);
console.log(prim3);

for(let i = 0; i < 10; i++){
    assert(prim1[i] == prim2[i] && prim2[i] == prim3[i])
}