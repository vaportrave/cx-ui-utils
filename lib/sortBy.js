const getValue = (target, key) => (Array.isArray(key) ? key.reduce(getValue, target) : target[key]);

const sortBy = key => (a, b) => {
    const aValue = getValue(a, key);
    const bValue = getValue(b, key);

    return aValue > bValue ? -1 : bValue > aValue ? 1 : 0;
};

export default sortBy;
