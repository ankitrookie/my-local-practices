// 1st solution

// function arrayDiff(a: number[], b: number[]) {
// 	// remove all value from which are matchable to a and visa versa
// 	const set1 = new Set(a);
// 	const set2 = new Set(b);
//
// 	const filterOut = new Set([...set1, ...set2]);
//
// 	const nonRepeatedNum = [...set1].filter(x => {
// 		const isInSet1 = set2.has(x);
// 		return !isInSet1
// 	})
//
// 	return nonRepeatedNum
// }

// 2nd solution

// function arrayDiff(a: number[], b: number[]) {
// 	const nonRepeatedNum = a.filter(x => !b.includes(x));
// 	return nonRepeatedNum
// }
//
// 3rd solution
//

function arrayDiff(a: number[], b: number[]) {
	const nonRepeatedNum1 = a.filter(x => !b.includes(x));

	const nonRepeatedNum2 = b.filter(x => !a.includes(x));

	const combinedVal = [...nonRepeatedNum1, ...nonRepeatedNum2]
	return combinedVal
}

const caldiff = arrayDiff([1, 8, 2], [])
console.log(caldiff);
