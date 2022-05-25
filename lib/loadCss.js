import load from './load';
import hasTag from './hasTag';

const hasCss = hasTag('link');

const loadCss = url => {
    if (hasCss(url)) {
        return Promise.resolve();
    }

    const css = document.createElement('link');

    css.rel = 'stylesheet';
    css.href = url;
    css.type = 'text/css';
    css.media = 'all';

    return load(css, url);
};

export default loadCss;
