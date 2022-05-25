export const startAction = type => `START-${type}`;
export const successAction = type => `SUCCESS-${type}`;
export const failAction = type => `FAIL-${type}`;
export const callApi = type => `${type}-${CALL_API}`;
