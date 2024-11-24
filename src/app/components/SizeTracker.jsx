'use client'
import React from 'react'

export default function SizeTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight)

    React.useEffect(() => {
        window.addEventListener('resize', function () {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        })
    }, [])

    return (
        <div className="size_tracker_div">
            <h1 className="size_text">
                Site looks better in smaller sizes. Current size:
            </h1>
            <h3 className="size_text">
                Window width: {windowWidth} Window height: {windowHeight}
            </h3>
        </div>
    )
}
