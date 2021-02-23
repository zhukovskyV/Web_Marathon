function calculateTime() {
    return new Date(1939, 0, 1);
}
let newAge = new Date();

Date.prototype.years = function () {
    return newAge.getFullYear() - this.getFullYear();
}

Date.prototype.months = function () {
    return newAge.getMonth() - this.getMonth();
}

Date.prototype.days = function() {
    return newAge.getDay() - this.getDay();
}

module.exports.calculateTime = calculateTime;