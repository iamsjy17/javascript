// var year = 2018;
// var month = 5;
// var day = 12;

// var sayDate = function(){
//     console.log(year + "년 " + month + "월 " + day + "일");
// };

// sayDate();

//위 예제에서는 전역변수를 사용해서 여러가지로 문제가 될 수가 있다.
//1. 다른 함수에서 전역 변수의 값을 변경하여 오류가 발생할 수 있다.
//2. 실수로 같은 이름의 변수가 재정의 될 수 있다.
//3. ..

var sayDate = function(){
    var year = 2018;
    var month = 5;
    var day = 12;
    return (function(year, month, day){
        console.log(year + "년 " + month + "월 " + day + "일");
    });
}();

sayDate();

//클로저를 활용해서 전역변수를 추가적인 스코프에 넣고 사용하면 이런 문제를 해결할 수 있습니다.
//16번째 줄에 sayDate에 익명의 함수를 즉시 실행시켜 반환되는 함수를 할당합니다.
//반환되는 이 함수는 클로저가 되고, 이 클로저는 자유 변수 year, month, day를 참조할 수 있다.