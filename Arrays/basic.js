var arr = [[1, 2, "XD"], [4, 9], [true, "hey", "oh no", 9], [3]];

console.log("Array: ");
console.log(arr);
console.log("\nSize of first element in array: " + arr[0].length);

arr.pop(); // Delete last element
arr.shift(); // Delete first element

console.log("\nArray after elimination: ");
console.log(arr);

arr.push(["Last here", 7]); // Insert element at the end
arr.unshift(["#1", 2, false]); // Insert element at the beginning

console.log("\nArray after insertion: ");
console.log(arr);