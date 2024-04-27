// const credit = (cc: string): string => {
// 	const SSliced = cc.slice(0, -4).replace(/[\s\S]/g, "#")
// 	const HSliced = cc.slice(-4)
// 	return SSliced + HSliced;
// }

const credit = (cc: string): string => {
	const sp = cc.split("").map((chr, i) => (i < cc.length - 4) ? "#" : chr).join("")
	return sp;
}

const creditLog = credit("9345347587934875")
console.log(creditLog)
