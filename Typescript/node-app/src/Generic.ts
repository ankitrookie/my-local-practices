function getFirstElement<T>(arr: T[]) {
    return arr[0];
}


const mixedArray = ["harkiratSingh", "anotherElement"];
const el = getFirstElement(mixedArray);
console.log(el.toLowerCase())
