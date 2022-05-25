import queryString from 'query-string';

const buildQuery = params => {
    const query = {
        ...queryString.parse(window.location.search),
        ...params,
    };

    return `?${queryString.stringify(query)}`;
};

export default buildQuery;
