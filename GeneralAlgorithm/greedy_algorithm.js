let testMoney = 6.27;

let bills = {
	hundredDollar: 100.0,
	tenDollar: 10.0,
	fiveDollar: 5.0,
	oneDollar: 1.0,
	quarter: 0.25,
	dime: 0.1,
	nickel: 0.05,
	penny: 0.01
}

let FindingChange = (currency, amount) => {

	//ResultBill is all the bill types and amount of bills we are returning
	let resultBills = {};
	let cashLeftover = amount;

	//We are checking from the highest bill first to the lowest
	for (let key in currency)
	{
		//While amount leftover is greater than our current bill
		//we take and subtract it based on the bill's value
		while (cashLeftover >= currency[key])
		{
			//Checking to see if the bill type already exist in our return hash.
			if (resultBills[key])
			{   //If it does, we increment the bill by one.
				resultBills[key] += 1;
			}   
			else
			{   //if it doesn't, we add the new key/value pair into the hash.
				resultBills[key] = 1;
			}
			//Then we subtract the value from the leftover cash.
			//toFixed(2), this is for fixing any float point errors that JavaScript have.
			//The 2 is to fix it for 2 decimal point.
			cashLeftover = (cashLeftover - currency[key]).toFixed(2)
		}
	}
	return resultBills;
}

FindingChange(bills, testMoney);