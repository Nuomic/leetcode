var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    const curr = asteroids[i];
    let top = stack.slice(-1)[0];
    if (top > 0 && curr < 0) {
      while (top > 0 && stack.length && top < -curr) {
        stack.pop();
        top = stack.slice(-1)[0];
      }
      if (top === -curr) {
        stack.pop();
      } else if (!top || top < 0) {
        stack.push(curr);
      }
    } else {
      stack.push(curr);
    }
  }
  return stack;
};

// var asteroidCollision = function (asteroids) {
//   const stack = [];
//   for (let i = 0; i < asteroids.length; i++) {
//     const curr = asteroids[i];
//     let top = stack.slice(-1)[0];
//     if (top > 0 && curr < 0) {
//       while (top > 0) {
//         if (curr < 0 && top > -curr) {
//           top = -1;
//         } else if (Math.abs(top) === Math.abs(curr)) {
//           stack.pop();
//           top = -1;
//         } else {
//           stack.pop();
//           top = stack.slice(-1)[0];
//           if (!top || top < 0) {
//             stack.push(curr);
//           }
//         }
//       }
//     } else {
//       stack.push(curr);
//     }
//   }
//   return stack;
// };

var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    const curr = asteroids[i];
    let top = stack.slice(-1)[0];
    if (top > 0 && curr < 0) {
      while (top > 0 && stack.length && top < -curr) {
        stack.pop();
        top = stack.slice(-1)[0];
      }
      if (top === -curr) {
        stack.pop();
      } else if (!top || top < 0) {
        stack.push(curr);
      }
    } else {
      stack.push(curr);
    }
  }
  return stack;
};
