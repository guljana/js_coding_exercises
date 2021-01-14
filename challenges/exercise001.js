function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length)

}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase()
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const vat = (originalPrice * vatRate) / 100;
  return parseFloat((originalPrice + vat).toFixed(2))
}


function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const red = (originalPrice * reduction) / 100;

  return parseFloat((originalPrice - red).toFixed(2))

}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length)

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map(word => word.split("").reverse().join(""));

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter((user) => { return user.type === 'Linux'; }).reduce(function (result) { return result + 1; }, 0);
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const total = scores.reduce(function (previous, current) {
    return previous + current;
  }, 0);

  return parseFloat((total / scores.length).toFixed(2))

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let res = 4;
  if (n % 3 === 0 && n % 5 === 0) {
    res = "fizzbuzz";
  }

  else if (n % 3 === 0) {
    res = "fizz";
  }

  else if (n % 5 === 0) {
    res = "buzz";
  }

  return res
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
