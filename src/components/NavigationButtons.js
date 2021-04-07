// import PropTypes from 'prop-types';

const NavigationButtons = ({ sorting, animationSpeed, text, onClick, width }) => {
    return (
        <button disabled={sorting===true} onClick={onClick} style={{
            backgroundColor:(text === animationSpeed? '#77C063': '#CA302D'), // Green or Red
            border:'1px solid black',
            margin: '0px 2px',
            padding: '5px 10px',
            border: (text === animationSpeed? '1px solid #77C063': '1px solid #CA302D'),
            borderRadius: '5px',
            boxShadow: (text === animationSpeed? '3px 3px #013220': '3px 3px #580000'),
            width: `${width}px`
        }}>
            {animationSpeed? text + 'x': text}
        </button>
    )
}

export default NavigationButtons
