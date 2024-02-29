import React, { useState, useEffect } from 'react'


// fbc can not effectively manage data/state that change/update as the change, hence the introduction of react hook.

// Hooks includes useState, useEffect, useContext, useRef, custom hook.

// useState
// useState hook is used to update the state of function based components
// import/destructure useState from react
// It must be used inside the function body.
// Must be imported at the top level of your component
// It has three main parts: stateName, function to update the state(i.e setName()) and the useState(initialState)

const MyHook = () => {

    // hook
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState({
      bg: "red",
      col: "black"
    })

    // useEffect
    useEffect(()=>{
       console.log("useEffect called");
    })

    // run only once on page load 
  useEffect(()=>{
    console.log("useEffect called once");
  }, [])

  // useEffect hook as componentDidUpdate
  useEffect(()=>{
    if(count === 5){
      setTheme({
        bg: "black",
        col: "white"
      })
    }
  }, [count])




    // let count = 0;
    const handleIncrease = () => {
        // count + 1;
        setCount(count + 1)
    } 
    const handleDecrease = () => {
        // count - 1;
        setCount(count - 1)
    } 
console.log(count);
  return (
    <div style={{backgroundColor: theme.bg, color: theme.col}}>
        <h1>My Hook Component</h1>
        <div className="">
            <button className='btn btn-outline-danger' onClick={handleDecrease}>-</button>
            <span className='mx-4 fw-bold'>{count}</span>
            <button  className='btn btn-outline-success' onClick={handleIncrease}>+</button>

            <p>{theme.col}</p>
            <button className='btn btn-outline-danger me-4' onClick={() => setTheme({
              bg: "red",
              col: "white"
            })}>Red</button>
            <button className='btn btn-outline-warning' onClick={() => setTheme({
              bg: "blue",
              col:"yellow"
            })}>Blue</button>
        </div>
    </div>
  )
}

export default MyHook