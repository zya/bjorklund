var _ = require('lodash');

module.exports = function bjorklund(pulses, length) {
  var ones = [];
  ones.length = pulses >= length ? length : pulses;
  var zeros = [];
  zeros.length = pulses >= length ? 0 : length - pulses;
  _.fill(ones, '1');
  _.fill(zeros, '0');
  return generate_one_based(ones, zeros);
};

function generate_one_based(ones, zeros) {
  if (zeros.length > 0) {
    var zipped = _.zip(ones, zeros).map(function (item) {
      return _.compact(item).join().replace(/,/g, '');
    });
    var partitioned = _.partition(zipped, function (item) {
      return item.length > 1;
    });
    return generate_one_based(partitioned[0], partitioned[1]);
  } else {
    return ones.reverse().join().replace(/,/g, '');
  }
}

// to be used as option
function generate_zero_based(ones, zeros) {

  if (zeros.length > 0) {
    var zipped = _.zip(zeros, ones).map(function (item) {
      return _.compact(item).join().replace(/,/g, '');
    });
    var partitioned = _.partition(zipped, function (item) {
      return item.length > 1;
    });
    return generate_zero_based(partitioned[0], partitioned[1]);
  } else {
    return ones.reverse().join().replace(/,/g, '');
  }
}