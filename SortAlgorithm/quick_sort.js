// let array = [5, 7,2,3,4,1,6]

function quickSort(arr, left, right) {
	let index;

	//We want to check if we even need to do the sorting
	if (arr.length > 1)
	{
		//We first sort the function, and return the center which is used to divide the array
		index = sortingUsingPivot(arr, left, right);

		//If there are more elements on the left side of pivot that needs to be sorted
		if (left < index - 1)
		{
			//will put the entire left of the array into the quicksort again
			quickSort(arr, left, index - 1);
		}

		//If there are more elements on the right side of pivot that needs to be sorted
		if (index < right) 
		{
			//will put the entire right of the array into the quicksort again
			quickSort(arr, index, right);
		}
	}
} 

function sortingUsingPivot(arr, left, right) {
	//We are using the middle element of the array as our pivot
	let pivot = arr[Math.floor((right + left) / 2)];
	let l = left; //This is keeping track of left pointer
	let r = right; //this is keeping track of right pointer

	//Keep going until left pointer passes the right pointer
	while (l <= r) 
	{
		//Used Find the first element on the left side that is larger than the pivot element.
		//So that we know this is the element we want to move to the other side 
		while (arr[l] < pivot)
		{
			//Keep searching until we pass the pivot
			l++;
		}

		//Used Find the first element on the right side that is smaller than the pivot element.
		//So that we know this is the element we want to move to the other side 
		while (arr[r] > pivot) 
		{
			//Keep searching until we pass the pivot
			r--;
		} 

		//we want to swap the two elements as long as left pointer doesn't pass the right pointer
		if (l <= r) {
			swap(arr, l, r);
			l++;
			r--;
		}
	}

	//Return the left pointer as that is our new center to divide the array
	return l;
}

function swap(arr, leftIndex, rightIndex) {
	//We basically just swap the two items from the two different index
	let temp = arr[leftIndex];
	arr[leftIndex] = arr[rightIndex];
	arr[rightIndex] = temp;
}

// console.log("Before QuickSort", array);
// quickSort(array, 0, array.length - 1);
// console.log("After QuickSort", array);