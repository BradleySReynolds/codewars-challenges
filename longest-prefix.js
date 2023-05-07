var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  if (strs.some((element) => element === "")) return "";

  current = "";
  let i = 0;
  while (
    strs.every((element) => element[i] === strs[0][i]) &&
    i < strs[0].length
  ) {
    current += strs[0][i];
    i++;
  }
  return current;
};

console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
