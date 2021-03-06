import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootStateStoreType} from "../../bll/store";
import {
    incrementScreenValueAC,
    changeMainDisplay,
    resetScreenValueAC,
    useDispatch,
    changeInputMaxValueAC, changeInputMinValueAC
} from "../../bll/actions";
import s from './generalScreen.module.css'

export function GeneralScreen() {

    const scoreValue = useSelector<RootStateStoreType, number>( state => state.counterData.scoreValue)
    const dispatch = useDispatch() // custom dispatch from action.ts

    useEffect(()=> {
        console.log('effect')
        let numberMaxValue =  Number(localStorage.getItem('maxValue'))
        let numberMinValue = Number(localStorage.getItem('minValue'))
        dispatch(changeInputMaxValueAC(numberMaxValue))
        dispatch(changeInputMinValueAC(numberMinValue))

    }, [])

    return(
        <div className={s.counterBlock}>
            <div className={s.screenBlock}>
                <span>{scoreValue}</span>
            </div>
            <div className={s.keyboardBlock}>
                <button className={s.button} onClick={() => dispatch(incrementScreenValueAC())}>inc</button>
                <button className={s.button} onClick={() => dispatch(resetScreenValueAC())}>reset</button>
                <button className={s.button} onClick={() => dispatch(changeMainDisplay(false))}>set</button>
            </div>
        </div>
    )
}

