let testArr = [1, 3, 5, 7, 8, 9, 20, 42, 64]
let target = 100;

let ternarySearch = (left, right, target, arr) => {
	if (right >= left)
	{
		let mid1 = Math.floor(left + (right - left) /3);
		let mid2 = Math.floor(right - (right - left) /3);

		
		if (arr[mid1] == target) {
			return mid1;
		}
		else if (arr[mid2] == target) {
			return mid2;
		}

		if (target < arr[mid1]) {
			return ternarySearch(left, mid1 - 1, target, arr);
		}
		else if (target > arr[mid2]) {
			return ternarySearch(mid2 + 1, right, target, arr);
		}
		else {
			return ternarySearch(mid1 + 1, mid2 - 1, target, arr);
		}
	}

	return -1;
}

console.log("Target", target)
console.log("Index is ", ternarySearch(0, testArr.length , target, testArr));