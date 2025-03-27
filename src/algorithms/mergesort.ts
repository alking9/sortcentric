import { SortStep } from '../type';

export function getMergeSortSteps(arr: number[]): SortStep[] {
    const steps: SortStep[] = [];
    const array = [...arr];
  
    function mergeSort(start: number, end: number): number[] {
      if (start >= end) return [array[start]];
  
      const mid = Math.floor((start + end) / 2);
      const left = mergeSort(start, mid);
      const right = mergeSort(mid + 1, end);
  
      const merged: number[] = [];
      let i = 0,
        j = 0;
  
      const activeIndices: number[] = [];
  
      while (i < left.length && j < right.length) {
        const idx = start + merged.length;
        const a = left[i];
        const b = right[j];
  
        if (a < b) {
          merged.push(a);
          i++;
        } else {
          merged.push(b);
          j++;
        }
  
        // simulate what array will look like after merge
        const tempArray = [...array];
        for (let k = 0; k < merged.length; k++) {
          tempArray[start + k] = merged[k];
        }
  
        activeIndices.push(idx);
        steps.push({
          array: [...tempArray],
          activeIndices: [idx],
        });
      }
  
      while (i < left.length) {
        merged.push(left[i++]);
        const idx = start + merged.length - 1;
        const tempArray = [...array];
        for (let k = 0; k < merged.length; k++) {
          tempArray[start + k] = merged[k];
        }
        activeIndices.push(idx);
        steps.push({
          array: [...tempArray],
          activeIndices: [idx],
        });
      }
  
      while (j < right.length) {
        merged.push(right[j++]);
        const idx = start + merged.length - 1;
        const tempArray = [...array];
        for (let k = 0; k < merged.length; k++) {
          tempArray[start + k] = merged[k];
        }
        activeIndices.push(idx);
        steps.push({
          array: [...tempArray],
          activeIndices: [idx],
        });
      }
  
      for (let i = start; i <= end; i++) {
        array[i] = merged[i - start];
      }
  
      return merged;
    }
  
    mergeSort(0, array.length - 1);
    return steps;
  }