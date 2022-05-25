import load from './load';
import hasTag from './hasTag';

const hasScript = hasTag('script');

const loadScript = url => {
    if (hasScript(url)) {
        return Promise.resolve();
    }

    const js = document.createElement('script');

    js.type = 'text/javascript';
    js.src = url;

    return load(js, url);
};

export default loadScript;
