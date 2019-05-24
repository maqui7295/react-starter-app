import actions from './actionTypes'
import { combineReducers, createStore } from 'redux'


function addTodo(text) {
    return {
        type: actions.ADD_TODO,
        text
    }
}


function todos(state = [], action){
    switch (action.type) {
        case actions.ADD_TODO:
            return [...state, { text: action.text }]
    
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
})


let store = createStore(todoApp)

console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

export default store;