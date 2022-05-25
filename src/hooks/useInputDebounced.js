import { useEffect, useMemo } from "react";
import debounce from 'lodash.debounce';

const useInputDebounced = (aStateToSet, aStateToListen, aCondition, timeInMiliseconds) => {

    const updateState = (value) => {
        aStateToSet(value);
    };

    const updateStateDebounced = useMemo(() => {
        return debounce(updateState, timeInMiliseconds);
    }, [])
    
    useEffect(() => {
        if(aCondition){
            updateStateDebounced(aStateToListen);
        }
    return () => {
        updateStateDebounced.cancel();
    }}, [aStateToListen]);

};

export default useInputDebounced;