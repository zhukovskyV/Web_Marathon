const beginRange = prompt("Enter begin range of 1-100");
const endRange = prompt("Enter end range 1-100");

checkDivision(beginRange, endRange);

function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        let str = [];

        if (i % 2 === 0) {
            str.push("even");
        }
        if (i % 3 === 0) {
            str.push('a multiple of 3');
        }
        if (i % 10 === 0) {
            str.push('a multiple of 10');
        }
        if (str.length === 0) {
            console.log(`${i} -`);
        } else
            console.log(`${i} is ${str.join(", ")}`);
    }
}
