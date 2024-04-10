import React, { useState } from 'react'

const UseState = () => {

    // ---------handling form--------------
    const [details, setDetails] = useState({
        firstName: "",
        email: "",
        address: "",
        password: ""
    })
    const onSubmitForm = (e) => {
        e.preventDefault();

        console.log(details)
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setDetails((preVal) => ({
            ...preVal, [name]: value
        }))
        console.log(details)

        // we can make post request here



    }

    // ----------handling form end------------
    // -----------handling individual states-----------
    //    useState()
    //  return an arry of two values ie is one variable and an function we storing those in an variables 
    //  we can pass any value like boolean ,count,
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");



    // --------multiples values with one state-------------------------

    // if we have morethen one variables  dont try to use more states instead of no states use one state with object in it


    // --------------------------------------
    const [allVariables, setAllVariables] = useState({ name: "", value: 0 })


    const onChangeName = (event) => {

        setAllVariables((prev) => ({
            ...prev, name: event.target.value
        }))


    }
    const onChangeCountTwo = () => {

        setAllVariables((prev) => ({
            ...prev, value: prev.value + 1
        }))
    }

    // ---------------handling more values with one in state------------------------------

    // ---------    // -----------handling individual states---------------start---------------------
    const onIncreaseCount = () => {
        setCount(count + 1);
    }
    const onDecreaseCount = () => {
        setCount(count - 1);
    }
    const onChangeInput = (event) => {
        const value = event.target.value;
        setInput(value)
    }
    // ------------    // -----------handling individual states-----------------ebd----------------------

    return (
        <div>

            <div>


                <h4>UseState</h4>
                <p>{count}</p>
                <button type='button' onClick={onIncreaseCount}>Increase++</button>
                <button type='button' onClick={onDecreaseCount}>Decrease--</button>

                <br />
                <br />
                <p>{input}</p>
                <input type="text" placeholder="enter the text" onChange={onChangeInput}
                />

            </div>

            <div>
                <input type="text" placeholder="enter the text" onChange={onChangeName} />
                <p>{allVariables.name}</p>
                <h4>{allVariables.value}</h4>
                <button type='button' onClick={onChangeCountTwo}>++</button>
            </div>
            <br />
            <br />
            <form onSubmit={onSubmitForm}>
                name:
                <input onChange={handleChange} name="firstName" placeholder="enter name" type="text" />
                <br />

                email:
                <input onChange={handleChange} name="email" placeholder="enter email" type="email" />
                <br />
                Address:
                <textarea onChange={handleChange} type="text" placeholder="add address" name="address">

                </textarea>

                <br />
                mobileNo:
                <input onChange={handleChange} placeholder="enter password" type="password" name="password" />
                <br />
                <br />
                <button type='submit'>submit details</button>
            </form>
        </div>

    )
}

export default UseState
