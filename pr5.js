const canMeet = (start1, speed1, start2, speed2) => {

    const distance = start2 - start1;
    const jumpGap = speed1 - speed2;

    const result =
        jumpGap > 0 && distance % jumpGap === 0
            ? "YES"
            : "NO";

    return result;
};



console.log(canMeet(0, 3, 4, 2));