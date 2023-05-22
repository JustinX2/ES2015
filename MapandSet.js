/*1. ([1,1,2,2,3,4]) returns a new Set with the values 1, 2, 3, and 4. Sets only contain unique values therefore duplicates will be removed.

2. [...new Set("referee")].join("") creates a Set with unique values, and then ... will then create an array. lastly join("") will concatenate array elements into a string. 
The output will be:"ref"

3.Even though the two arrays [1,2,3] are the same, Javascript treat them as different objects. 
for this reason, the output will be:

Map {Array(3) => true, Array(3) => false}

*/

function hasDuplicate(arr){
    return new Set(arr).size!==arr.length;
}

function vowelCount(str){
    let vowels = "aeiou";
    let vowelMap = new Map();

    for (let char of str.toLowerCase()) {
        if(vowels.includes(char)){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char)+1);
            } else {
                vowelMap.set(char,1);
            }
        }
    }
    return vowelMap;
}
