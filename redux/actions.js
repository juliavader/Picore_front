/* =========
    ACTIONS 
============*/

/*-- CounterApp ---*/

// ---------- increase counter 

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export function increaseCounter() {
    return {
        type: INCREASE_COUNTER
    }
}

// ---------- decrease counter 

export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export function decreaseCounter() {
    return {
        type: DECREASE_COUNTER
    }
}


