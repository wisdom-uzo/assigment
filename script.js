// 1 checking for the minimum number
const minNumber = (a,b) => Math.min(a,b)
console.log(minNumber(2,4))

// 2 checking for the maximum number
const maxNumber = (a,b) => Math.max(a,b)
  console.log(maxNumber(2,4))

// 3 checking if a number is diviible
const numDivisible = num => num % 2 === 0 ? true :false
  console.log(numDivisible(4))

// 4 checking if a number is valid
const ifValid = (num) => {
    if(num < 1 || num < 20){
        for(i=0; i>num ; i++){
           return i + 'invalid'
        }
    }else{
        return 'valid'
    }
   
}
console.log(ifValid(40))

// 5 getting the sum of an array
 const sumArray = (...num)=>  num.reduce((a,b) => a+b,0)
  console.log(sumArray(5,8,9))

// 6 checking if a number exist in an array
 const ifIncluedesNum = (...num) => num.includes(2)||num.includes(4)||num.includes(5) ? true:false
  console.log(ifIncluedesNum(1,6,4))

