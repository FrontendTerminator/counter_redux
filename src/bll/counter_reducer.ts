import {ACTION_TYPE, CounterReducerActionType} from "./actions"

export type CounterReducerStateType = {
    scoreValue: number
    maxValue: number
    minValue: number
}

const numberMaxValue = Number(localStorage.getItem('maxValue'))
const numberMinValue = Number(localStorage.getItem('minValue'))

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
            if (stateCopy.maxValue < stateCopy.scoreValue) {
                return state
            }
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
                maxValue: action.newInputMaxValue
            }
        }
        case ACTION_TYPE.CHANGE_INPUT_MIN_VALUE: {
            return {
                ...state,
                minValue: action.newInputMinValue
            }
        }
        default:
            return state
    }
}









