function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return n + " is not a prime number";
        }
    }
    return n + " is a prime number";
}
let resultPrimeNumber = isPrime(32);
console.log(resultPrimeNumber);