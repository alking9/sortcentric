import { SortStep } from '../type';

export function getQuickSortSteps(arr: number[]): SortStep[] {
    const steps: SortStep[] = [];
    const array = [...arr];
  
    function quickSort(start: number, end: number): void {
      if (start >= end) return;
  
      const pivotIndex = partition(start, end);
      quickSort(start, pivotIndex - 1);
      quickSort(pivotIndex + 1, end);
    }
  
    function partition(start: number, end: number): number {
      const pivot = array[end];
      let i = start;
  
      for (let j = start; j < end; j++) {
        steps.push({
          array: [...array],
          activeIndices: [j, end], // highlight current & pivot
        });
  
        if (array[j] < pivot) {
          [array[i], array[j]] = [array[j], array[i]];
          steps.push({
            array: [...array],
            activeIndices: [i, j],
          });
          i++;
        }
      }
  
      [array[i], array[end]] = [array[end], array[i]];
      steps.push({
        array: [...array],
        activeIndices: [i, end],
      });
  
      return i;
    }
  
    quickSort(0, array.length - 1);
    return steps;
  }