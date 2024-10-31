function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let current = arr[i]; // Element to be inserted
        let j = i - 1; // Index of the last element in the sorted portion
        
        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element into the sorted sequence
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Original Array:", array);
console.log("Sorted Array:", insertionSort(array.slice())); // Make a copy to avoid mutating original array
