// function RegularExpresion(text) {{1,20}
function heroName() {
    let animal_name_reg = RegExp("^[A-Za-z]+$");
    let result = prompt("What animal is the superhero most similar to?",
        "Your name must contain only letters and length less 21 symbols");

    if (result.match(animal_name_reg) === null) {
        alert("Error name");
        throw("Error name");
    }
    return result;
}

function heroGender() {
    let gender = RegExp("^male$|^female$|^$");
    let result = prompt("Is the superhero male or female? Leave blank if unknown or other.",
        "");
    if (result.match(gender) === null) {
        alert("Error gender");
        throw("Error gender");
    }
    return result;
}

function heroAge() {
    let age = RegExp("[0-9]{1,5}")
    let result = prompt("How old is the superhero?",
        "Your age must contain only digits and and less 6 digits");
    result.match(age);

    if (result.match(age) === null) {
        alert("Error age");
        throw("Error age");
    }
    return result;
}

function heroNameMaker() {
    let name = heroName();
    let gender = heroGender();
    let age = heroAge();
    let sub_name = "hero";

    switch (gender) {
        case "female":
            sub_name = "woman";
            break;
        case "male":
            sub_name = "man";
            break;
    }
    if (age < 18 && gender === "female") sub_name = "girl";
    if (age < 18 && gender === "male") sub_name = "boy";

    alert(`The super hero is: ${name}-${sub_name}`);
}
heroNameMaker();
