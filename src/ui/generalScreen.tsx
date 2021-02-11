import React from "react";
import {useSelector} from "react-redux";
import {RootStateStoreType} from "../bll/store";
import {incrementScreenValueAC, resetScreenValueAC, useDispatch} from "../bll/actions";

export function GeneralScreen() {

    const scoreValue = useSelector<RootStateStoreType, number>( state => state.counterData.scoreValue)
    const dispatch = useDispatch() // custom dispatch from action.ts

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

