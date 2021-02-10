import {combineReducers, createStore} from "redux"
import {counterReducer} from "./counter_reducer";

export type RootStateStoreType = ReturnType<typeof reducers>

let reducers = combineReducers({
    counterData: counterReducer
})

export let store = createStore(reducers)

store.subscribe(()=>{
    localStorage.setItem('maxValue', store.getState().counterData.maxValue.toString())
    localStorage.setItem('minValue', store.getState().counterData.minValue.toString())
})

// @ts-ignore
window.store = store