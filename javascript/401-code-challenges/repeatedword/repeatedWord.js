

function repeatedWord(str) {
let array = [];
let strArray = str.split(' '); 
let duplicate = null
// console.log(strArray)

    for(let i = 0; i < strArray.length; i++) {
        if(array.includes(strArray[i])){
            duplicate= strArray[i]
            // console.log(strArray[i])
        }
        array.push(strArray[i])
        
    }
    console.log(strArray)
   return duplicate;
}
console.log(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York'))


