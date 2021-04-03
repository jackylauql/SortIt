import PropTypes from 'prop-types';

const NavigationButtons = ({ sorting, text, onClick }) => {
    return (
        <button disabled={sorting===true} onClick={onClick} style={{
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
