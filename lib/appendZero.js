const appendZero = number => {
    return number < 10 ? `0${number}` : number.toString();
};

export default appendZero;
