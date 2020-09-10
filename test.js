//let testArr = [1, 3, 5, 7, 8, 9, 20, 42, 64]
let testMoney = 0.23;

let bills = {
	tenDollar: 10.0,
	fiveDollar: 5.0,
	oneDollar: 1.0,
	quarter: 0.25,
	dime: 0.1,
	nickel: 0.05,
	penny: 0.01
}

let FindingChange = (currency, amount) => {
	let resultBills = {};
	let cashLeftover = amount;

	for (let key in currency)
	{
		console.log(key, " -> ", currency[key])

		console.log(currency[key], ">" ,cashLeftover, currency[key] > cashLeftover)
		while (cashLeftover >= currency[key])
		{
			if (resultBills[key])
			{
				resultBills[key] += 1;
			}
			else
			{
				resultBills[key] = 1;
			}
			console.log("Math", cashLeftover, currency[key])
			cashLeftover = (cashLeftover - currency[key]).toFixed(2)
		}
	}
	console.log("Final Result", resultBills)
}

console.log((6.26 - 5.00).toFixed(2))
FindingChange(bills, testMoney);