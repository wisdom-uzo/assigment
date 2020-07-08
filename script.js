// 1 checking for the minimum number
 const minNumber = (a,b)=>  a<b ? a : b
console.log(minNumber(2,4))

// 2 checking for the maximum number
const maxNumber = (a,b) => a > b ? a : b
  console.log(maxNumber(2,4))

// 3 checking if a number is diviible
const numDivisible = num => num % 2 === 0 ? true :false
  console.log(numDivisible(4))

// 4 checking if a number is valid
 const ifValid = (num) => {
    if(num < 1 || num > 20){
        for(i=0; i<num; i++){
           return i + 'invalid'
        }
    }else{
        return 'valid'
    }
  }
console.log(ifValid(40))

// 5 getting the sum of an array
const sumArray = (...arr) =>{
  let sum = 0
  for(let i = 0;i < arr.length ; i++){
     sum += arr[i]
  }
  return sum
}
  console.log(sumArray(5,8,9))

// 6 checking if a number exist in an array
 const ifIncluedesNum = (...num) => num.includes(2)||num.includes(4)||num.includes(5) ? true:false
  console.log(ifIncluedesNum(1,6,4))

