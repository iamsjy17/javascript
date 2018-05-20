//클래스역할을 하는 함수로 상속하기

var Person = function(name){
    this.name = name;
};

Person.prototype.setName = function(name){
    this.name = name;
};

Person.prototype.getName = function(){
    return this.name;
};

var Student = function(name, _calss){
    //부모클래스 생성자 호출
    Person.call(this, name);
    this.class = _calss;
};

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.getClass = function(){
    return this.class;
};

Student.prototype.setClass = function(_calss){
    this.class = _calss;
};

var song = new Student("song", 3);
