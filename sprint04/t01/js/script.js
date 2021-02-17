let liElem = document.getElementsByTagName("li");

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
    liElem[i].appendChild(document.createElement("br"))

    for (let j = 0; j < attrDataValue.length; j++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", `elem ${attrDataValue[j]}`);
        liElem[i].appendChild(newDiv);
    }
}