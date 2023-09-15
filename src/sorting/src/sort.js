/**
 * Execute the provided function and measure the execution time.
 *
 * @param fun Function
 * @param args Arguments
 * @returns {string} Execution time
 */
export const measurePerformance = (fun, ...args) => {
    if (typeof fun != 'function') {
        throw new TypeError("Input format is wrong!");
    }
    const start = performance.now();
    fun(...args);
    return (performance.now() - start).toFixed(4);
}

/**
 * Quick sort.
 *
 * @param array Array
 * @returns {[]} Sorted array
 */
export const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[0];
    let leftArr = array.slice(1).filter(element => element <= pivot);
    let rightArr = array.slice(1).filter(element => element > pivot);
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

/**
 * Bubble sort.
 *
 * @param array Array
 * @returns {[]} Sorted array
 */
export const bubbleSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

/**
 * Merge sort.
 *
 * @param array Array
 * @returns {[]} Sorted array
 */
export const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}

/**
 * Merge elements.
 *
 * @param left Left part of array
 * @param right Right part of array
 * @returns {[]} Sorted array
 */
const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
        arr.push(left[0] < right[0]
            ? left.shift()
            : right.shift()
        );
    }
    return [...arr, ...left, ...right];
}

/**
 * Report.
 */
export const prepareReport = () =>
    console.log(`
    Results for Sorting Algorithm Performance Analysis\n
    Array Length     | QuickSort Time   | BubbleSort Time   | MergeSort Time
    ------------------------------------------------------------------------
    2:    asc        | ${measurePerformance(quickSort, asc2)} ms        | ${measurePerformance(bubbleSort, asc2)} ms         | ${measurePerformance(mergeSort, asc2)} ms
          desc       | ${measurePerformance(quickSort, desc2)} ms        | ${measurePerformance(bubbleSort, desc2)} ms         | ${measurePerformance(mergeSort, desc2)} ms
          random     | ${measurePerformance(quickSort, random2)} ms        | ${measurePerformance(bubbleSort, random2)} ms         | ${measurePerformance(mergeSort, random2)} ms
    4:    asc        | ${measurePerformance(quickSort, asc4)} ms        | ${measurePerformance(bubbleSort, asc4)} ms         | ${measurePerformance(mergeSort, asc4)} ms
          desc       | ${measurePerformance(quickSort, desc4)} ms        | ${measurePerformance(bubbleSort, desc4)} ms         | ${measurePerformance(mergeSort, desc4)} ms
          random     | ${measurePerformance(quickSort, random4)} ms        | ${measurePerformance(bubbleSort, random4)} ms         | ${measurePerformance(mergeSort, random4)} ms
    8:    asc        | ${measurePerformance(quickSort, asc8)} ms        | ${measurePerformance(bubbleSort, asc8)} ms         | ${measurePerformance(mergeSort, asc8)} ms
          desc       | ${measurePerformance(quickSort, desc8)} ms        | ${measurePerformance(bubbleSort, desc8)} ms         | ${measurePerformance(mergeSort, desc8)} ms
          random     | ${measurePerformance(quickSort, random8)} ms        | ${measurePerformance(bubbleSort, random8)} ms         | ${measurePerformance(mergeSort, random8)} ms
    16:   asc        | ${measurePerformance(quickSort, asc16)} ms        | ${measurePerformance(bubbleSort, asc16)} ms         | ${measurePerformance(mergeSort, asc16)} ms
          desc       | ${measurePerformance(quickSort, desc16)} ms        | ${measurePerformance(bubbleSort, desc16)} ms         | ${measurePerformance(mergeSort, desc16)} ms
          random     | ${measurePerformance(quickSort, random16)} ms        | ${measurePerformance(bubbleSort, random16)} ms         | ${measurePerformance(mergeSort, random16)} ms
    100:  random     | ${measurePerformance(quickSort, random100)} ms        | ${measurePerformance(bubbleSort, random100)} ms         | ${measurePerformance(mergeSort, random100)} ms
    `
    );
export let asc2 = [2, 7];
export let desc2 = [7, 2];
export let random2 = [7, 2];
export let asc4 = [1, 2, 3, 4];
export let desc4 = [4, 3, 2, 1];
export let random4 = [3, 4, 2, 1];
export let asc8 = [1, 2, 3, 4, 5, 6, 7, 8];
export let desc8 = [8, 7, 6, 5, 4, 3, 2, 1];
export let random8 = [3, 7, 2, 5, 1, 4, 6, 8];
export let asc16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
export let desc16 = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export let random16 = [11, 16, 12, 14, 4, 6, 10, 5, 2, 8, 13, 15, 3, 7, 9, 1];
let random100 = Array.from({length: 100}, () => Math.floor(Math.random() * 100));