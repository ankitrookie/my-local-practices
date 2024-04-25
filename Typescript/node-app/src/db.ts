type GreetArg = number | string;
type NumberArr = number[];
// interface NumberArr number[];

const funct = (id: GreetArg): GreetArg => {
  return id;
}

const arre = (num: NumberArr) => {
  let a = 0;
  for (let i in num) {
    if (num[i] > a) {
      a = num[i];
    }
  }
  return a;
};

const v = arre([1, 2, 3, 4]);

console.log(v)

// function doSomething(cb2: (str: string, num: number) => string): string {
//   const x = cb2("3", 45);
//   return x;
// }
//
// const x = doSomething((str: string, num: number) => {
//   return str;
// })
//
// console.log(x)


console.log(funct("ankit"));
