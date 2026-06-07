const diagonalDifference = (arr) => {
    let p = 0, s = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        p += arr[i][i];
        s += arr[i][n - 1 - i];
    }

    return Math.abs(p - s);
};


const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(matrix)); 