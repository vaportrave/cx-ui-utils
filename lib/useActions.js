import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

const useActions = (actions, deps) => {
    const dispatch = useDispatch();

    return useMemo(
        () =>
            Array.isArray(actions)
                ? actions.map(a => bindActionCreators(a, dispatch))
                : bindActionCreators(actions, dispatch),
        deps ? [dispatch, ...deps] : [dispatch], // eslint-disable-line react-hooks/exhaustive-deps
    );
};

export default useActions;
