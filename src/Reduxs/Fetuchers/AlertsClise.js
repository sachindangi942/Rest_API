import {createSlice} from '@reduxjs/toolkit'

export const AlertsClise = createSlice({
    name:'alert',
    initialState:{
        loading:false  
    },
    reducers:{
        showloading:(state)=>{state.loading = true},
        hideloading:(state)=>{state.loading=false}
    }
})
 
export const {showloading,hideloading} = AlertsClise.actions