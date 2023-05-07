var romanToInt = function (s) {
  const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (value[s[i]] < value[s[i + 1]]) {
      sum += -value[s[i]];
    } else {
      sum += value[s[i]];
    }
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
