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

var song = Person();