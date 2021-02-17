let liElem = document.getElementsByTagName("li");
let attrDataValue = null;



for (let i = 0; i < liElem.length; i++) {
    if (liElem[i].getAttribute("class") !== "good" &&
        liElem[i].getAttribute("class") !== "evil" &&
        liElem[i].getAttribute("class") !== "unknown" ||
        liElem[i].hasAttribute("class") === null) {
        liElem[i].setAttribute("class","unknown");
    }
    if (liElem[i].hasAttribute("data-element") === false) {
        liElem[i].setAttribute("data-element", "none");
    }

    let attrDataValue = liElem[i].getAttribute("data-element").split(' ');

    console.log(attrDataValue.length);
    let newDiv = document.createElement("div");
    for (let j = 0; j < attrDataValue.length; j++) {
        console.log(attrDataValue[j]);
        newDiv.setAttribute("class", `elem ${attrDataValue[j]}`)
    }


    // console.log(attrDataValue);


    // liElem[i].innerHTML = `
    // <div class=elem${attr}>
    // `
}