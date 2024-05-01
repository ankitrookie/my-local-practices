const squareDigit = (num: number): number => {
	const SNumbers = num.toString().split("")
	let FValue = "";
	SNumbers.map(di => {
		const toPower = Math.pow(Number(di), 2)
		FValue += toPower.toString().concat();
	})
	return Number(FValue)
}

const squareValueDigit = squareDigit(9119)
console.log(squareValueDigit)
