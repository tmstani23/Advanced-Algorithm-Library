

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
