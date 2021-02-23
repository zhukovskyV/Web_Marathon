function calculateTime() {
    let result = [];
    let date = new Date(1939, 0, 1);
    let diff;

    diff = (Number(new Date()) - Number(date)) / 7;
    let quantumDate = new Date(Number(date) + Number(diff));
    result.push(quantumDate.getFullYear() - date.getFullYear());
    result.push(quantumDate.getMonth() - date.getMonth());
    result.push(quantumDate.getDate() - date.getDate());

    return result;
}

module.exports.calculateTime = calculateTime;