function DestructiveBubbleSort(unsortedArray) {
	let length = unsortedArray.length;

	for (let i = 0; i < length; i++)
	{
		let notSwap = true;

		for (let j = 0; j < length - 1; j++)
		{
			if (unsortedArray[j] > unsortedArray[j + 1])
			{
				let temp = unsortedArray[j];
				unsortedArray[j] = unsortedArray[j + 1];
				unsortedArray[j + 1] = temp;

				notSwap = false;
			}
		}

		if (notSwap)
		{
			break;
		}
	}
	return unsortedArray;
}

function NonDestructiveBubbleSort(unsortedArray) {
	let newArray = [...unsortedArray]
	let length = newArray.length;
	let count = 0;

	for (let i = 0; i < length; i++)
	{
		let notSwap = true;
		count++;

		for (let j = 0; j < length - 1; j++)
		{
			if (newArray[j] > newArray[j + 1])
			{
				let temp = newArray[j];
				newArray[j] = newArray[j + 1];
				newArray[j + 1] = temp;

				notSwap = false;
			}
		}

		if (notSwap)
		{
			break;
		}
	}
	return newArray;
}

//For Testing purpose

/*var arr = [1,4,5,3,2]
console.log("Original Array Before: " + arr);
console.log("Result of Non-Destructive: " + NonDestructiveBubbleSort(arr));
console.log("Original Array After: " + arr);
console.log("Result of Destructive: " + DestructiveBubbleSort(arr));
console.log("Original Array After: " + arr);*/