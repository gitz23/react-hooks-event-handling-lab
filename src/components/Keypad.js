// Code Keypad Component Here
import React from "react";

function handlePassword(){
    return (
        console.log("Entering password...")
    )
}

function Keypad (){
    return (
        <div>
            <form>
                <input onChange={handlePassword} type="password"/>
            </form>
        </div>
    )
}

export default Keypad;