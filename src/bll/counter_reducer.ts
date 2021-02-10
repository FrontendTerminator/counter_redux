import {useDispatch} from "react-redux";

enum ACTION_TYPE {
    INCREMENT_SCREEN_VALUE = 'INCREMENT-SCREEN-VALUE',
    RESET_SCREEN_VALUE = 'RESET-SCREEN-VALUE',
    CHANGE_INPUT_MAX_VALUE = 'READ-INPUT-MAX-VALUE',
    CHANGE_INPUT_MIN_VALUE = 'READ-INPUT-MIN-VALUE'
}

export type CounterReducerStateType = {
    scoreValue: number
    maxValue: number
    minValue: number
}
export type CounterReducerActionType =
    ReturnType<typeof incrementScreenValueAC> |
    ReturnType<typeof resetScreenValueAC> |
    ReturnType<typeof changeInputMaxValueAC> |
    ReturnType<typeof changeInputMinValueAC>

const numberMaxValue = Number(localStorage.getItem('maxValue'))
const numberMinValue = Number(localStorage.getItem('minValue'))
console.log(numberMaxValue)

let initialState: CounterReducerStateType = {
    scoreValue: 0,
    maxValue: numberMaxValue,
    minValue: numberMinValue
}

export const counterReducer = (state: CounterReducerStateType = initialState, action: CounterReducerActionType) => {
    switch (action.type) {
        case ACTION_TYPE.INCREMENT_SCREEN_VALUE: {
            let stateCopy = {...state}
            stateCopy.scoreValue += 1
            return stateCopy
        }
        case ACTION_TYPE.RESET_SCREEN_VALUE: {
            let stateCopy = {...state}
            stateCopy.scoreValue = stateCopy.minValue
            return stateCopy
        }
        case ACTION_TYPE.CHANGE_INPUT_MAX_VALUE: {
            return {
                ...state,
// @ts-ignore
                maxValue: action.newInputMaxValue
            }
        }
        case ACTION_TYPE.CHANGE_INPUT_MIN_VALUE: {
            return {
                ...state,
// @ts-ignore
                minValue: action.newInputMinValue
            }
        }
        default:
            return state
    }
}


export const incrementScreenValueAC = () => {
    return {type: ACTION_TYPE.INCREMENT_SCREEN_VALUE}
}

export const resetScreenValueAC = () => {
    return {type: ACTION_TYPE.RESET_SCREEN_VALUE}
}

export const changeInputMaxValueAC = (newInputMaxValue: number) => {
    return {type: ACTION_TYPE.CHANGE_INPUT_MAX_VALUE, newInputMaxValue}
}

export const changeInputMinValueAC = (newInputMinValue: number) => {
    return {type: ACTION_TYPE.CHANGE_INPUT_MIN_VALUE, newInputMinValue}
}







