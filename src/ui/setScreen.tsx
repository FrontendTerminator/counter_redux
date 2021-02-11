import React, {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {RootStateStoreType} from "../bll/store";
import {changeInputMaxValueAC, changeInputMinValueAC, useDispatch} from "../bll/actions";


export function SetScreen () {

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
        <div>
            <div>
                <div>
                    <span>max value<input
                        value={maxValue}
                        type={"number"}
                        onChange={readInputMaxValue}
                    />
                    </span>
                </div>
                <div>
                    <span>start value<input
                        value={minValue}
                        type={"number"}
                        onChange={readInputMinValue}
                    />
                    </span>
                </div>
            </div>
            <div>
                <button>set</button>
            </div>
        </div>
    )
}

