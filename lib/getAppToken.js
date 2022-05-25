const getAppToken = () => {
    const token = window.localStorage.getItem('appToken');

    return token ? JSON.parse(token) : {};
};

export default getAppToken;
