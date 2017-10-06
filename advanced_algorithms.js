
function telephoneCheck(str) {
//Return true if the passed string is a valid US phone number.
let isNum = /\d/g
let numToDash = /\d*-/g;
//match num followed by alpha of any case
let isAlpha = /[a-z]/gi;
//console.log(alphaReject.test(str));
// console.log(notNum.test(str));
console.log(str.length);
   
if(isAlpha.test(str)) {
    console.log("reject because is alpha")
    return false;
}
if(str.length <= 8 || str.length > 16) {
    console.log("incorrect number length");
    return false;
}
else if(isNum.test(str) === false) {
    console.log('not a number match')
    
    if(numToDash.test(str) === false) {
        console.log("reject not a number next to dash")
        
        console.log("invalid")
        return false
    }
  

}
    
else {
       console.log("valid");
       return true;
}
    
}
  
  
  
  telephoneCheck("1 (555) 555-5555");
  