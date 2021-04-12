/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newarr = [];
  const result = [];
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newarr.push(arr[i]);
    }
  }
  for (const i of newarr) {
    for (let j = 0; j < newarr.length; j++) {
      if (newarr[j] > newarr[j + 1]) {
        newarr[j] += newarr[j + 1];
        newarr[j + 1] = newarr[j] - newarr[j + 1];
        newarr[j] -= newarr[j + 1];
      }
    }
  }
  for (const i of arr) {
    if (i === -1) {
      result.push(-1);
    } else {
      result.push(newarr[n]);
      n++;
    }
  }
  return result;
}

module.exports = sortByHeight;
