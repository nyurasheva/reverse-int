module.exports = function reverse1 (n) {
  return +(Math.abs(n).toString().split('').reverse().join(''));
}
