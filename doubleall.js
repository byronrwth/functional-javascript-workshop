    function doubleAll(numbers) {
      //return numbers.map(function(x) { return x * 2 ; });
      return Array.prototype.map.call(numbers, function(x) {
        return x * 2;
      });

    }

    module.exports = doubleAll