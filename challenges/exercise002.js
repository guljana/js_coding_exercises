function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester"
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter((animal) => { return animal === 'sheep'; }).reduce((result) => { return result + 1; }, 0);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.postCode.charAt(0) === 'M') {
    return person.address.city === "Manchester";
  } else return false;
}
module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
