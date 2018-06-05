var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Jonas',
    sayHi: () =>{
        console.log(`Hi ${this.name}`);
    },
    sayhiAlt () {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
};


function square (x) {
    return x * x;
}