import Data from './Data';

const DataContainer = ({ dataArray }) => {   

    const data = []
    for (let i=0; i < dataArray.length; i++) {
        data.push(<Data dataObject={dataArray[i]} key={dataArray[i].position}/>)
    }
    return (
        <div style={{
            display:'block',
            height:'600px',
            width:'800px',
            backgroundColor: 'blue'
        }}>
            {data}
        </div> 
    )
}

export default DataContainer
