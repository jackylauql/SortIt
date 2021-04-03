// import PropTypes from 'prop-types';

const NavigationButtons = ({ sorting, animationSpeed, text, onClick }) => {
    return (
        <button disabled={sorting===true} onClick={onClick} style={{
            backgroundColor:(text === animationSpeed? 'green': 'red'),
            border:'1px solid black'
        }}>
            {animationSpeed? text + 'x': text}
        </button>
    )
}

export default NavigationButtons
