/* References: 
 * https://www.youtube.com/watch?v=fwxjMKBMR7s
 * https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
*/

// Returns an array of prime numbers up to inputed limit
function dijkstraPrimes(upTo){
    if(upTo <= 1) { return []; }
    if(upTo === 2) { return [2]; }
    let prim = [2];
    let pool = [4];
    for(let i = 3; i <= upTo; i++){
        if(i < Math.min(...pool)){
            prim.push(i);
            pool.push((i*i));
        } else {
            for(let j = 0; j < prim.length; j++){            
                if(i == pool[j]) { pool[j] += prim[j]; }
            }
        }
    }
    return prim;
}

// Returns an array of prime numbers up to inputed limit
function seaveOfEratosthenes(upTo){
    if(upTo <= 1) { return []; }
    if(upTo === 2) { return [2]; }
    let prim = [];
    let boolArr = new Array(upTo).fill(true);
    boolArr[0] = false;
    for(let i = 2; i <= upTo; i++){
        if(boolArr[i] == true){ 
            prim.push(i);
            let mult = i;
            for(let j = 2; (j*mult) < boolArr.length; j++){
                boolArr[j*mult] = false;
            }
        }
    }
    return prim;
}

// Returns an array of prime numbers up to inputed limit
function trialDivision(upTo){
    if(upTo <= 1) { return []; }
    let prim = [2];
    for(let i = 2; i <= upTo; i++){
        let isPrime = true;
        for(let j = 0; j < prim.length; j++){
            if(i % prim[j] == 0){ isPrime = false; }
        }
        if(isPrime){ prim.push(i); }
    }
    return prim;
}