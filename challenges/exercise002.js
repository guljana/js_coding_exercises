function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if(person.city == "Manchester"){
    return true
  }
  return false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
     if(people <=40){
       return 1;

     }else if(people>40 && people<=80){

      return 2;
     }else if(people>80 && people<=120){

      return 3;
     }else{
       return Math.ceil(people/40)
     }

}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var count=0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] == "sheep")
    count++;
  }
     return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  console.log(person.address.postCode);
    if(person.address.postCode.charAt(0) == 'M' ){
       if(person.address.city != "Manchester"){
         return false;
       
        }
        return true;
      }
       
    return false

}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
