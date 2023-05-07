var isPalindrome = function (x) {
  let reversed_n = 0;
  let n = x;
  while (n > 0) {
    reversed_n = reversed_n * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return x === reversed_n;
};
