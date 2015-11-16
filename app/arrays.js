exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        arr2.push(arr[i]);
      }
    }
    return arr2;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++){
      if (arr[i] == item) {
        arr.splice(i,1); //removes the current element
        i = i-1; //reseting the i value to back position
        len = len-1; ///reseting the len after removing value
      };
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    newArray = arr1.concat(arr2);
    return newArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    count = 0;
     for (var i = 0; i < arr.length; i++) {
       if (arr[i] == item) {
        count++;
       };
     };
     return count;
  },

  duplicates : function(arr) {
    sorted_array = arr.sort();
    var len=sorted_array.length,
    out=[],
    counts={};
    for (var i=0;i<len;i++) {
      var item = arr[i];
      counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    }
    for (var item in counts) {
      if(counts[item] > 1)
        out.push(item);
    }
    //since out results in array with strings it needs to be converted into integers
    return out.map( function(el){ 
                      return +el;
                    });

  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]*= arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var arr2 = [];

    for (var i = 0; i < arr.length; i++) {
      if(arr[i] == target){
        arr2.push(i);
      }
    }

    return arr2;
  }
};
