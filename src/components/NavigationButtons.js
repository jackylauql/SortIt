import PropTypes from 'prop-types';

const NavigationButtons = ({ text, onClick }) => {
    return (
        <button onClick={onClick} style={{
            backgroundColor:'red',
            border:'1px solid black'
        }}>
            {text}
        </button>
    )
}

NavigationButtons.propTypes = {
    text: PropTypes.string
}

export default NavigationButtons
