module.exports = function check(str, bracketsConfig) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] == str[i]) {
        if (answer.length != 0 && answer[answer.length - 1] == bracketsConfig[j][0] && bracketsConfig[j][1] == str[i]) {
          answer = answer.slice(0, answer.length - 1);
        } else {
          answer += str[i];
        }
      } else if (bracketsConfig[j][1] == str[i]) {
        if (answer[answer.length - 1] != bracketsConfig[j][0]) {
          return false;
        } else if (answer[answer.length - 1] == bracketsConfig[j][0]) {
          answer = answer.slice(0, answer.length - 1);
        }
      }
    }
  }
  if (answer.length != 0) {
    return false;
  } else {
    return true;
  }
}
