// let arr= [7,10,6]
// console.log(arr)
// arr.push(12)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(45)
// console.log(arr);
// arr.shift()
// console.log(arr);

// let myvoid = [1,3,77,56,99,66,46,34,12,90]

// function filterEven(arr){
//     let evenNumber= []
//     for ( let i= 0 ;i< arr.length ; i++){

//     if (arr[i] % 2 == 0) {
//         evenNumber.push(arr[i]);
//     }
// }
//     return evenNumber
// }
// console.log(filterEven(myvoid));

// let myvoid = []

// function filterEven(arr){
//     let evenNumber= []
//     for ( let i= 0 ;i< arr.length ; i++){

//     if (arr[i] % 2 == 0) {
//         evenNumber.push(arr[i]);
//     }
// }
//     return evenNumber
// }

//     let str = "hello"
// function reverString(str){
//     let result = [ ]
//     for ( let i = str.length - 1; i>=0 ; i-- ){
//         result.push(str[i])
//     }
//     return result
// }
    
//     console.log(reverString(str));



// let str = "hello"
// function reverString(str){
//     let result = ""
//     for ( let i = str.length - 1; i>=0 ; i-- ){
        
//         result = result + str[i]
//     }
//     return result
// }
    
//     console.log(reverString(str));
    
// function countword(str){
//     let counter = 0
//     for (let i = 0; i< str.length; i++){
//         if(str[i]==" "){
//             counter++

//         }
       
//     }
//     return counter
// }
// console.log(countword("There is no built-in function to reverse a String in Python. The fastest (and easiest?) way is to use slice that steps backwards")) ;

// function countword(str){
//     let counter = 0
//     for (let i = 0; i< str.length; i++){
//         if(str[i]!=" "){
//             counter++
//         }
//            }
//     return counter
// }
// console.log(countword("There is no built-in function to reverse a String in Python. The fastest (and easiest?) way is to use slice that steps backwards")) ;


// function countword(str){
//     let r = []
//     for (let i = 0; i < str.length; i++){
//         if( str[i] != " "){
//             r.push(str[i])
            
//         }
//            }
//     return r
// }
// console.log(countword("hello world from casa")) ;


// prime number: check create a function to check if a number is prime or not


// let myfriends = ["khalid", "islam","fatima","simo","aicha"]

//     for (let i = 0; i < myfriends.length ; i++)
//     console.log(myfriends[0,3]);

let arr = [ 7, 15, 32, 9, '3', '11', 2 ];
function arr(number) {
    // Check if number is less than 2
    if (number < 2) {
        return false; // Numbers less than 2 are not prime
    }
    
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible, not a prime number
        }
    }
    
    return true; // If no divisor found, it's a prime number
}

// Example usage:
console.log(isPrime(5)); // Output: true
console.log(isPrime(12)); // Output: false
console.log(isPrime(23)); // Output: true
