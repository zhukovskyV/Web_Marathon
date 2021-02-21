class HardWorker {
    name;
    #age;
    #salary;
     constructor() {
         this.#age = 0;
         this.#salary = 0;
     }

    set age(a) {
        if (a >= 1 && a < 100)
            this.#age = a
    }
    // set salary(a) {
    //     // if (a >= 100 && a <= 10000)
    //         this.#salary = a
    // }
    get age() {
        return this.#age;
    }
    // get salary {
    //      return this.#salary;
    // }
    toObject() {
        return this
    }
}

module.exports = HardWorker;