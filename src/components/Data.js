const Data = ({ dataObject }) => {
    return (
        <span style={{
            display: 'inline-block'
        }}>
            <div style={{
                display: 'inline-block',
                verticalAlign: 'top',
                textAlign: 'center',
                height: `${dataObject.value}px`,
                width: `${dataObject.width}px`,
                margin: '0 0.5px',
                backgroundColor: (dataObject.active? 'red' : 'green')
            }}>
                
            </div>            
            <div style={{
                display: 'none',
                textAlign: 'center'
            }}>
                {dataObject.value}
            </div>
        </span>
    )
}

export default Data
