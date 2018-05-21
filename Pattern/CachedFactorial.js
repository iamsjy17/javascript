//클로저를 활용한 앞서 실행한 factorial 값을 저장하는 factorial 함수
var factorial = function(){
    var cache = {'0':1};
    //연산을 수행하는 과정에서 캐시에 저장된 값이 있으면 곧바로 그 값을 반환한다.
    var factorial = function(n){
        var result = 0;
        if(typeof(cache[n]) === 'number'){
            result = cache[n];
        } else {
            result = cache[n] = n * factorial(n-1);
        }
        return result
    };

    return factorial;
}();

console.log(factorial(10));
console.log(factorial(12));