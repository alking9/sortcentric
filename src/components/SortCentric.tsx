import React, { useState, useRef } from 'react';
import {
  getBubbleSortSteps,
  getMergeSortSteps,
  getQuickSortSteps,
} from '../algorithms';
import styles from '../styles/visualizerStyles';
import ComplexityChart from './ComplexityChart';
import { SortStep } from '../type';

const SortingVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [steps, setSteps] = useState<SortStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedAlgo, setSelectedAlgo] = useState('Bubble Sort');
  const intervalRef = useRef<number | null>(null);

  const generateArray = () => {
    stopSort();
    const newArray = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 300)
    );
    setArray(newArray);
    setSteps([]);
    setCurrentStepIndex(0);
  };

  const startSort = () => {
    let generatedSteps: SortStep[] = [];

    if (selectedAlgo === 'Bubble Sort') {
      generatedSteps = getBubbleSortSteps(array);
    } else if (selectedAlgo === 'Merge Sort') {
      generatedSteps = getMergeSortSteps(array);
    } else if (selectedAlgo === 'Quick Sort') {
      generatedSteps = getQuickSortSteps(array);
    }

    setSteps(generatedSteps);
    setArray(generatedSteps[0]?.array || []);
    setCurrentStepIndex(0);
    setIsSorting(true);

    intervalRef.current = window.setInterval(() => {
      setCurrentStepIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= generatedSteps.length) {
          stopSort();
          return prevIndex;
        }

        setArray(generatedSteps[nextIndex].array);
        return nextIndex;
      });
    }, 40);
  };

  const stopSort = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsSorting(false);
  };

  const toggleSort = () => {
    if (isSorting) {
      stopSort();
    } else {
      if (steps.length > 0 && currentStepIndex < steps.length - 1) {
        // Resume
        setIsSorting(true);
        intervalRef.current = window.setInterval(() => {
          setCurrentStepIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex >= steps.length) {
              stopSort();
              return prevIndex;
            }
            setArray(steps[nextIndex].array);
            return nextIndex;
          });
        }, 40);
      } else {
        // Start fresh
        startSort();
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>SortCentric 🧮</h2>

      <ComplexityChart algorithm={selectedAlgo} />

      <div style={styles.controls}>
        <label style={styles.label}>Algorithm:</label>
        <select
          value={selectedAlgo}
          onChange={(e) => setSelectedAlgo(e.target.value)}
          disabled={isSorting}
          style={styles.select}
        >
          <option>Bubble Sort</option>
          <option>Merge Sort</option>
          <option>Quick Sort</option>
        </select>

        <button onClick={generateArray} style={styles.button} disabled={isSorting}>
          🔄 New Array
        </button>

        <button onClick={toggleSort} style={styles.button} disabled={array.length === 0}>
          {isSorting
            ? '⏹ Stop'
            : steps.length > 0 && currentStepIndex < steps.length - 1
            ? '▶️ Resume'
            : '▶️ Start Sort'}
        </button>
      </div>

      <div style={styles.barContainer}>
        {array.map((value, idx) => {
          const active = steps[currentStepIndex]?.activeIndices || [];
          const isActive = active.includes(idx);

          return (
            <div
              key={idx}
              style={{
                height: `${value}px`,
                width: '10px',
                margin: '1px',
                backgroundColor: isActive ? '#ff9800' : '#00bcd4',
                borderRadius: '4px',
                transition: 'height 0.05s ease, background-color 0.2s ease',
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SortingVisualizer;
