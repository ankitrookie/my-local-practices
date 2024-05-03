export const sort = (words: string) => {
	const sString = words.split(" ")
	//     If you get a positive number: The toy with the bigger number goes first.
	//     If you get a negative number: The toy with the smaller number goes first.
	//     If you get zero: Their order stays the same.
	//
	// So, if you have toys with numbers [3, 1, 5, 2] and you use this magic rule,     you'll compare them like this:
	//
	//     Comparing 3 and 1: 3 - 1 = 2 (positive), so 1 goes first.
	//     Comparing 1 and 5: 1 - 5 = -4 (negative), so 1 stays first.
	//     Comparing 5 and 2: 5 - 2 = 3 (positive), so 2 goes next.

	sString.sort((a: any, b: any) => {
		const charA = parseInt(a.match(/\d+/));
		const charB = parseInt(b.match(/\d+/));
		console.log("a :", a + " b :", b)
		return charA - charB;
	})

	return sString.join(" ")
}

const sortValue = sort("");

console.log(sortValue);
