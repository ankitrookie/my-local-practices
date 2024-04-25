
// 1st example
const sumOfTownum = (a: number, b: number): number => {
  const sum: number = a + b;
  return sum;
}

const displayResult = (data: number): void => {
  console.log("This is sum " + data);
}

const sum = sumOfTownum(34, 67);
displayResult(sum);

// 2nd examokle

const totalResult = (a: number, b: number, callback: (result: number) => void): void => {
  let result = a + b;
  callback(result);
}

const finalResult = (result: number) => {
  console.log("This is the sum " + result);
}

totalResult(23, 45, finalResult);

const calculateFun = (firstVal: string, secondVal: number, thirstVal: number): string => {
  let cal = "";
  for (let i = 0; i < firstVal.length; i++) {
    if (i >= secondVal && i < thirstVal) {
      cal = cal + firstVal[i];
    }
  }
  return cal;
};

const fullname = "ankit mukhia";

let value = calculateFun(fullname, 3, 5);

console.log(value);
