function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const merged = [...arr1, ...arr2]
  
  return merged
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(getUniqueNumbers(arr1, arr2))