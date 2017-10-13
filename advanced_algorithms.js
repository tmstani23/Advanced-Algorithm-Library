

function telephoneCheck(str) {
    //Return true if the passed string is a valid US phone number.

    //Create a dictionary to hold the correct match patterns:
    const valDict = {};

    //Save regex patterns for each valid number to the dictionary:
    valDict.validateOne = /^\d{10}$/;
    //console.log(valDict.validateOne.test('5555555555'));
    valDict.validateThree = /^\d{3}\s\d{3}\s\d{4}$/;
    //console.log(valDict.validateThree.test("555 555 5555"));
    valDict.validateFour = /^\d{3}-\d{3}-\d{4}$/;
    //console.log(valDict.validateFour.test("555-555-5555"));
    valDict.validateFive = /^([(]\d{3}[)]\s\d{3}-\d{4})$/;
    //console.log(valDict.validateFive.test("(555) 555-5555"));
    valDict.validateSix = /^([(]\d{3}[)]\d{3}-\d{4})$/;
    //console.log(valDict.validateSix.test("(555)555-5555"));
    valDict.validateTwo = /^1\s\d{3}\s\d{3}\s\d{4}$/;
    //console.log(valDict.validateTwo.test("1 555 555 5555"));
    valDict.validateSeven = /^1\s\d{3}-\d{3}-\d{4}$/;
    //console.log(valDict.validateSeven.test("1 555-555-5555"));
    valDict.validateEight = /^1\s[(]\d{3}[)]\s\d{3}-\d{4}$/;
    //console.log(valDict.validateEight.test("1 (555) 555-5555"));
    valDict.validateNine = /^1[(]\d{3}[)]\d{3}-\d{4}$/;
    //console.log(valDict.validateNine.test("1(555)555-5555"));

    //loop through each pattern in the dictionary:
    for(key in valDict) {
    //Return false if the input string is too long or too short:
    if(str.length > 16 | str.length < 8) {
        console.log("false");
        return false;
    }
    //Return true if the input string matches one of the regex patterns in the dictionary:
    else if(valDict[key].test(str)) {
        console.log(valDict[key] +` is true`);
        return true;
    }
    }
    //If the input string is not in the dictionary return false:
    console.log("false");
    return false;

}
//Example Call:  
//telephoneCheck("(555)555-5555");
  


// Setup - All part of the validateRecords function below:
let collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
const collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
 
  //Update the tracks property if it exists.
   if (prop == "tracks") {
        //If the value field is empty delete the tracks property:
        if (value === "") {
            console.log('empty val: deleting property');
            delete collection[id][prop];
        }
        //If the tracks property doesn't exist in the collection create it:
        else if(collection[id][prop] === undefined) {
            console.log("track:prop undefined")
            //Create an empty array to hold the tracks:
            collection[id][prop] = [];
            //Push the track value into the end of the array:
            collection[id][prop].push(value);
        }
        else 
        //Add the tracks to the end:
        {
            console.log("updating track value")
            collection[id][prop].push(value);
        }
    }
    //If the property isn't a track but still has an empty value:
    else if (value === ""){
        //Delete the property:
        console.log("deleting prop because empty val");
        delete collection[id][prop];
    }
    //Else update the collection with the new property and value:
    else {
    //update the value:
    collection[id][prop] = value;
    }
    console.log(collection);
    console.log(collectionCopy);
    return collection;

}
//Example Call
//updateRecords(1245, "tracks", "Love Me Baby");

function symmetricDiff(args) {
    //Note: must turn into a sub function
    let arrLength = 0;
    let newArr = [];
    let finalArr = [];
    let workingArr = [];
    let recursionI = 0;
        for(i=0;i<arguments.length; i++) {
        workingArr.push(arguments[i]);
   }
    const iterateLength = 0;
   //console.log(workingArr);
   let flattened = function(a, b) {
        
        if(a.length > b.length) {
            arrLength = a.length;
        }
        else {
            arrLength = b.length;
        }
        console.log(a)
        console.log(b)
        //check if a contains elements of b
        for (i = 0; i < arrLength; i++) {
            //check arr2 to verify if it doesn't contain current index element of arr1:
            var checkArgA = a.indexOf(b[i]) === -1;
            //console.log(checkArgA)
            //check arr2 to verify if it doesn't contain current index element of arr1:
            var checkArgB = b.indexOf(a[i]) === -1;
            //if the element isnt in arr0:
            if(checkArgA && b[i] !== undefined){
                if(newArr.indexOf(b[i]) === - 1) {
                    //push the element to the new array
                    console.log("pushed number" + b[i])
                    newArr.push(b[i]);
                }
                // else {
                //     
                // }
                
            }
            if(checkArgB && a[i] !== undefined){
                if(newArr.indexOf(a[i]) === - 1) {
                    //push the element to the new array
                    console.log("pushed number" + a[i])
                    newArr.push(a[i]);
                }
                
                else {
                    newArr.splice(a[i], 1);
                }
            }
        }
        recursionI++;
        if(recursionI < workingArr.length -1) {
            console.log("iterating")
            flattened(newArr, workingArr[recursionI+1]);
        } else {
            return newArr;
        }
            
    }
    if(iterateLength === 0) {
        flattened(arguments[0], arguments[1]);
    }
   
   
   console.log(newArr)


    // let arg0 = arguments[0];
    // let arg1 = arguments[1];
    // let arg2 = arguments[2];
    
    // let newArr = [];
    // let finalArr = [];
    // let arrLength;

    // //set the arrLength variable to the largest of the input arguments
    // if (arg0.length > arg1.length) {
    // arrLength = arg0.length;
    // }
    // if (arg2 != undefined && arg2.length > arg1.length) {
    // arrLength = arg2.length;
    // }
    // else {
    // arrLength = arg1.length;
    // }
    // //loop i times based on the longest array:
    // for (i = 0; i < arrLength; i++) {
    // //check arr2 to verify if it doesn't contain current index element of arr1:
    // var checkArg1 = arg1.indexOf(arg0[i]) === -1;
    // //check arr2 to verify if it doesn't contain current index element of arr1:
    // var checkArg0 = arg0.indexOf(arg1[i]) === -1;
    // //if the element isnt in arr0:
    //     if(checkArg1 && arg0[i] !== undefined){
    //         if(newArr.indexOf(arg0[i]) === - 1) {
    //             //push the element to the new array
    //             newArr.push(arg0[i]);
    //         }
           
    //     }
    //     //if the element isnt in arr1:
    //     if(checkArg0 && arg1[i] !== undefined){
    //         if(newArr.indexOf(arg1[i]) === - 1) {
    //             //push the element to the new array
    //             newArr.push(arg1[i]);
    //         }
    //     }
    // }
    // console.log(newArr);
    // //If a third array was passed into the function check it:
    // if(arg2 != undefined) {
    //     //loop i times based on the longest array:
    //     for (i = 0; i < arrLength; i++) {
    //     //check newArr to verify that it doesn't contain current index element of arg2:
    //     var checkNewArr = newArr.indexOf(arg2[i]) === -1;
    //     //check arg2 to verify that it doesn't contain current index element of newArr:
    //     var checkArg2 = arg2.indexOf(newArr[i]) === -1;
    //     //if the element isnt in arr0:
    //         if(checkNewArr && arg2[i] !== undefined){
    //             //if the final array doesn't already contain the element:
    //             if(finalArr.indexOf(arg2[i]) === - 1) {
    //                 //push the element to the new array
    //                 finalArr.push(arg2[i]);
    //             }
                
    //         }
    //         //if the element isnt in arr1:
    //         if(checkArg2 && newArr[i] !== undefined){
    //             //if the final array doesn't already contain the element:
    //             if(finalArr.indexOf(newArr[i]) === - 1) {
    //             //push the element to the new array
    //             finalArr.push(newArr[i]);
    //             }
    //         }
    //     }
    // }   
    // //If there are only two input arrays return newArr:
    // else {
    //     return newArr;
    // }
    // console.log(finalArr);
    // //console.log(newArr);
    // return finalArr;
    
  
  }
  
  symmetricDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
