import React, { useState, useEffect } from 'react'
// fetching data 2.updating dom with document and window and timer functions are settimeout settimeout et
// useEffect have 3  variations are 
// 
// e component lo useEffect hook vadutamo aa componet lo change vachinna prati sari useEfect call avutundi xample1: useEffect(+() => {
// document.title = `${count} times  useEffect is called`
//     })

//  empty array iste only first time component render inappudu matrame useEffect hook call avutundi  e
//  api call ki best use  type 2 model xample1: useEffect(+() => {
// document.title = `${count} times  useEffect is called`
//     },[])

//   aa variable edi ite ichamo adi change innappudu matrame  eee useEffect hook call avutundi xample1: useEffect(+() => {
// document.title = `${count} times  useEffect is called`
//     },[variable])


// 
const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} times  useEffect is called`
    })
    return (
        <div>
            <div>UseEffect</div>
            <p>{count}</p>
            <button type='button' onClick={() => setCount(count + 1)}>Increase++</button>
        </div>
    )
}

export default UseEffect