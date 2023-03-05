// Question 1
/**Mutating array methods are methods that changes the original array when there is
 * a change while 
*Non-mutaing array methods returns a new array with new changes
*/
/** Examples of mutating array methods - 
1. Array.prototype.pop()
2. Array.prototype.push()
3. Array.prototype.shift()
4. Array.prototype.unshift()
5. Array.prototype.reverse()
*/
/**Examples of non-mutating array method
1. Array.prototype.slice()
2. Array.prototype.concat()
3. Array.prototype.map()
4. Array.prototype.filter()
5. Array.prototype.includes()
 */

// Question 2
const languages = ['C#','JavaScript','Ruby','PHP','Python'];
// console.log(typeof languages);

// 1 Add ‘Kotlin’ to the end of the array
languages.push('Kotlin');
// console.log(languages);

// 2 Add ‘Java’ after ‘Ruby’
languages.splice(3,0,'Java');
// console.log(languages);

// 3 Remove the first item in the array
languages.shift();
// console.log(languages);

// 4 Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala','Swift');
// console.log(languages);

// 5 Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5,1,'Go', 'Rust');
console.log(languages);

// Question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit;
}
console.log(changeFruit(fruit));
// Result - [ 'apple', 'mango', 'orange' ]

// Question 4
function maxValue(array){
    return Math.max(...array);
}

console.log(maxValue([4,5,10,-2,14]));

// Question 5
function valTimesIndex(numArray){
    let newArray = [];
    for(let num of numArray){
        newArray.push(num * numArray.indexOf(num));
    }
    return newArray;
}
console.log(valTimesIndex([5,10,15]));
