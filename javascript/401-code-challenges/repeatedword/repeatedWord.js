function repeatedWord(str) {
  let array = [];
  // .toUpperCase to check case sensetive edge cases
  // .split to seperate the array into individual strings (/\W+/)<--removing all non-word characters
  let strArray = str.toUpperCase().split(/\W+/);

  let duplicate = null;
  // console.log(strArray)

  for (let i = 0; i < strArray.length; i++) {
    if (array.includes(strArray[i])) {
      duplicate = strArray[i];
      console.log(strArray[i]);
      break;
    }
    array.push(strArray[i]);
  }
  // console.log(strArray)
  return duplicate;
}
console.log(
  repeatedWord(
    "It was a queer, sultry SuMmEr, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York"
  )
);
