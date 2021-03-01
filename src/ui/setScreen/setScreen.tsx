import React, {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {changeInputMaxValueAC, changeInputMinValueAC, changeMainDisplay, useDispatch} from "../../bll/actions";
import {RootStateStoreType} from "../../bll/store";
import s from "./setScreen.module.css"


export function SetScreen() {

    const maxValue = useSelector<RootStateStoreType, number>(state => state.counterData.maxValue)
    const minValue = useSelector<RootStateStoreType, number>(state => state.counterData.minValue)
    const dispatch = useDispatch() // custom dispatch from action.ts

    const readInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        dispatch(changeInputMaxValueAC(value))
    }

    const readInputMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        dispatch(changeInputMinValueAC(value))
    }


    return (
        <div className={s.counterBlock}>
            <div className={s.screenBlock}>
                <div className={s.stringValue}>
                    <span>max value:</span>
                    <input
                        value={maxValue}
                        type={"number"}
                        onChange={readInputMaxValue}
                    />
                </div>
                <div className={s.stringValue}>
                    <span>start value:</span>
                    <input
                        value={minValue}
                        type={"number"}
                        onChange={readInputMinValue}
                    />
                </div>
            </div>
            <div className={s.keyboardBlock}>
                <button onClick={() => dispatch(changeMainDisplay(true))}>set</button>
            </div>
        </div>
    )
}

