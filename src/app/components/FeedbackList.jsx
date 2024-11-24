'use client'
import { useState } from 'react'
import PropTypes from 'prop-types'

FeedbackList.propTypes = {
    feedbacks: PropTypes.object,
    onChangeFeedback: PropTypes.func,
    onDeleteFeedback: PropTypes.func
}

Feedback.propTypes = {
    feedback: PropTypes.object,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
}

export default function FeedbackList({
    feedbacks,
    onChangeFeedback,
    onDeleteFeedback
}) {
    return (
        <ul className="feedback_list">
            {feedbacks.map((feedback) => (
                <li key={feedback.id}>
                    <Feedback
                        feedback={feedback}
                        onChange={onChangeFeedback}
                        onDelete={onDeleteFeedback}
                    />
                </li>
            ))}
        </ul>
    )
}

function Feedback({ feedback, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    let feedbackContent
    if (isEditing) {
        feedbackContent = (
            <>
                <input
                    value={feedback.text}
                    onChange={(e) => {
                        onChange({
                            ...feedback,
                            text: e.target.value
                        })
                    }}
                />
                <button
                    className="feedback_left_op"
                    onClick={() => setIsEditing(false)}
                >
                    Save
                </button>
            </>
        )
    } else {
        feedbackContent = (
            <>
                {feedback.text}
                <button
                    className="feedback_left_op"
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
            </>
        )
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={feedback.done}
                onChange={(e) => {
                    onChange({
                        ...feedback,
                        done: e.target.checked
                    })
                }}
            />
            {feedbackContent}
            <button onClick={() => onDelete(feedback.id)}>Delete</button>
        </label>
    )
}
