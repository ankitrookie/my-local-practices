function nutural(num: number) {
	if (num < 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < num; i++) {
		// so here we check, if our each loop number multiple by 3, 0r 5
		// without out remeder then return else it is not nutural number
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

const valT = nutural(10)
console.log(valT)

// the multiple of 3 below 10 are 3,6,9 
// basically it says when we mult the value should be below ten 
// and the multiple of 5 below 10 is 5 : which is 5 * 1 = 5; if 
// we go above it it is 5 * 2 = 10; so 10 is above 10
