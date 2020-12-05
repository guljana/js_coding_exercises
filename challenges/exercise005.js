const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  var index = nums.indexOf(n);
  if (index < 0 || index == nums.length - 1) {
      return null;
  }
  return nums[index + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var sum = 0;

  for (var i = 0, length = str.length; i < length; i++) {
      sum += Number(str[i]);
  }

  return {
      '1': sum,
      '0': str.length - sum
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  n = n + "";
  return parseInt(n.split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var count = 0;

  for (var i = 0; i < arrs.length; i++) {

      count += arrs[i].reduce(function(a, b) {
          return a + b;
      }, 0);


  }

  return count;
};



const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
      [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (var prop in haystack) {

      if (typeof haystack[prop] === 'string') {
          if (haystack[prop].toLowerCase().includes(searchTerm.toLowerCase())) {
              return true;
          }
      }

  }
  return false;

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  //           /[a-z]+/gi   /\w+/gi
  var pattern =  /\w+/g,
      string = str.toLowerCase(),
      matchedWords = string.match(pattern);

  var counts = matchedWords.reduce(function(stats, word) {

      if (stats.hasOwnProperty(word)) {
          stats[word] = stats[word] + 1;
      } else {

          stats[word] = 1;
      }
      return stats;

  }, {});

  return counts;



};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};