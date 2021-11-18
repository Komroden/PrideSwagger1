import React from 'react';
import {store} from "./store";
import {Provider} from "react-redux";
import {App} from "./App";

export const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

