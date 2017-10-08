
function telephoneCheck(str) {
//Return true if the passed string is a valid US phone number.
let isNum = /\d/g;
let isSpace = /\s/g;
let isDash = /-/g;
let numToDash = /\d-/g;
let dashToNum = /-\d/g;
let delinToDash = /[(]-|-[)]/g;
console.log(delinToDash.test("-)"));
// let parenthToDash = /('|")-/g;
// let dashToParenth = /-('|")/g;
//console.log(parenthToDash.test("'-"));
//console.log(dashToParenth.test("-'"));
//match num followed by alpha of any case
let isAlpha = /[a-z]/gi;
//console.log(alphaReject.test(str));
// console.log(notNum.test(str));
console.log(str.length);
   
if(isAlpha.test(str)) {
    console.log("reject because is alpha")
    return false;
}
if(isSpace.test(str)) {
    console.log("is space");
    if(isDash) {
        console.log("reject contains spaces and dashes");
        return false;
    }
}
if(str.length <= 8 || str.length > 16) {
    console.log("reject incorrect number length");
    return false;
}
if(!isNum.test(str)) {
    console.log('reject not a number match')
    return false;
}
if(numToDash.test(str) ) {
    console.log("number before dash")
    if(!dashToNum.test(str)) {
        console.log("reject not a number after a dash")
        return false
    }
}
if(delinToDash.test(str) === true) {
    console.log("delin before or after dash");
    return false;
}
    
else {
       console.log("valid");
       return true;
}
    
}
  
  
  
  telephoneCheck("1 (555) 555-5555");
  