// function RegularExpresion(text) {{1,20}
function heroName() {
    let animal_name_reg = RegExp("^[A-Za-z]+$");
    let result = prompt("What animal is the superhero most similar to?",
        "Your name must contain only letters and length less 21 symbols");

    if (result.match(animal_name_reg) === null) {
        alert("Error name");
        return false;
    }
    return result.match(animal_name_reg);
}

function heroGender() {
    let gender = RegExp("^male$|^female$|^$");
    let result = prompt("Is the superhero male or female? Leave blank if unknown or other.",
        "");
    if (result.match(gender) === null) {
        alert("Error gender");
        return false;
    }
    return result.match(gender);
}

function heroAge() {
    let age = RegExp("[0-9]{1,5}")
    let result = prompt("How old is the superhero?",
        "Your age must contain only digits and and less 6 digits");
    result.match(age);

    if (result.match(age) === null) {
        alert("Error age");
        return false;
    }
    return result.match(age);
}

function heroNameMaker() {
    // if(!heroName() || !heroGender() || !heroAge())
    //     return 0;
    let name = heroName();
    let gender = heroGender();
    let age = heroAge();
    let sub_name = "hero";


        return 0;
    switch (gender) {
        case "female":
            sub_name = "woman";
            break;
        case "male":
            sub_name = "man";
            break;
    }

    switch (age) {
        case age < 18 && gender === "female":
            sub_name = "girl";
            break;
        case age < 18 && gender === "male":
            sub_name = "boy";
            break;
    }

    alert(`The super hero is: ${name}-${gender}`);
}
heroNameMaker();
