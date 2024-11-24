'use client'
import { useState, useReducer } from 'react'
import './page.module.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import SizeTracker from './components/SizeTracker.jsx'
import Footer from './components/Footer.jsx'
import ThemeContext from './ThemeContext.jsx'
import AddFeedback from './components/AddFeedback.jsx'
import FeedbackList from './components/FeedbackList.jsx'

function Home() {
    const [theme, setTheme] = useState('light')
    const [feedbacks, dispatch] = useReducer(feedbacksReducer, initialFeedbacks)

    const themeHandlerFunction = (e) => {
        setTheme(e.target.checked ? 'dark' : 'light')
    }

    function handleAddFeedback(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text
        })
    }

    function handleChangeFeedback(feedback) {
        dispatch({
            type: 'changed',
            feedback: feedback
        })
    }

    function handleDeleteFeedback(feedbackId) {
        dispatch({
            type: 'deleted',
            id: feedbackId
        })
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Navbar />
                <Body />
                <SizeTracker />
                <div className="feedback_div">
                    <h1>What should be improved on?</h1>
                    <AddFeedback onAddFeedback={handleAddFeedback} />
                    <FeedbackList
                        feedbacks={feedbacks}
                        onChangeFeedback={handleChangeFeedback}
                        onDeleteFeedback={handleDeleteFeedback}
                    />
                </div>
                <Footer theme={theme} toggleTheme={themeHandlerFunction} />
            </ThemeContext.Provider>
        </>
    )
}

function feedbacksReducer(feedbacks, action) {
    switch (action.type) {
        case 'added': {
            return [
                ...feedbacks,
                {
                    id: action.id,
                    text: action.text,
                    done: false
                }
            ]
        }
        case 'changed': {
            return feedbacks.map((t) => {
                if (t.id === action.feedback.id) {
                    return action.feedback
                } else {
                    return t
                }
            })
        }
        case 'deleted': {
            return feedbacks.filter((t) => t.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

let nextId = 3
const initialFeedbacks = [
    { id: 0, text: 'Add a theme connected to the location', done: true },
    { id: 1, text: 'Connect weather to reportcard', done: false },
    {
        id: 2,
        text: 'Prettier styling, e.g. make counter look more like an appliance, like a calculator',
        done: false
    }
]

export default Home
