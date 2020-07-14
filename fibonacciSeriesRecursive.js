function myFibonacci(n){
    if(n == 0){
        return [0];
    } else if(n == 1){
        return [0, 1];
    } else{
        //Fibonacci elements with nth number
        let fibo = myFibonacci(n-1);
        let fiboNext = fibo[n-1] + fibo[n-2];
        fibo.push(fiboNext);
        return fibo;
    }
}

let resultArray = myFibonacci(10);
console.log(resultArray);