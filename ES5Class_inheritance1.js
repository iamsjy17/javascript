//클래스 개념 없이 프로토타입 특성으로만 상속 구현하기

//더글라스 크락포드가 자바스크립트 객체를 상속하는 방법으로 소개한 코드.
var create_object = function(o){
    function F() {}
    F.prototype = o;
    return new F();
};
//  _proto_          _proto_
//F ------> object o -------> Object.prototype

var person = {
    name : "song",
    getName : function(){
        return this.name;
    },
    setName : function(arg){
        this.name = arg;
    }
};

var student = create_object(person);
student.setName("ssong");
console.log(student.getName());

//위와 같이 부모 객체의 메서드를 그대로 상속받아서 사용할 수 있고, 자신의 메서드를 재정의 혹은 추가로 구현할 수 있다.
//이때, 자바스크립트에서는 범용적으로 extend()라는 이름의 함수로 자산이 원하는 객체 혹은 메서드를 추가한다.

function extend(obj, prop){
    if(!prop){prop = obj; obj = this;}
    for(var i in prop) obj[i] = prop[i];
    return obj;
}

var studentAdded = {
    setAge : function(age){
        this.age = age;
    },
    getAge : function(){
        return this.age;
    }
};

extend(student, studentAdded);
student.setAge(25);
console.log(student.getAge());


//한 단계 더 상속을 구현해보도록 하겠다.
//student를 상속받은 HiSchoolStudent를 구현하겠다.

var hiSchoolStudent = create_object(student);

var hiSchoolStudentAdded = {
    grade : 3,
    setGrade : function(grade){
        this.grade = grade;
    },
    getGrade : function(){
        return this.grade;
    }
};

extend(hiSchoolStudent, hiSchoolStudentAdded);
console.log(hiSchoolStudent.getName());
console.log(hiSchoolStudent.getAge());
console.log(hiSchoolStudent.getGrade());