    const calculateNumber = (type, a, b) => {
    const anumber = Math.round(a);
    const bnumber = Math.round(b);
    let cnumber = 0;

    switch (type) {
        case "SUM":
            cnumber = anumber + bnumber;
            break;
        case "SUBTRACT":
            cnumber = anumber - bnumber;
            break;
        case "DIVIDE":
            if (bnumber === 0) {
                cnumber = "Error";
            } else {
                cnumber = anumber / bnumber;
            }
            break;
        default:
            throw new Error("Invalid operation type");
    }

    return cnumber;
};

module.exports = calculateNumber;
