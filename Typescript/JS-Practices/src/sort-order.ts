export const sort = (words: string) => {
	const sString = words.split(" ")
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
