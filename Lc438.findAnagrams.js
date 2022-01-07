var findAnagrams = function (s, p) {
  const sortP = p.split('').sort().join('');
  const res =[];
  let l = 0;
  let r = p.length;
  while (r <= s.length) {
    if( s.slice(l,r).split('').sort().join('') === sortP) {
      res.push(l)
    }
    l++;
    r++;
  }
  return res
};