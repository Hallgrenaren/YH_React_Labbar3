'use client'
import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../ThemeContext.jsx'

ReportForm.propTypes = {
    total: PropTypes.number,
    submitTotal: PropTypes.func,
    submits: PropTypes.number
}

export default function ReportForm(props) {
    const theme = React.useContext(ThemeContext)
    const className = `report_form_${theme}`
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        totalCount: props.total
    })

    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        alert(
            `Thank you, ${event.target[0].value} ${event.target[1].value}.\nWe have noted a total of ${event.target[2].value} passangers today!
            ${props.submits} report cards have been submited!`
        )
        props.submitTotal()
    }

    return (
        <form className={className} onSubmit={handleSubmit}>
            <h1>Report Card</h1>
            <h2>Who worked today?</h2>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="input_field"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="input_field"
            />
            <input
                type="hidden"
                onChange={handleChange}
                name="totalCount"
                value={props.total}
                className="input_field"
            ></input>
            <h1>{props.total}</h1>
            <p>*At submit, Total count will be added.</p>
            <button className="submit_btn">Submit</button>
        </form>
    )
}
