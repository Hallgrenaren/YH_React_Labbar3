import PropTypes from 'prop-types'

Footer.propTypes = {
    toggleTheme: PropTypes.func,
    theme: PropTypes.string
}

export default function Footer(props) {
    //add more to make a footer that makes sense

    return (
        <footer className='footerbar'>
            <label>
                <input type="checkbox" onChange={props.toggleTheme} />
                Swedish theme
            </label>
        </footer>
    )
}
