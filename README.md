# Advanced-Algorithm-Library
A library of algorithms of advanced, to semi-advanced, difficulty(up for interpretation!)


### The algorithms are broken up as functions within the advanced_algorithms.js file.  Feel free to clone or copy them for use in personal projects.

# List of Algorithms:

## Object Functions:


**function updateRecords(id, prop, value):** This function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.  The function always returns the entire collection object.

There are several rules for handling incomplete data:
If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.  If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.  If value is empty (""), delete the given prop property from the album.

Example Call: 
updateRecords(1245, "tracks", "Love Me Baby");

Output: 
The original collection object: 

Object {1245: Object, 2468: Object, 2548: Object, 5439: Object}

1245:Object {artist: "Robert Palmer", tracks: Array(0)}
artist:"Robert Palmer"

tracks:Array(0) []

2468:Object {album: "1999", artist: "Prince", tracks: Array(2)}

2548:Object {album: "Slippery When Wet", artist: "Bon Jovi", tracks: Array(2)}

5439:Object {album: "ABBA Gold"}

The modified collection object (Love Me Baby Track Added to 1245 object):

1245:Object {artist: "Robert Palmer", tracks: Array(1)}

artist:"Robert Palmer"

tracks:Array(1) ["Love Me Baby"]

2468:Object {album: "1999", artist: "Prince", tracks: Array(2)}

2548:Object {album: "Slippery When Wet", artist: "Bon Jovi", tracks: Array(2)}

5439:Object {album: "ABBA Gold"}

**function makePerson:** This function creates an object constructor (person) with the following methods:

getFirstName(),
getLastName(),
getFullName(),
setFirstName(first),
setLastName(last),
setFullName(firstAndLast)

Example Call:
makePerson();

Output:
Stanislav
Bob Stanislav


## Array Functions:

**function symmetricDiff(args):**This function takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

Example Call: 
symmetricDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);

Output: [7, 4, 6, 2, 5, 9, 8, 1]

**function checkCashRegister(price, cash, cid):**  This function accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The function returns the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, it returns change in coin and bills, sorted in highest to lowest order.

Example Call: 
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 

Output: 
0:Array(2) ["TWENTY", 60]
1:Array(2) ["TEN", 20]
2:Array(2) ["FIVE", 15]
3:Array(2) ["ONE", 1]
4:Array(2) ["QUARTER", 0.5]
5:Array(2) ["DIME", 0.2]
6:Array(2) ["PENNY", 0.04]


**function updateInventory(arr1, arr2):** This function Compares and updates the inventory stored in a 2D array against a second 2D array.  It updates the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array is in alphabetical order by item.

Example Call: 
updateInventory(curInv, newInv);

Output:
0: Array(2) [88, "Bowling Ball"]

1: Array(2) [2, "Dirty Sock"]

2: Array(2) [3, "Hair Pin"]

3: Array(2) [3, "Half-Eaten Apple"]

4: Array(2) [5, "Microphone"]

5: Array(2) [7, "Toothpaste"]

**function orbitalPeriod(arr):** This function returns a new array that transforms the input arr average altitude value into their orbital periods.

Example Call:
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7},{name: "moon", avgAlt: 378632.553}]); 

Output:
Array(3) [Object, Object, Object]

0: Object {name: "iss", orbitalPeriod: 5557}

1: Object {name: "hubble", orbitalPeriod: 5734}

2: Object {name: "moon", orbitalPeriod: 2377399}

**function pairwise(arr, arg):** This function when given an array arr, finds element pairs whose sum equal the second argument arg and returns the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, it returns the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

Example Call:
pairwise([1,4,2,3,0,5], 7);

Output:
11

## String Functions:

**function telephoneCheck(str):**
Return true if the passed string is a valid US phone number.

Example call:
telephoneCheck("(555)555-5555");

Output: true

**function permAlone(str):** This function returns the number (int) of total permutations of the provided string that don't have repeated consecutive letters. It Assumes that all characters in the provided string are each unique.
    
For example: aab should return 2
because it has 6 total permutations (aab, aab,aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Example Call: 
permAlone("abcdefa");

Output:
3600 non-repeating permutations





