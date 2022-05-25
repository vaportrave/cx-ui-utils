const validateValue = (value, length) => {
    const preparedValue = value.replace(/\s/g, '');

    return preparedValue.length >= length;
    // Check on numbers was removed for backward compatibility
    // - fixing a bug when user wasn't able to update a profile
    // - we already have numbers in a database, which are contain hyphens
    // return preparedValue.length >= length && PATTERN_ONLY_NUMBERS.test(preparedValue);
};

const validatePhone = value => {
    return value && !validateValue(value, 10) ? l('Invalid phone number. Please try again') : null;
};

export default validatePhone;
