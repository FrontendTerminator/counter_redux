import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateStoreType} from "../bll/store";
import {incrementScreenValueAC, resetScreenValueAC} from "../bll/counter_reducer";

export function GeneralScreen() {

    const scoreValue = useSelector<RootStateStoreType, number>( state => state.counterData.scoreValue)
    const dispatch = useDispatch()

    return(
        <div>
            <div>
                {scoreValue}
            </div>
            <div>
                <button onClick={() => dispatch(incrementScreenValueAC())}>inc</button>
                <button onClick={() => dispatch(resetScreenValueAC())}>reset</button>
                <button>set</button>
            </div>
        </div>
    )
}

