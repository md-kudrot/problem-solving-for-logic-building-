let input = 121;

let inputToStr = input.toString()
// console.log(inputToStr)

let inputLen = inputToStr.length - 1;
// console.log(inputLen)

let storeValue ="" 
for(inputLen; inputLen >= 0 ; inputLen--){
    storeValue += inputToStr[inputLen]
    // console.log(storeValue)
    
}

console.log(storeValue);

if(inputToStr == storeValue){
        console.log("palindrome")
    }else{
        console.log("not palindrome")
}