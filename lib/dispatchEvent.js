import isIE from './isIE';

const createEvent = (eventType, eventData) => {
    if (isIE()) {
        const result = document.createEvent('CustomEvent');
        result.initCustomEvent(eventType, true, true, eventData);

        return result;
    }

    return new CustomEvent(eventType, { detail: eventData, bubbles: true, cancelable: true });
};

const dispatchEvent = (eventType, eventData = {}, eventTarget = document) => {
    eventTarget.dispatchEvent(createEvent(eventType, eventData));
};

export default dispatchEvent;
