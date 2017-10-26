

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
    //Create a working array for processing:
    var workingArr = [];
    //loop through the arguments:
    for (var i = 0; i < arguments.length; i++) {
        //push each argument element into the working array:
        workingArr.push(arguments[i]);
    }
    //Create function that calculates the symmetric difference between two arrays:
    function symDiff(arrayOne, arrayTwo) {
        var result = [];
        console.log(`array one: ` + arrayOne);
        console.log(`array two: ` + arrayTwo);
        //run for each function on array one that checks each element in the array:
        arrayOne.forEach((item) => {
            //if arrayTwo does not contain the arrayOne element and the result array does not either:
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                //push the arrayOne element to the result array:
                console.log(`adding from arrayOne ` + item);
                result.push(item);
            }
        });
        //run for each function on array two that checks each element in the array:
        arrayTwo.forEach((item) => {
            //if arrayOne does not contain the arrayTwo element and the result array does not either:
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                //push the arrayTwo element to the result array:
                console.log(`adding from arrTwo ` + item);
                result.push(item);
            }
        });
        //return the result array
        return result;
    }
  // Apply reduce method to working array, using the symDiff function
  //This will reduce the workingArray elements down to only those which fulfill the symDiff function:
  console.log(workingArr.reduce(symDiff))  
  return workingArr.reduce(symDiff);
    
}
//Example Call:  
//symmetricDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);


function checkCashRegister(price, cash, cid) {
    // Function that accepts purchase price as the first argument (price), 
    // payment as the second argument (cash), 
    // and cash-in-drawer (cid) as the third argument.
    
    // cid is a 2D array listing available currency.
    
    // Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
    // Return the string "Closed" if cash-in-drawer is equal to the change due.
    // Otherwise, return change in coin and bills, sorted in highest to lowest order.
    
    let change;
    let divRemain;
    let cidValue;
    let cidKey;
    let drawerChange;
    let totalCid = 0;
    let denomPos;
    
    const cashDenom = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01].reverse();
    let finalArr = [];
    //Calculate Change:
    change = cash - price;
    let remainingChange = change;
    
    //Loop through all Cid Objects:
    for (let i = cid.length - 1; i >= 0;  i--) {
        //Loop through each key and value (item) in the object:
        cid[i].forEach(function(item) {
            //If the item is not a number:
            if (typeof item != "number") {
                //cidKey = item;
                return null;
            }
            else {
                //totalCid += item;
                //console.log(`totalCid: ` + totalCid);
                //cidValue = item;
            }
        });
        //console.log(cid[i]); 
        //Loop through denom array and get denom position
        if (remainingChange / cashDenom[i] >= 1) {
            //console.log(cid[i])
            denomPos = cid[i];
            cidKey = denomPos[0];
            cidValue = denomPos[1];
            totalCid += cidValue;
            
            //run delinCod function if remainingChange > 0
            if (remainingChange > 0){
                delinCid(denomPos, cidValue, cidKey);
            }
        }
    }
    function delinCid(denomPos, cidValue, cidKey) {

    
        //Check if more cash available than req. change:
        if (cidValue - remainingChange > 0) {
            //console.log("true" + cid[denomPos]);
            //console.log("cidval" + cidValue);
           // console.log("cidkey" + cidKey);
           
            let toPush = [cidKey, remainingChange];
            finalArr.push(toPush);
            remainingChange = 0;

            //console.log(toPush);

        }
        else {
            //console.log(`more change needed than: ` + cidValue);
            //console.log(cidValue)
            let toPush = [cidKey, cidValue];
            finalArr.push(toPush);
            remainingChange = remainingChange - cidValue;

        }
      
    }   
    console.log(totalCid);
    console.log(change);
    if (totalCid - change < 0) {
        console.log("Insufficient Funds");
        return "Insufficient Funds";
    }
    if (totalCid == change){
        console.log("Closed");
        return "Closed";
    }
    // console.log(totalCid);
    // console.log(change);
    
    console.log(finalArr);
    return finalArr;

}
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.10],
  // ["QUARTER", 4.25],
  // ["ONE", 90.00],
  // ["FIVE", 55.00],
  // ["TEN", 20.00],
  // ["TWENTY", 60.00],
  // ["ONE HUNDRED", 100.00]]
  
//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 0.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0.0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 