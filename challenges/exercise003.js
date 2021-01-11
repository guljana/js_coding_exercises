function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length == 0) return nums;
  else {
    const sqrnumbers = nums.map(n => Math.pow(n, 2));
    return sqrnumbers;
  }


}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words.length == 1) {
    return words[0];
  } else {
    var camelStr = words[0];
    words.slice(1).forEach(word => {
      camelStr += word.substring(0, 1).toUpperCase() + word.substring(1, word.length);

    });
    return camelStr;

  }
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subCount = 0;

  subCount = people.filter((person) => { return person.subjects.length != 0; }).reduce(function (subCount, obj) { return subCount + obj.subjects.length; }, subCount);

  if (subCount == 0) return 0;
  else if (subCount > 1) return subCount;
  else {
    return 1
  }
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  const hasIngredient = [];

  menu.forEach(obj => obj.ingredients.forEach(item => { if (item === ingredient) hasIngredient.push(item) }));

  return hasIngredient.length > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const objMap = {};

  arr1.forEach((e1) => arr2.forEach((e2) => {
    if (e1 === e2) {
      objMap[e1] = objMap[e1] + 1 || 1;
    }
  }
  ));

  return Object.keys(objMap).map(e => Number(e));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
