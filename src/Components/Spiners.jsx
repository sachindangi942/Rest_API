import React from 'react'
import '../App.css'

export const Spiners = () => {
    return (
        <>
            <div className ="d-flex justify-content-center spinner ">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    )
}
