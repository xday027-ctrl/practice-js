function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        let applePosition = a + apples[i];

        if (applePosition >= s && applePosition <= t) {
            appleCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        let orangePosition = b + oranges[i];

        if (orangePosition >= s && orangePosition <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}



countApplesAndOranges(
    7,
    11,
    5,
    15,
    [-2, 2, 1],
    [5, -6]
);