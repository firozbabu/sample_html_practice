 //there are two ways to create the object in js
let first=new Object();//this is using object construcor
let sec={};//this is using object literal
//like dict in python
let fir={name:"firoz",age:20};
//add the values using the syntax 
//object_name.name=value
/* fir.issi=true;
alert(fir.name);
alert(fir.age);
alert(fir.issi);
delete fir.issi; */
//we cam also use mutiword as a key in object
//but that must be quoted
/* let s={name:'fi',age:30,'firb babb':"shaik"};
console.log(s.name,s.age,s['firb babb']);
s['ilaka']='maphilia';
//console.log(s);
//console.log(s['ilaka']);
//we can access the object values using the dot notation.
//and the square braces
let p='vsls';
s[p]="vvala";
//console.log(s);
let b='gd';
let bg={[b]:5};
console.log(bg.gd);  */
/* function f(name,age){
    return {name,age}//here we write a like this or
    //{name,age} or we can use both like this 
    // {name,age:age (or) age:30}
}
let u=f('fir',43);
console.log(u.name);
console.log(u.age);
console.log(u.fd); */

/* let obj={let:1,for:2,return:6};
console.log(obj.let);
console.log(obj.for);
console.log(obj.return); */

/* let j={0:1}
console.log(j[0]);
console.log(j['0']);
console.log(j.__proto__)
console.log(j.no===undefined);
//or use 'in' operator
console.log('k' in j);
let y={te:undefined};
console.log(y.te);
console.log('kjh' in y);
let obj={58:1,33:2,6:6};
for( let k in obj){
    console.log(k);
    console.log(obj[k]);
} */

/* function multipliernum(obh){
    for(let s in obh){
        if(typeof obh[s]==='number'){
            obh[s]*=2;
        }
    }
    return obh;
}
let o={width:200,height:300,title:"my menu"}
let result=multipliernum(o)
console.log(result); */
/* 
let salaries={hohn:100,ann:160,pete:130};
sum=0;
for(let j in salaries){
    sum=sum+salaries[j];
}
console.log(sum);



function A(obj){
    for(let u in obj){
        return false;
    }
    return true;
}
let i={name:63};
console.log(A(i));
*/
/* let user={};
user.name='john';
user.surname='Smith';
user.name='pete';
user["name"]='firoz';
console.log(user);
let fg=user;
let f="string";
let st=f;

let first_object={1:1,2:2,3:3};
let copy_object=first_object;
first_object['5']=4;
console.log(first_object);
console.log(copy_object);
let a={};
let b={};
console.log(a===b);
let hgy={3:4,9:9,4:0};
let clone={};
for(let i in hgy){
    clone[i]=hgy[i];
}
console.log(clone);

let rt={a:'firoz',b:'babu'}
let copy=Object.assign({},rt);
console.log(rt);
console.log(copy);
copy.c='hfdgdf';
console.log(copy);
console.log(rt); */

/* function f(h,i,r,o,z){
    this.h=h;
    this.i=i;
    this.r=r;
    this.o=o;
    this.z=z;
}
let vare=new f(67,88,2,23,45)
console.log(vare.h); */

//nested cloning in objects
//and nested objects
let jdk={name:'john',sizes:{height:182,width:50}};
console.log(user.sizes.height);
