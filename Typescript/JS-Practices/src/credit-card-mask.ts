const credit = (cc: string): string =
	{
		const SSliced = cc.slice(1, 2)
	return SSliced;
}

const creditLog = credit("AnkitMukhia")
console.log(creditLog)
