'use client'
import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../ThemeContext.jsx'

Counter.propTypes = {
    total: PropTypes.number,
    addToTotal: PropTypes.func
}

export default function Counter(props) {
    const theme = React.useContext(ThemeContext)
    const classNameOp = `counter_op_${theme}`
    const classNameAdd = `total_add_${theme}`
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(count + 1)
    }

    function subtract() {
        setCount(count - 1)
    }

    //Raise total-value to App to use in formsubmit.
    function totalAdd() {
        props.addToTotal(count)
        setCount(0)
    }

    return (
        <div className='counter_container'>
            <div className="counter_count">
                <h1>{count}</h1>
            </div>
            <button className={classNameOp} onClick={subtract}>
                –
            </button>
            <button className={classNameOp} onClick={add}>
                +
            </button>
            <button className={classNameAdd} onClick={totalAdd}>
                Add to total
            </button>
            <h1 className="counter_total">{props.total}</h1>
            <p>total count</p>
        </div>
    )
}
