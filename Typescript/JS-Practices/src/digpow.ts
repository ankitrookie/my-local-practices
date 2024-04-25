function digPow(n: number, p: number) {
	const SSplit = n.toString().split('');
	let sum = 0;
	let CPower = p;
	for (let i of SSplit) {
		sum += Math.pow(parseInt(i), CPower);
		CPower++;
	}
	// next we have to loop through and check if any of the digit while 
	// looping, and multiplying the digit with our n, it equesl our same sum digit we got

	// for (let k = 1; k <= sum; k++) {
	// 	if (sum === k * n) {
	// 		return k;
	// 	}
	// }

	if (sum % n === 0) {
		return sum / n
	} else {
		return -1;
	}
}

const resultX = digPow(46288, 3);

console.log(resultX);
