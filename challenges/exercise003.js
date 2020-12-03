function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length == 0) return nums;
  else{
    var sqrArr = [];

    for(var i=0; i<nums.length; i++){
   
      sqrArr[i]=Math.pow(nums[i], 2);
     }
     return sqrArr;
  }


}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if(words.length==1){
    return words[0];
  }else {
    var camelStr=words[0];
  for(var i=1; i<words.length; i++){
   
   camelStr+=words[i].substring(0,1).toUpperCase()+words[i].substring(1,words[i].length);
  }
  return camelStr;

}
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var subCount=0;
  for(var i=0;i<people.length;i++){
    if(people[i].subjects.length != 0){
      subCount+=people[i].subjects.length;
    }
   
  }//end of for
  if(subCount==0)return 0;
  else if(subCount >1) return subCount;
  else{
    return 1
  }
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for(var i=0;i<menu.length;i++){
     for(var j=0;j<menu[i].ingredients.length;j++){
       if(menu[i].ingredients[j] == ingredient){
          return true;
       }
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const objMap={};
  
arr1.forEach((e1)=>arr2.forEach((e2)=> {if(e1 === e2){
       objMap[e1]=objMap[e1]+1||1 ;
    }
  }
));

return Object.keys(objMap).map(e=>Number(e));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
