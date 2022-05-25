/* eslint-disable no-param-reassign */
const load = (tag, url) => {
    return new Promise((resolve, reject) => {
        tag.onload = () => resolve();
        tag.onerror = () => reject(new Error(`Loading ${url} failed.`));

        return document.head.appendChild(tag);
    });
};

export default load;
