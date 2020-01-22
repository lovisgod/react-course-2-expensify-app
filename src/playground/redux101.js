import { createStore } from 'redux';

const store = createStore((state= {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
         const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1;
         return { count: state.count + incrementBy}
            break;
        case 'DECREMENT': 
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
         return { count: state.count - decrementBy}
            break;
        case 'RESET':  return { count: 0}
            break;    
        default: return state
            break;
    }
});

//this get called when there is a change in the state of redux.
// note that the return value of subscribe is unsubscribe
const  unsubscribe = store.subscribe(() => {
 console.log(store.getState());
})

// actions 
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})

store.dispatch({
    type: 'INCREMENT',
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 2,
})

// calling unsubscribe here stops the subscription.
unsubscribe();

store.dispatch({
    type: 'RESET'
})
