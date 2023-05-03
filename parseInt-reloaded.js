const values = {
  ones: {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  },
  tens: {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninty",
  },
  tenOnes: {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "ninteen",
  },
  magnitude: {
    2: "million",
    1: "thousand",
    0: "",
  },
};

// Step Two: break any number given into 3 number blocks (eg. 4502 --> 4 502)
function seperate(num, newArr = []) {
  const numStr = String(num).split("");
  for (let i = numStr.length - 1; i >= 0; i -= 3) {
    if (i === numStr.length - 1 && i >= 3) {
      newArr.unshift(numStr.slice(i - 2).join(""));
    } else if (i < 3) {
      newArr.unshift(numStr.slice(0, i + 1).join(""));
      console.log("hello");
    } else {
      newArr.unshift(numStr.slice(i - 2, i + 1).join(""));
    }
  }
  console.log(newArr);
  return newArr;
}

function parseIntArr(arr, newStr = "") {
  let mag = arr.length - 1;

  if (arr[0] === "0") {
    return "zero";
  }

  arr.forEach((ele) => {
    if (ele.length === 3 && ele !== "000") {
      if (ele[0]) {
        newStr += `${values.ones[Number(ele[0])]} hundred `;
      }

      if (ele[1]) {
        ele[1] !== "1"
          ? (newStr += `${values.tens[Number(ele[1])]}${
              ele[2] !== "0" ? "-" : ""
            }`)
          : (newStr += `${values.tenOnes[Number(ele[1] + ele[2])]} `);
      }

      if (ele[2] && ele[1] !== "1") {
        newStr += `${values.ones[Number(ele[2])]} ${values.magnitude[mag]} `;
      }
    }

    if (ele.length === 2 && ele !== "00") {
      if (ele[0]) {
        ele[0] !== "1"
          ? (newStr += `${values.tens[Number(ele[0])]}${
              ele[1] !== "0" ? "-" : ""
            }`)
          : (newStr += `${values.tenOnes[Number(ele[0] + ele[1])]} `);
      }

      if (ele[1] && ele[0] !== "1") {
        newStr += `${values.ones[Number(ele[1])]} ${values.magnitude[mag]} `;
      }
    }

    if (ele.length === 1 && ele !== "0") {
      newStr += `${values.ones[Number(ele[0])]} ${values.magnitude[mag]} `;
    }
    mag -= 1;
  });

  return newStr;
}

function parseInt(str) {
  const num = seperate(str);
  return parseIntArr(num);
}
