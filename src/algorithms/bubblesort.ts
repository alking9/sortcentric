import { SortStep } from '../type';


export function getBubbleSortSteps(arr: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const array = [...arr];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // Always record the comparison
      steps.push({
        array: [...array],
        activeIndices: [j, j + 1],
      });

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        // Record the post-swap step
        steps.push({
          array: [...array],
          activeIndices: [j, j + 1],
        });
      }
    }
  }

  return steps;
}