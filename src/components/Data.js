const Data = ({ dataObject }) => {
    return (
        <span style={{
            display: 'inline-block',
            verticalAlign: 'top',
            textAlign: 'center',
            height: `${dataObject.value}px`,
            width: `${dataObject.width}px`,
            margin: '0 0.5px',
            backgroundColor: (dataObject.color)
        }}>
            
        </span>            
    )
}

export default Data
