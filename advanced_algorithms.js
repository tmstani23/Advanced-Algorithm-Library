

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
var collection = {
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
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
 
  //collection = collectionCopy;
  
  //if there is no property create the property and update the value:
    if(collection[id][prop] === undefined && prop != "tracks") {
        console.log("prop undefined");
        collection[id][prop] = value;
        
    }
    else if (prop == "tracks") {
        if(collection[id][prop] === undefined) {
            collection[id][prop] = [];
            collection[id][prop].push(value);
        }
        else 
        {
            collection[id][prop].push(value);
        }
        
    }
    else {
    //update the value:
    collection[id][prop] = value;
    }


    console.log(collection);
    console.log(collectionCopy);
    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "Yo Mamma");
