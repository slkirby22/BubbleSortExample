const readline = require('readline-sync');

// Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Get user input
function getUserInput() {
    const input = readline.question('Enter numbers separated by space: ');
    const numbers = input.split(' ').map(Number);
    return numbers;
}

// UI
function UI() {
    console.log('Welcome to the Sorting Algorithm Example');

    const inputArray = getUserInput();

    // Unsorted array
    console.log('Unsorted Array:', inputArray);

    // Sort array
    const sortedArray = bubbleSort(inputArray);

    // Sorted array
    console.log('Sorted Array:', sortedArray);
}


UI();
