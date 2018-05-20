var Person = function(arg){
    this.name = arg;
};

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.setName = function(name){
    this.name = name;
}

var me = new Person("song");
console.log(me.getName());