import React from 'react';
import './App.css';
import {GeneralScreen} from "./ui/generalScreen/generalScreen";
import {SetScreen} from "./ui/setScreen/setScreen";
import {useSelector} from "react-redux";
import {RootStateStoreType} from "./bll/store";


function App() {

    const mainDisplayValue = useSelector<RootStateStoreType, boolean>(state => state.counterData.mainDisplayValue)

    return (
        <div>
            {mainDisplayValue
                ? <GeneralScreen/>
                : <SetScreen/>
            }
        </div>
    );
}

export default App;


