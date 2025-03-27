import React from 'react';

const complexityMap: Record<string, string> = {
  'Bubble Sort': 'O(n²)',
  'Merge Sort': 'O(n log n)',
  'Quick Sort': 'O(n log n)',
};

interface Props {
  algorithm: string;
}

const ComplexityChart = ({ algorithm }: Props) => {
  return (
    <div style={{ marginBottom: '20px', fontSize: '1rem', textAlign: 'center' }}>
      <strong>Time Complexity:</strong> {complexityMap[algorithm] || 'N/A'}
    </div>
  );
};

export default ComplexityChart;
