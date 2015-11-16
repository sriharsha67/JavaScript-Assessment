exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    function fib(n){
      return n<2 ? n : fib(n-1)+fib(n-2);
    }
  },

  validParentheses: function(n) {

  }
};
