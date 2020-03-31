import { swap } from "./swap";

class Test {
  isSwap: boolean = false;
}

function bubblesort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = new Test().isSwap;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = true;
      }
    }

    if (!isSwap) {
      break;
    }
  }
}

const arr = [1, 3, 2, 4, 5];
bubblesort(arr);
console.log(arr);

// output: [1, 2, 3, 4, 5]
// worst / average case time complexity: O(n*n), occur when array is reverse sorted.
// best case time complexity: O(n), occur when input array is sorted
