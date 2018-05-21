//Memoization이란 계산 결과를 저장해 놓아 이후 다시 계산할 필요 없이 사용할 수 있게 한다는 컴퓨팅 용어이다.
//말 그대로 함수의 키값에 결과를 저장해두고 이후 계산없이 사용할 수 있다.
//왠지 아래 함수보다는 input, func 값으로 key값을 만들어서 하면 이후 똑같은 호출 시 계산없이해서 좋을 거 같다.
//jQuery에서는 data()라는 메서드로 이 메모이제이션 패턴을 사용하였다.

function Calculate(key, input, func){
    Calculate.data = Calculate.data || {};
    if(!Calculate.data[key]){
        var result;
        result = func(input);
        Calculate.data[key] = result;
    }
    return Calculate.data[key];
}

var result;

result = Calculate(1,5,function(input){
    return input * input;
});
console.log(result);

result = Calculate(2, 5, function(input){
    return input * input /4;
});
console.log(result);

console.log(Calculate(1));
console.log(Calculate(2));