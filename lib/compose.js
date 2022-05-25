const compose = (...fns) =>
    fns.reduce(
        (a, fn) => (...args) => a(fn(...args)),
        arg => arg,
    );

export default compose;
