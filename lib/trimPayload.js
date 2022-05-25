import trimValue from './trimValue';

const trimPayload = payload => {
    const keys = Object.keys(payload);

    const result = keys.reduce((acc, key) => {
        acc[key] = trimValue(payload[key]);
        return acc;
    }, {});

    return result;
};

export default trimPayload;
