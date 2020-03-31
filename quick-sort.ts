import { swap } from "./swap";

function quickSort(array: number[], low: number, high: number) {
  if (low < high) {
    const pivot = partition(array, low, high);

    // sort number before pi
    quickSort(array, low, pivot - 1);

    // sort number after pi
    quickSort(array, pivot + 1, high);
  }
}

function partition(array: number[], low: number, high: number) {
  let i = low - 1;
  let pivot = array[high];

  for (let j = low; j <= high; j++) {
    if (array[j] < pivot) {
      i = i + 1;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, high);

  return i + 1;
}

let unsortedArray = [4, 1, 7, 6, 3, 5];

quickSort(unsortedArray, 0, unsortedArray.length - 1);

console.log(unsortedArray);
