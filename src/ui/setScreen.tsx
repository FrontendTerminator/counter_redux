import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateStoreType} from "../bll/store";
import {changeInputMaxValueAC, changeInputMinValueAC} from "../bll/counter_reducer";


export function SetScreen () {

    const counterData = useSelector<RootStateStoreType, any>(state => state.counterData)
    const dispatch = useDispatch()

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
                        value={counterData.maxValue}
                        type={"number"}
                        onChange={readInputMaxValue}
                    />
                    </span>
                </div>
                <div>
                    <span>start value<input
                        value={counterData.minValue}
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

