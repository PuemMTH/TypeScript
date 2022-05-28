function addNumber(...numbers: number[]) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function addNumber2(num1?: number, num2?: number, num3?: number) {
    let sum = 0;
    if (num1) {
        sum += num1;
    }
    if (num2) {
        sum += num2;
    }
    if (num3) {
        sum += num3;
    }
    return sum;
}
// console.log(addNumber2(1, 2));
// console.log(addNumber(1, 2, 3, 4, 5));