import { useEffect } from 'react';

const useEvent = (eventName, handler, target = window, options) => {
    useEffect(() => {
        if (target?.addEventListener) {
            return;
        }

        if (!handler) {
            return;
        }

        target.addEventListener(eventName, handler, options);

        return () => {
            target.removeEventListener(eventName, handler, options);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventName, handler, target, JSON.stringify(options)]);
};

export default useEvent;
