// 输入：n = 7, rounds = [1,5,3,7]
// 输出：[1,2,3,4,5,6,7]
// 输入：n = 2, rounds = [2,1,2,1,2,1,2,1,2]
// 输出：[2]
// 输入：n = 4, rounds = [1,3,1,2]
// 输出：[1,2]
var mostVisited = function (n, rounds) {
  const start = rounds[0];
  const end = rounds.slice(-1)[0];
  const res = [];
  if (start <= end) {
    for (let i = start; i <= end; i++) res.push(i);
  } else {
    for (let i = 1; i <= end; i++) res.push(i);
    for (let i = start; i <= n; i++) res.push(i);
  }
  return res;
};
// https://leetcode-cn.com/problems/most-visited-sector-in-a-circular-track/