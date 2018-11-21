function oddOrEven(value) {
    return value % 2 === 0 ? "Even" : "Odd";
}

function random() {
    return Math.floor(Math.random() * 10);
}

function array() {
    return [0, 1, 3, 4, 5, 6, 8, 9, 4, 3, 3, 2, 21, 2, 3, 4, 4, 5, 6, 6, 5, 4, 4];
}

module.exports = {
    oddOrEven,
    random,
    array
}