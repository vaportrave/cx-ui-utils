import { eventChannel } from 'redux-saga';

const createEventChannel = (eventName, target = document) => {
    return eventChannel(emitter => {
        target.addEventListener(eventName, emitter);

        return () => {
            target.removeEventListener(eventName, emitter);
        };
    });
};

export default createEventChannel;
