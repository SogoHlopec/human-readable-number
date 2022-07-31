module.exports = function toReadable (number) {
  const number1_9 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const number10_19 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const number20_99 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const number100_999 = "hundred";
  let result = "";

   // ! up to 9 ------------------------------------------------
  if (number <= 9) {
    for (i = 0; i <= number1_9.length; ++i) {
      if (number === i) {
        return number1_9[i];
      }
      }
    // ! up to 19 ------------------------------------------------

    } else if (number <= 19) {
    for (i = 0; i <= number10_19.length; ++i) {
      if (number === (i + 10)) {
        return number10_19[i];
      }
    }
    // ! up to 99 ------------------------------------------------
  } else if (number <= 99) {
    let arr = Array.from("" + number);
  

    for (i = 0; i <= number20_99.length; ++i) {
    if (Number(arr[0]) === (i + 2)) {
      result = result + number20_99[i];
      }
    }

    for (i = 1; i <= number1_9.length; ++i) {
      if (Number(arr[1]) === i) {
        result = result + " " + number1_9[i];
      }
    }
    return result;
    // ! up to 999 ------------------------------------------------
    } else if (number <= 999) {
      let arr3 = Array.from("" + number);

      for (i = 0; i <= number1_9.length; ++i) {
        if (Number(arr3[0]) === i ) {
          result = result + number1_9[i] + " " + number100_999;
        }
      }
      let numberBinary = Number(arr3[1] + arr3[2]);

      if (numberBinary <= 9) {
        for (i = 1; i <= number1_9.length; ++i) {
          if (numberBinary === i) {
            result = result + " " + number1_9[i];
          }
        }
      } else if (numberBinary <= 19) {
        for (i = 0; i <= number10_19.length; ++i) {
          if (numberBinary === (i + 10)) {
            result = result + " " + number10_19[i];
          }
        }
      } else if (numberBinary <= 99) {

        let arr4 = Array.from("" + numberBinary);

        for (i = 0; i <= number20_99.length; ++i) {
          if (Number(arr4[0]) === (i + 2)) {
            result = result + " " + number20_99[i];
          }
        }

        for (i = 1; i <= number1_9.length; ++i) {
          if (Number(arr4[1]) === i) {
            result = result + " " + number1_9[i];
          }
        }
      }

     


      return result;  
    }


    }


