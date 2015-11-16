exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return (/[0-9]/).test(str);
  },

  containsRepeatingLetter : function(str) {
    return (/([a-zA-Z]).*?\1/).test(str);
  },

  endsWithVowel : function(str) {
    return (/[aeiou]$/).test(str);
  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },
  isUSD : function(str) {
    
  }
};
