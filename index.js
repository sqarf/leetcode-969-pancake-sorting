/**
 * @param {number[]} arr
 * @return {number[]}
 */
const pancakeSort = (arr) => {
  const result = [];
  let key = arr.length;

  while (key > 0) {
    while (arr[key - 1] !== key) {
      let index = arr.indexOf(key)
      if (index === 0) {
        arr = arr.slice(0, key).reverse().concat(arr.slice(key));
        result.push(key);
      } else {
        arr = arr.slice(0, index + 1).reverse().concat(arr.slice(index + 1));
        result.push(index + 1);
      }
    }
    key--;
  }
  return result;
};

// Ex. 1
console.log(
  pancakeSort([3, 2, 4, 1])
)

// Ex. 2
console.log(
  pancakeSort([1, 2, 3])
)
