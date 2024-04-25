function narcissistic(value: number) {
	// break the numner into digits
	const iDigits = value.toString().split('');
	// raise the digit, to the number of dights
	let rDigits = 0;
	for (let n of iDigits) {
		console.log(n)
		rDigits += Math.pow(parseInt(n), iDigits.length);
	}

	if (rDigits === value) {
		return true;
	} else {
		return false
	}
}

const val = narcissistic(153);

console.log(val);


