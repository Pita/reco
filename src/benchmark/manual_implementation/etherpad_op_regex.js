/*
  Idea: new version
    - inline non resetables (check impact)
    - copy instead of math
*/

function readNumber(str, start) {
  let i = start;
  const charCode = str.charCodeAt(i);
  const valid =
    (charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122);
  if (!valid) {
    return 0;
  }
  i++;
  while (i < str.length) {
    const charCode = str.charCodeAt(i);

    const valid =
      (charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122);
    if (!valid) {
      break;
    }
    i++;
  }

  return i - start;
}

// optional
function readFirstGroup(str, start) {
  let i = start;
  while (i < str.length) {
    if (str[i] === "*") {
      let read = readNumber(str, i + 1);
      if (read === 0) {
        return i - start;
      } else {
        i += 1 + read;
      }
    } else {
      return i - start;
    }
  }

  return i - start;
}

// optional
function readSecondGroup(str, start) {
  if (str[start] !== "|") {
    return 0;
  }

  let i = start;
  i++;

  const num = readNumber(str, i);
  if (num === 0) {
    return start;
  }
  i += num;

  return i - start;
}

// mandatory
function readThirdGroup(str, start) {
  const char = str[start];
  const valid = char === "-" || char === "+" || char === "=";
  return valid ? 1 : 0;
}

// mandatory
function readFourthGroup(str, start) {
  return readNumber(str, start);
}

function first(str) {
  let i = 0;
  i += readFirstGroup(str, i);
  i += readSecondGroup(str, i);
  const third = readThirdGroup(str, i); // not resetable
  if (third === 0) {
    return false;
  }
  i += third;
  const fourth = readFourthGroup(str, i); // not resetable
  if (fourth === 0) {
    return false;
  }
  i += fourth;

  return i === str.length;
}

function second(str) {
  return str === "?";
}

function third(str) {
  return str === "";
}

function full(str) {
  return first(str) || second(str) || third(str);
}

module.exports = {
  readFirstGroup,
  readNumber,
  readSecondGroup,
  full,
};
