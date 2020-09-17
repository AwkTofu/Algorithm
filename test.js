let testArr = [1, 3, 5, 7, 8, 9, 20, 42, 64]
let target = 100;

let ternarySearch = (left, right, target, arr) => {
	console.log(right >= left, "\n\n")
	if (right >= left)
	{
		console.log("Left", left, "right", right)
		let mid1 = Math.floor(left + (right - left) /3);
		let mid2 = Math.floor(right - (right - left) /3);

		console.log("mid1", mid1, "mid2", mid2,"target", target)
		console.log("Test2", arr[mid1], arr[mid2])
		if (arr[mid1] == target) {
			return mid1;
		}
		else if (arr[mid2] == target) {
			return mid2;
		}

		console.log("Target: ", target, "Left:", arr[mid1], "right", arr[mid2])
		if (target < arr[mid1]) {
			console.log("Left Side", target, arr[mid1])
			return ternarySearch(left, mid1 - 1, target, arr);
		}
		else if (target > arr[mid2]) {
			console.log("Right Side", target, arr[mid2])
			return ternarySearch(mid2 + 1, right, target, arr);
		}
		else {
			console.log("Middle")
			return ternarySearch(mid1 + 1, mid2 - 1, target, arr);
		}
	}

	return -1;
}

console.log("Target", target)
console.log("Index is ", ternarySearch(0, testArr.length , target, testArr));