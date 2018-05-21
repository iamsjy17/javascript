//private 변수, public 함수로 구현하기

//name을 클로저로 접근하면서 캡슐화의 효과를 얻는다.
//public 메서드가 클로저 역할을 하고, private 멤버인 name에 접근한다.
//자바스크립트에서 할 수 있는 기본적인 정보 은닉 방법.
//*모듈 패턴

var Person = function(arg){
    var name = arg ? arg: "song";
    return {
        getName: function(){
            return name;
        },
        setName: function(arg){
            name = arg;
        }
    };
}

var song = Person(); // or var song = new Person();
console.log(song.getName());

//그러나 private 변수가 객체나 배열인 경우(참조) 외부에서 get~~()을 통해서 리턴받은 값을 손쉽게 수정할 수 있는 문제가 있다.
//객체를 반환하는 경우 반드시 깊은 복사를 해주어야 한다.


//그리고 위에 기본 캡슐화 예제는 사용자가 객체를 리턴받는데, 이 객체는 Person 함수 객체의 프로토타입에는 접근할 수 없다.
//때문에 Person을 부모로 하는 프로토타입을 이용한 상속을 구현하기에는 용이하지 않다.
//이를 보완하기 위해 함수를 반환한다.

var Person = function(arg){
    var name = arg ? arg: "song";

    var Person = function(){}
    Person.prototype = {
        getName: function(){
            return name;
        },
        setName: function(arg){
            name = arg;
        }
    };
    
    return Person;
}();

var song = new Person();
console.log(song.getName());
