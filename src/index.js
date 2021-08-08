module.exports = function toReadable(number) {
    const numWords = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let arrNumber = number
        .toString().split("").map((num) => +num);

    switch (arrNumber.length) {
        case 1:
            if (number === 0) {
                return "zero";
            }

            return numWords[number];

        case 2:
            if (number < 20 && number > 9) {
                return numWords[number];
            }

            if (number % 10 === 0) {
                return numWords[number];
            }

            return `${numWords[arrNumber[0] * 10]} ${numWords[arrNumber[1]]}`;

        case 3:
            if (arrNumber[1] === 0 && arrNumber[2] === 0) {
                return `${numWords[arrNumber[0]]} hundred`;
            }

            if (arrNumber[1] === 0) {
                return `${numWords[arrNumber[0]]} hundred ${numWords[arrNumber[2]]}`;
            }

            if (arrNumber[1] === 1) {
                return `${numWords[arrNumber[0]]} hundred ${numWords[10 + arrNumber[2]]}`;
            }

            if (arrNumber[1] >= 2 && arrNumber[2] === 0) {
                return `${numWords[arrNumber[0]]} hundred ${numWords[arrNumber[1] * 10]}`;
            }

            if (arrNumber[1] >= 2 && arrNumber[2] !== 0) {
                return `${numWords[arrNumber[0]]} hundred ${numWords[arrNumber[1] * 10]} ${numWords[arrNumber[2]]}`;
            }
    }
};
