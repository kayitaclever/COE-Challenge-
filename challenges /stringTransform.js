const transformString = (str) => {
  const len = str.length;

  const reverseString = (s) => s.split("").reverse().join("");
  const toAsciiCodes = (s) =>
    s
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");

  return len % 15 === 0
    ? toAsciiCodes(reverseString(str))
    : len % 3 === 0
    ? reverseString(str)
    : len % 5 === 0
    ? toAsciiCodes(str)
    : str;
};

console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));
console.log(transformString("Example"));
