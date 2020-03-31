export function swap(arr: number[], index1: number, index2: number) {
  let temp: number;
  temp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = temp;
}
