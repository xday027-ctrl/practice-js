function gradingStudents(grades) {
    let result = [];

    for (let grade of grades) {
        if (grade < 38) {
            result.push(grade);
        } else {
            let nextMultiple = Math.ceil(grade / 5) * 5;

            if (nextMultiple - grade < 3) {
                result.push(nextMultiple);
            } else {
                result.push(grade);
            }
        }
    }

    return result;
}


const grades = [73, 67, 38, 33];


const result = gradingStudents(grades);


console.log(result.join('\n'));