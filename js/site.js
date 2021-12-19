function getString() {

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);
    displayString(revString);
}

function reverseString(userString) {
    let revString = [];

    for (let i = userString.length - 1; i >= 0; i--) {

        revString += userString[i];
    }
    return revString;

}

function displayString(revString) {
    document.getElementById("msg").innerHTML = `${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}