import {
    asc16,
    asc2,
    asc4,
    asc8,
    bubbleSort, desc16,
    desc2,
    desc4,
    desc8,
    mergeSort, prepareReport,
    quickSort, random16,
    random2,
    random4, random8
} from "../src/sort.js";

describe("Analyzing Sorting Algorithm Performance", () => {
    prepareReport();
    test("Array Length = 2", () => {
        let expected = [2, 7];
        expect(quickSort(asc2)).toEqual(expected);
        expect(quickSort(desc2)).toEqual(expected);
        expect(quickSort(random2)).toEqual(expected);
        expect(bubbleSort(asc2)).toEqual(expected);
        expect(bubbleSort(desc2)).toEqual(expected);
        expect(bubbleSort(random2)).toEqual(expected);
        expect(mergeSort(asc2)).toEqual(expected);
        expect(mergeSort(desc2)).toEqual(expected);
        expect(mergeSort(random2)).toEqual(expected);
    });
    test("Array Length = 4", () => {
        let expected = [1, 2, 3, 4];
        expect(quickSort(asc4)).toEqual(expected);
        expect(quickSort(desc4)).toEqual(expected);
        expect(quickSort(random4)).toEqual(expected);
        expect(bubbleSort(asc4)).toEqual(expected);
        expect(bubbleSort(desc4)).toEqual(expected);
        expect(bubbleSort(random4)).toEqual(expected);
        expect(mergeSort(asc4)).toEqual(expected);
        expect(mergeSort(desc4)).toEqual(expected);
        expect(mergeSort(random4)).toEqual(expected);
    });
    test("Array Length = 8", () => {
        let expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(quickSort(asc8)).toEqual(expected);
        expect(quickSort(desc8)).toEqual(expected);
        expect(quickSort(random8)).toEqual(expected);
        expect(bubbleSort(asc8)).toEqual(expected);
        expect(bubbleSort(desc8)).toEqual(expected);
        expect(bubbleSort(random8)).toEqual(expected);
        expect(mergeSort(asc8)).toEqual(expected);
        expect(mergeSort(desc8)).toEqual(expected);
        expect(mergeSort(random8)).toEqual(expected);
    });
    test("Array Length = 16", () => {
        let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        expect(quickSort(asc16)).toEqual(expected);
        expect(quickSort(desc16)).toEqual(expected);
        expect(quickSort(random16)).toEqual(expected);
        expect(bubbleSort(asc16)).toEqual(expected);
        expect(bubbleSort(desc16)).toEqual(expected);
        expect(bubbleSort(random16)).toEqual(expected);
        expect(mergeSort(asc16)).toEqual(expected);
        expect(mergeSort(desc16)).toEqual(expected);
        expect(mergeSort(random16)).toEqual(expected);
    });
});

