const findTotalNumbers = (firstArray, secondArray) => {

    let result = 0;

    const limit = Math.min(...secondArray);

    for (let i = 1; i <= limit; i++) {

        const fitsFirst = firstArray.filter(num => i % num === 0).length === firstArray.length;

        const fitsSecond = secondArray.filter(num => num % i === 0).length === secondArray.length;

        if (fitsFirst && fitsSecond) {
            result++;
        }
    }

    return result;
};


// TEST
console.log(
    findTotalNumbers(
        [2, 4],
        [16, 32, 96]
    )
);
