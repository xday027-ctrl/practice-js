const migratoryBirds = (arr) => {
    const count = new Map();

    for (const x of arr) {
        count.set(x, (count.get(x) || 0) + 1);
    }

    let bestId = Infinity;
    let bestFreq = 0;

    for (const [id, freq] of count) {
        if (freq > bestFreq || (freq === bestFreq && id < bestId)) {
            bestFreq = freq;
            bestId = id;
        }
    }

    return bestId;
};


console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
