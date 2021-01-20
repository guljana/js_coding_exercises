function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(n => Math.pow(n, 2));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words.length === 1) {
    return words[0];
  } else {
    let camelStr = words[0];
    words.slice(1).forEach(word => {
      camelStr += word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
    });
    return camelStr;
  }
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subCount = 0;
  people.forEach(person => subCount += person.subjects.length);
  return subCount;
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
  arr1.forEach((number1) => arr2.forEach((number2) => {
    if (number1 === number2) {
      objMap[number1] = objMap[number1] + 1 || 1;
    }
  }));
  return Object.keys(objMap).map(e => Number(e));
}
module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
