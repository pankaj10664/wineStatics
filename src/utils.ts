
export function calculateMean(data: number[]): number {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  }
  
  export function calculateMedian(data: number[]): number {
    const sortedData = [...data].sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
  
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }
  
  export function calculateMode(data: number[]): number {
    const occurrences: { [key: number]: number } = {};
    data.forEach((val) => (occurrences[val] = (occurrences[val] || 0) + 1));
  
    let maxOccurrence = 0;
    let mode: number = 0;
  
    for (const val in occurrences) {
      if (occurrences[val] > maxOccurrence) {
        maxOccurrence = occurrences[val];
        mode = parseFloat(val);
      }
    }
  
    return mode;
  }
  