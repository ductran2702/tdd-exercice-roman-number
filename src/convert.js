const convert = (str) => {
    var prev;
    var result = 0;
    const dict = { 'I': 1, 'V': 5, 'X': 10, 'L': 50 };
    for (let i = 0; i < str.length; i++) {
        var number = dict[str[i]];
        if (prev < number) {
            result += number - 2 * prev;
        } else {
            result += number;
        }
        prev = number;
    }

    return result;
}

export default convert;
