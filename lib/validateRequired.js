import trimValue from './trimValue';

export const isEmptyString = field => !trimValue(field);

export const validateRequired = value =>
    isEmptyString(value) ? l('This field is required') : null;
