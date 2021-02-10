//class creation
/* class ClassName{
    constructor(name,age,score)//here give the parameters we want to use in below code
    {
        this.name=name;
        this.age=age;
        this.score=score;
    }
    say(){
        return `hello ${this.name},${this.age},${this.score}`
    }
}

//create the objects of the class using
//syntax let varname=new classname(parameters);
let v=new ClassName('firoz',34,4343);
console.log(v.say()); */


/* class Name{
     constructor(j){
         this.j=j;
     }
     hg(){
         return this.j;

     }
}
let me=new Name("shaik");
console.log(me.hg());
console.log(typeof Name);
console.log(Name===Name.prototype.constructor);
console.log(Name.prototype.hg);
console.log(Object.getOwnPropertyNames(Name.prototype)); */

/* function A(name){
    this.name=name;
}
A.prototype.saj=function(){
    return this.name;
}
let u=new A('jfjfj');
console.log(u.saj()); */

/* class U{
    constructor(){

    }
}
console.log(U.constructor);

//here create the class expressionby storing it in the  variable
let h=class {
    constructor(name){
        this.name=name;
    }
    sa(){
        return this.name;
    }
};
console.log(new h('firoz').sa());

//now create the classes dynamically by creating and return it using return function
function Mlk(p){
    return class{
        sad(){
            return p;
        };
    };
}
let hs=new Mlk('shaikfr');
console.log(new hs().sad()); */
/* class t{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(bal){
        if(bal.length<5){
            console.log("name is too short");
        }
        this._name=bal;

    }
}
let q=new t('firozbabu');
console.log(q.name)
let r=new t('');
console.log(r.name); */

/* class Button{
    constructor(value){
        this.value=value;
    }
    click=()=>{console.log(this.value);}
}

let bit=new Button('helo hai vanakam');
setTimeout(bit.click,1000); */

class A{
    constructor(name){
        this.name=name;
    }
    sa(){
        return "hello",this.name;
    }
}

let t=new A('firozbabu');
console.log(t.sa());


//static methods in the class
//we can use the `static` keyword in the method in class
/* class Ab{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static d(){
        return `name is ${this.name}, age is ${this.age}`;
    }
}
let y=new Ab('firozbabu',74);
console.log(y.d()); */


