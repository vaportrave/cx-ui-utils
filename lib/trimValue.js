import trimPayload from './trimPayload';
import { isString, isArray, isObject } from './isTypeOf';

const trimValue = value => {
    if (isString(value)) {
        return value.trim();
    }

    if (isArray(value)) {
        return value.map(trimValue);
    }

    if (isObject(value)) {
        return trimPayload(value);
    }

    return value;
};

export default trimValue;
