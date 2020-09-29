const user = {
    name: 'sun',
    age: 18,
    married: false,
    purchases: ['food', 'depression', 'laptop'],

    sayName: function(){
        console.log(this.name);
    }
};

user.sayName();