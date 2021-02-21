class StrFrequency {
    constructor(str) {
        this.str = str;
    }
    letterFrequencies() {
        let freq = {};
        let arr = this.str.match(/[A-Za-z]+/g)

        if (arr === null)
            return freq;
        arr = arr.join('');
        for (let i = 0; i < arr.length; i++) {
            let char = arr.charAt(i).toUpperCase();

            if (freq[char]) {
                freq[char]++;
            } else {
                freq[char] = 1;
            }
        }
        return freq;
    }

    wordFrequencies() {
        let arr = this.str.match(/[A-Za-z]+/g);
        let freq = {};

        if (arr === null)
            return freq;
        for (let i = 0; i < arr.length; i++) {
            let wordFreq = arr[i].toUpperCase();

            if (freq[wordFreq]) {
                freq[wordFreq]++;
            } else {
                freq[wordFreq] = 1;
            }
        }
        return freq;

    }
    reverseString() {
        return this.str.split("").reverse().join("");
    }
}

module.exports = StrFrequency;