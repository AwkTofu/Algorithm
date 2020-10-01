function Fibonacci(num)
{
	if (num <= 1) return num;

	return Fibonacci(num - 2) + Fibonacci(num - 1);
}

let test = [0,2,3,1,4,2]
console.log(Fibonacci(6));