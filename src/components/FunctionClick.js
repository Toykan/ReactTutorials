import React from 'react'

function FunctionClick() {
    function clickHandler(){
        alert("Hello React. Clicked!")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
