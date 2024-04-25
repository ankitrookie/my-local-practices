const Dismvowel = (inp: string[]) => {
	let FComment = "";
	for (let i of inp) {
		FComment += i.replace(/[aeiou]/gi, "")
	}
	return FComment;
}

const x = Dismvowel(["this is me", "this is ass hole"]);

console.log(x);

