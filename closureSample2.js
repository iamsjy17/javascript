/*
특정 함수에 사용자가 정의한 객체의 메서드 연결하기.
1. 사용자 입력 함수 실행.
*/
function HelloFunc(func){
    this.greeting = "hello";
}

HelloFunc.prototype.call = function(func){
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting){
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

/*
2. 사용자가 원하는 인자를 더 넣어서 호출하기
정해진 형식의 함수를 콜백해주는 라이브러리가 있을 경우, 그 정해진 형식과는 다른 형식의 사용자 정의 함수를 호출할 때
유용하게 사용된다.
*/

function saySomething(obj, method, name){
    return(function(greeting){
        return obj[method](greeting, name);
    });
}

function newObj(obj, name){
    obj.func = saySomething(this, "who", name);
    /*
    obj.func = 
    function(greeting){
        return (newObj의 객체).who(greeting, name);
    }
    */
   return obj;
}

newObj.prototype.who = function(greeting, name){
    console.log(greeting + " " + name);
}

var obj1 = new newObj(objHello, "song");
/*
 objHello.func = 
    function(greeting){
        return (newObj의 객체).who(greeting, name);
    }
 */

 obj1.call();
