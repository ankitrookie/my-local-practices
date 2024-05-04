export const validBraces = (braces: string) => {
	// const result: any = []
	// const openingBraces = ['(', '{', '['];
	// const closingBraces = [')', '}', ']'];
	//
	// for (let x of braces) {
	// 	if (openingBraces.includes(x)) {
	// 		result.push(x)
	// 		console.log("this is after puch result : ", result)
	// 	} else if (closingBraces.includes(x)) {
	// 		const lastOpeningBraces = result.pop();
	// 		console.log("This is after pop result : ", result)
	// 		console.log("value of x, in else if statments : ", x)
	// 		console.log("value of lastOpeningBraces : ", lastOpeningBraces)
	// 		console.log("index of opening braces : ", openingBraces.indexOf(lastOpeningBraces))
	// 		console.log("index of closing braces : ", closingBraces.indexOf(x))
	// 		if (!lastOpeningBraces || openingBraces.indexOf(lastOpeningBraces) !== closingBraces.indexOf(x)) { // if eather of  this gets true it will get false
	// 			return false;
	// 		}
	// 	}
	// }
	// return result.length === 0


	// second solution
	// while (/\(\)|\[\]|\{\}/g.test(braces)) {
	// 	braces = braces.replace(/\(\)|\[\]|\{\}/g, '')
	// }
	// return braces.length === 0
	//
	//

	// onlu for parenthese solution
	while (/\(\)/g.test(braces)) {
		console.log("while loop braces : ", braces)
		braces = braces.replace(/\(\)/g, '')
	}
	console.log("aoutside braces : ", braces)
	return braces.length === 0
}


// const openingBraces = braces.match(/[({[]/g) ?? []
// const closingBraces = braces.match(/[)}\]]/g) ?? []
//
// return openingBraces.length === closingBraces.length

const valBraces = validBraces("()")
console.log(valBraces)
