import {useDispatch as _useDispatch} from "react-redux";

export enum ACTION_TYPE {
    INCREMENT_SCREEN_VALUE = 'INCREMENT-SCREEN-VALUE',
    RESET_SCREEN_VALUE = 'RESET-SCREEN-VALUE',
    CHANGE_INPUT_MAX_VALUE = 'READ-INPUT-MAX-VALUE',
    CHANGE_INPUT_MIN_VALUE = 'READ-INPUT-MIN-VALUE'
}

export type CounterReducerActionType = IncrementScreenValueACType | ResetScreenValueACType |
    ChangeInputMaxValueACType | ChangeInputMinValueACType

type IncrementScreenValueACType = {
    type: ACTION_TYPE.INCREMENT_SCREEN_VALUE
}
export const incrementScreenValueAC = (): IncrementScreenValueACType => {
    return {type: ACTION_TYPE.INCREMENT_SCREEN_VALUE}
}

type ResetScreenValueACType = {
    type: ACTION_TYPE.RESET_SCREEN_VALUE
}
export const resetScreenValueAC = (): ResetScreenValueACType => {
    return {type: ACTION_TYPE.RESET_SCREEN_VALUE}
}

type ChangeInputMaxValueACType = {
    type: ACTION_TYPE.CHANGE_INPUT_MAX_VALUE
    newInputMaxValue: number
}
export const changeInputMaxValueAC = (newInputMaxValue: number): ChangeInputMaxValueACType => {
    return {type: ACTION_TYPE.CHANGE_INPUT_MAX_VALUE, newInputMaxValue}
}

type ChangeInputMinValueACType = {
    type: ACTION_TYPE.CHANGE_INPUT_MIN_VALUE
    newInputMinValue: number
}
export const changeInputMinValueAC = (newInputMinValue: number): ChangeInputMinValueACType => {
    return {type: ACTION_TYPE.CHANGE_INPUT_MIN_VALUE, newInputMinValue}
}

export function useDispatch () {
    const dispatch = _useDispatch()
    return (action: CounterReducerActionType) => dispatch(action)
}