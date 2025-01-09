 //brute force
// var groupAnagrams = function(strs) {
//     let result = [];
//     let seen = new Array(strs.length).fill(false);

//     for (let i=0; i<strs.length; i++){
//         if (seen[i]) continue;
//         let currentGroup = [strs[i]];
//         //because if thow strings are anagrams when they get sorted they will be equal and similar
//         let sortedStr1 = strs[i].split('').sort().join('');

//         for (let j=i+1; j<strs.length; j++) {
//             if(!seen[j]) {
//                 sortedStr2 = strs[j].split('').sort().join('');

//                 if(sortedStr1 === sortedStr2) {
//                     currentGroup.push(strs[j])
//                     seen[j] = true;
//                 }
//             }
//         }
//         result.push(currentGroup);
//     }
//     return result;
// };

//optimized
//use hash maps or objects to store the sorted version of each string

var groupAnagrams = function(strs) {
    let dict = {}
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join('');
        if(!dict[sortedStr]) {
            dict[sortedStr] = [strs[i]];
        } else {
            dict[sortedStr].push(strs[i]);
        }
    }

    return Object.values(dict);
};