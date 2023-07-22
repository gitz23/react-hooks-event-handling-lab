// Code EyesOnMe Component Here
import React from "react";

function onBlur(){
    return (
        console.log('Hey! Eyes on me!')
    )
}

function onFocus(){
    return (
        console.log('Good!')
    )
}

function EyesOnMe(){
    return(
        <button onFocus={onFocus} onBlur={onBlur}>Eyes on me</button>
    )
}

export default EyesOnMe