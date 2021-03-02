import {ACTION_TYPE, CounterReducerActionType} from "./actions"

export type CounterReducerStateType = {
    scoreValue: number
    maxValue: number
    minValue: number
    mainDisplayValue: boolean
}

let initialState: CounterReducerStateType = {
    scoreValue: 0,
    maxValue: 5,
    minValue: 0,
    mainDisplayValue: true
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
                minValue: action.newInputMinValue,
                scoreValue: action.newInputMinValue
            }
        }
        case ACTION_TYPE.CHANGE_MAIN_DISPLAY: {
            return {
                ...state,
                mainDisplayValue: action.value
            }
        }
        default:
            return state
    }
}









