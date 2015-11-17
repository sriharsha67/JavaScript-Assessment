exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;  
  },

  iterate : function(obj) {
    var finalArray = [];

    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        finalArray.push(property + ': ' + obj[property]);
      }
    }

    return finalArray;
  }
};
