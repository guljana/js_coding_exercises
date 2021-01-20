function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  if (nums.length === 0) return nums;
  return nums.filter(word => word < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.charAt(0) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(name => name.substring(0, 3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const sqrArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (checkNumberIfFloat(Math.sqrt(nums[i])) === true) {
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
  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(tri => Math.max(...tri));

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