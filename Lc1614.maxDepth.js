var maxDepth = function (s) {
  const stack = [];
  const res = 0;
  for (let c of s) {
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      res = Math.max(res, stack.length);

      stack.pop();
    }
  }
  return res;
};

var maxDepth = function (s) {
  let len = 0;
  let res = 0;
  for (let c of s) {
      if (c === '(') {
          len++;
      } else if (c === ')') {
          res = Math.max(res, len);
          len--
      }
  }
  return res;
};