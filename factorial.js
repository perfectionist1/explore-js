
    function my_factorial(num){
        let factorial = 1;
        for(var i = 1; i<=num; i++){
            factorial *= i;
        }
        return factorial;
    }

    var result = my_factorial(4);
    console.log(result);

    function myFact(num2){
        let factDigit = 1;
        let i = 1;
        while(i<=num2){
            factDigit *= i;
            i++;
        }
        return factDigit;
    }
    var res = myFact(5);
    console.log(res);