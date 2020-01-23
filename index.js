'use strict'
'timer.js'
class User{
	
  // constructor(name1,name2){
  //   this.fname=name1;
  //   this.lname=name2;
  // }
	get name(){
		return this._name;
	}
	set name(value){
		this._name=value;
	}
  sayHi(){
    return 'My Name is:-'+this.name;
  }
}
//console.log(User.prototype.sayHi);
let myObj=new User();
myObj.name='Chandra Prakash Pal';
console.log(myObj.sayHi());