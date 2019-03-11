module.exports = function getZerosCount(number, base) {
  let devidersPows = primeFactorization(base);
  let arrLength = devidersPows.length;
  return findZeroes(number, arrLength);

  function findZeroes(number, length){
    let minSum = Infinity;
    for(let i = 0; i < length/2; i++){
      let devider = devidersPows[i], pow = devidersPows[length/2 + i], sum = 0;
      while(devider <= number){
        sum += Math.floor(number/devider);
        devider *= devidersPows[i];
      }
      sum = Math.floor(sum / devidersPows[length / 2 + i]);
      if(sum < minSum) minSum = sum;
    }
    return minSum;
  }
  
  function primeFactorization(base) {
    let deviders = [], pows = [];
    for (i = 2; i <= base / i; i++) {
      let counter = 0;
      while (base % i === 0) {
        base /= i;
        counter++;
      }
      if (counter) {
        deviders.push(i);
        pows.push(counter);
      }
    }
    if (base > 1) deviders.push(base);
    if (pows.length != deviders.length) pows.push(1);
    return deviders.concat(pows);
  }
}
