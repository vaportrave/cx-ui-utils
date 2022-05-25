import cookieKeys from '../cookieKeys';

const buildHeaders = (xFileToken, isUpload = false) => {
    const token = getCookie(cookieKeys.XSRF_TOKEN);
    const headers = {};

    if (token) {
        headers['X-XSRF-TOKEN'] = token;
    }

    if (xFileToken) {
        headers['X-FILE-TOKEN'] = xFileToken;
    }

    if (!isUpload) {
        headers['Content-Type'] = 'application/json';
    }

    headers['Accept'] = 'application/json';

    return headers;
};

export default buildHeaders;
