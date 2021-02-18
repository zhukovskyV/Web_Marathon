// let tableHeader = ["Name", "strength", "Age"]
//
let tableRows = [
    {name: "Black Panther", strength: 66, age: 53},
    {name: "Captain America", strength: 79, age: 137},
    {name: "Captain Marvel", strength: 97, age: 26},
    {name: "Hulk", strength: 80, age: 49},
    {name: "Iron Man", strength: 88, age: 48},
    {name: "Spider-Man", strength: 78, age: 16},
    {name: "Thanos", strength: 99, age: 1000},
    {name: "Thor", strength: 95, age: 1000},
    {name: "Yon-Rogg", strength: 73, age: 52},
]
//
// class Column {
//     constructor(nameOfColl, len/*, elem*/) {
//         this.nameOfColl = nameOfColl;
//         this.len = len;
//         // this.elem = elem;
//     }
//
//     render() {
//         let mainDiv = document.createElement("div");
//         // let col = document.createElement(this.nameOfColl);
//         let heroName = this.nameOfColl
//         for (let i = 0; i < this.len; i++) {
//             let col = document.createElement("div");
//             mainDiv.appendChild(col).classList.add("name");
//             let value = document.querySelector(".name")
//             console.log(heroName)
//             value.innerHTML = `${heroName}`
//         }
//     }
//     sortByName() {}
//     sortByStrength() {}
//     sortByAge() {}
// }
//
// let column = new Column(tableRows.name, 10)
//
// column.render();

// function render() {
//     let table = document.createElement("table");
//
//     for (let i = 0; i <= tableRows.length ; i++) {
//         let coll = new Column(tableRows.name[i], tableRows.length, )
//     }
//
// }
function fillTable() {
    let main = document.getElementsByTagName("main")[0];
    let table = document.createElement("div");
    main.appendChild(table);
    table.setAttribute("class", "mainTable");

    for (let i = 0; i < 9; i++) {
        let col = document.createElement("div");
        table.appendChild(col);
        console.log(tableRows[i].name);
        col.setAttribute("class", "heroNames");
        console.log(table.appendChild(col));
    }

    // for (let i = 0; i < 9; i++);
    // let value = document.querySelector(".heroNames");
    // value.innerHTML = `${tableRows[i].name}`
}

fillTable();

























