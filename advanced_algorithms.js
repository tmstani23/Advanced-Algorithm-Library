

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
    let totalCid = 0;
    let denomPos;
    let denomAmount;
    
    const cashDenom = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01].reverse();
    let finalArr = [];
    //Calculate Change:
    change = cash - price;
    let remainingChange = change;
    
    //Loop through all Cid Objects (highest to lowest):
    for (let i = cid.length - 1; i >= 0;  i--) {
        
        //Check there is more remaining change than the current cash denomination amount
        //Ex: rem change: 54.00 / cashDenom: 20.00 = 2.7 - >= 1
        if (remainingChange / cashDenom[i] >= 1) {
            
            //set denomPos to current cash in draw element:
            denomPos = cid[i];
            //set cidKey and value to current cash in draw object key/value:
            cidKey = denomPos[0];
            cidValue = denomPos[1];
            //set totalCid to add cidValue to its current value in a running tally:
            totalCid += cidValue;
            //set denomAmount to current element from the cashDenom array:
            denomAmount = cashDenom[i];
            //Call function to deliniate from the cash in drawer:
            delinCid(denomPos, denomAmount);
            //Call function to round remaining change:
            moneyRound(remainingChange);
           
        }
    }
    
    //Round remaining change to nearest penny:
    function moneyRound(num) {
        return remainingChange = (Math.ceil(num * 1000) / 1000);
    }

    //Function that delineates cash in drawer in the proper amounts:
    function delinCid(denomPos, denomAmount) {
        let pushAmount;
        let modRemain;
        let toPush = [];
        
        //Check if more cash in drawer available than remaining change needed:
        if (cidValue - remainingChange > 0) {
            //set modRemain to equal the result after division of remainingChange and denomAmount
            let modRemain = remainingChange % denomAmount;
            //If there is no remainder:
            if(modRemain == 0) {
                //set push amount to equal current remaining change;
                pushAmount = remainingChange;
            }
            //If some remains after division:
            else {
                //set push amount to equal diff / denom amount:
                //ex: (5.74 - 0.74) / 5 = 1
                pushAmount = (remainingChange - modRemain) / denomAmount;
                //set final push amount to answer above * denom amount:
                //ex: 1 * 5 = 5;
                pushAmount = pushAmount * denomAmount;
            }
            
            //save key tag and push amount into an array:
            toPush = [cidKey, pushAmount];
            //Add the toPush array to final array:
            finalArr.push(toPush);
            //set remaining change to be the amount remaining after division:
            //ex: 5.74 = 0.74
            remainingChange = modRemain;
        }
        
        //else if some other amount, less or equal, in drawer cash: 
        else {
            //Create new array that holds cidKey and current cidValue;
            let toPush = [cidKey, cidValue];
            //Push new array to final:
            finalArr.push(toPush);
            //Subtract cidValue from remaining change:
            remainingChange = remainingChange - cidValue;
        }
    }   
    //if there is less total cash in drawer than change needed:
    if (totalCid - change < 0) {
        console.log("Insufficient Funds");
        return "Insufficient Funds";
    }
    //If the total cash in drawer is equal to change needed:
    if (totalCid == change){
        console.log("Closed");
        return "Closed";
    }
    
    //return final array:
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
  
//Example Call:
//checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 


function updateInventory(arr1, arr2) {
    // Compare and update the inventory stored in a 2D array against a second 2D array. 
    // Update the current existing inventory item quantities (in arr1). 
    // If an item cannot be found, add the new item and quantity into the inventory array. 
    // The returned inventory array should be in alphabetical order by item.
    let finalArr = [];

    //Loop through each element of arr 1:
    for (i=0; i < arr1.length; i++) {
    
        //Set variables to hold current arr1 element, value and key:
        let arr1Element = arr1[i];
        let arr1Value = arr1[i];
        arr1Value = arr1Value[0];
        let arr1Key = arr1[i];
        arr1Key = arr1Key[1]
        
        //loop through each arr2 element:
        arr2.forEach((element) => {
           
            //Set variables to hold current arr2 key/value:
            arr2Key = element[1];
            arr2Value = element[0];
           
            //Check if arr1 element includes each arr2 key
            if(arr1[i].includes(arr2Key)) {
                //Update arr1 element value with sum of arr1 element and arr2 element:
                //ex: A[0] = A[0] + B[0];
                arr1Value = arr1Value + arr2Value;
                //Update the item quantity with the new value:
                arr1Element[0] = arr1Value;
                //Push updated matching arr1 elements into the final array:
                finalArr.push(arr1[i]); 
                //Delete the key/vals out of the current arr2 element:
                element.splice(0);
            }
        });

        //If the final array doesn't include the current arr1 element:
        if(!finalArr.includes(arr1[i])) {
            //Add current arr1 element to final array:
            finalArr.push(arr1[i]);
        };
    };   
    
    //Add the non-empty arr2 elements to the final array:
    arr2.forEach((element) => {
        if(element.length != 0) {
            finalArr.push(element);
        }; 
    });  
    
    //Sort A elements alphabetically by Key:
    finalArr.sort(function(a, b){
        if(a[1] < b[1]) return -1;
        if(a[1] > b[1]) return 1;
        return 0;
    });
    
    //Return final array:
    console.log(finalArr);
    return finalArr;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [1, "Hair Pin"],
    [2, "Dirty Sock"],
    [5, "Microphone"]
];

var newInv = [
    [7, "Toothpaste"],
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
];
//Example Call:
//updateInventory(curInv, newInv);
