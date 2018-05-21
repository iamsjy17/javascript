//메모이제이션 기법을 적용한 피보나치 수열

var fibo = function(){
    var cache = {'0' : 0, '1': 1};

    var fibo = function(n){
        if(typeof(cached[n]) === 'number'){
            result = cached[n];
        } else {
            result = cached[n] = fibo(n-1) + fibo(n-2);
        }
        return result;
    }
    return func;
}();