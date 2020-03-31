import { swap } from "./swap";

function selectionsort(arr: number[]) {
  let i = 0;

  while (i < arr.length - 1) {
    var minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swap(arr, i, minIndex);

    i++;
  }
}

const arr = [64, 25, 12, 22, 11];

selectionsort(arr);

console.log(arr);

// output: [ 11, 12, 22, 25, 64 ]
// time complexity: O(n*n), always have two loops
