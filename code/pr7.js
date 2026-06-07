function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];

    let maxCount = 0;
    let minCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }

    return [maxCount, minCount];
}


const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores)); // [2, 4]
