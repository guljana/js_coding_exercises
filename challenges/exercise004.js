function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  if (nums.length == 0) return nums;
  const smallArr = [];
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] < 1) {
          smallArr[count] = nums[i];
          count++;
      }

  }
  return smallArr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const sameNames = [];
  var count = 0;
  for (var i = 0; i < names.length; i++) {
      if (names[i].charAt(0) == char) {
          sameNames[count] = names[i];
          count++;
      }

  }
  return sameNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbarr = [];
  var count = 0;
  for (var i = 0; i < words.length; i++) {
      if (words[i].substring(0, 3) == "to ") {
          verbarr[count] = words[i];
          count++;
      }
  }
  return verbarr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const intArr = [];
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
      if (Number.isInteger(nums[i])) {
          intArr[count] = nums[i];
          count++;
      }
  }
  return intArr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cityArr = [];
  for (var i = 0; i < users.length; i++) {
      cityArr[i] = users[i].data.city.displayName;
  }
  return cityArr;
}



function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const sqrArr = [];
  for (var i = 0; i < nums.length; i++) {

      if (checkNumberIfFloat(Math.sqrt(nums[i])) == true) {
          sqrArr[i] = parseFloat(Math.sqrt(nums[i]).toFixed(2));
      } else {
          sqrArr[i] = Math.sqrt(nums[i]);

      }

  }
  return sqrArr;
}

function checkNumberIfFloat(output) {
  return Number(output) === output && output % 1 !== 0;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const foundArr = [];
  var count = 0;
  for (var i = 0; i < sentences.length; i++) {
      if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
          foundArr[count] = sentences[i];
          count++;
      }
  }
  return foundArr;

}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const array1 = [1, 3, 2];
  //console.log(Math.max(...array1));
  const maxArr = [];
  var count = 0;
  for (var i = 0; i < triangles.length; i++) {
      //console.log(Math.max(...triangles[i]));
      maxArr[count] = Math.max(...triangles[i]);
      count++;
  }
  return maxArr;

}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};