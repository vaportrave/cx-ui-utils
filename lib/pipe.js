const pipe = (...fns) => arg => fns.reduce((a, fn) => fn(a), arg);

export default pipe;
