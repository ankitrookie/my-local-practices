const likes = (a: string[]) => {
	switch (a.length) {
		case 0:
			return "no one has like this";
		case 1:
			return `${a[0]} likes this`;
			break;
		case 2:
			return `${a[0]}, ${a[1]} likes this`;
			break;
		case 3:
			return `${a[0]} ${a[1]} and ${a[3]} likes this`;
			break;
		default:
			return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
	}
}

const valLike = likes([])
console.log(valLike);
