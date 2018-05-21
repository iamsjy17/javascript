//closure 예제
function outerFunc(){
    var x = 1;

    return function(){
        x = x * 2;
        console.log(x);
    };
};

var new_func = outerFunc();
// outerFunc 실행 컨텍스트 종료

new_func();

