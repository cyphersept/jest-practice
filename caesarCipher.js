function caesarCipher(str, factor = 1) {
  const letterCodes = {
    upper: {
      start: 65,
      end: 90,
    },
    lower: {
      start: 97,
      end: 122,
    },
  };

  // Executes Caesarian shift
  const shiftStr = (myStr = str, myFactor = factor) => {
    return (
      Array.from(myStr)
        // Find the cipher for each character
        .map((char) => {
          const code = char.charCodeAt(0);
          const bounds = inWhichBounds(code);
          // Don't shift non-alphabet characters
          if (bounds === false) {
            return char;
          }
          const newCode = wrapCode(code, normalizeFactor(myFactor), bounds);
          const newChar = String.fromCharCode(newCode);
          return newChar;
        })
        .join("")
    );
  };

  const inWhichBounds = (code) => {
    if (code >= letterCodes.upper.start && code <= letterCodes.upper.end)
      return letterCodes.upper;
    else if (code >= letterCodes.lower.start && code <= letterCodes.lower.end)
      return letterCodes.lower;
    else return false;
  };
  // Ensures z wraps to a
  const wrapCode = (code, myFactor, boundingObj) => {
    const start = boundingObj.start;
    const end = boundingObj.end;
    if (code + myFactor > end) return start + (code + myFactor - end) - 1;
    else return code + myFactor;
  };

  // Bounds shift factor to a value between 0 and 26
  const normalizeFactor = (myFactor) => {
    return myFactor % 26;
  };

  return shiftStr();
}

module.exports = caesarCipher;
