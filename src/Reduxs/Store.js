import { configureStore } from "@reduxjs/toolkit";
import { AlertsClise } from "./Fetuchers/AlertsClise";
export default configureStore({
    reducer:{
        alert:AlertsClise.reducer
    }
})