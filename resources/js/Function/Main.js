export const RupiahFormat = (num) => {
    let num_string = num.toString(),
        rest_number = num_string.length % 3,
        rupiah = num_string.substr(0, rest_number),
        thousand = num_string.substr(rest_number).match(/\d{3}/g);
    if (thousand) {
        let separator = rest_number ? "." : "";
        rupiah += separator + thousand.join(".");
    }
    return rupiah;
};
