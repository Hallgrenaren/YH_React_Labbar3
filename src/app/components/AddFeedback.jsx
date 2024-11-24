'use client'
import { useState } from 'react'
import PropTypes from 'prop-types'

AddFeedback.propTypes = {
    onAddFeedback: PropTypes.func
}

export default function AddFeedback(props) {
    const [text, setText] = useState('')
    return (
        <>
            <input
                placeholder="Add feedback"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('')
                    props.onAddFeedback(text)
                }}
            >
                Add
            </button>
        </>
    )
}
