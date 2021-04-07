import Data from './Data';

const DataContainer = ({ dataArray }) => {   

    const data = []
    for (let i=0; i < dataArray.length; i++) {
        data.push(<Data dataObject={dataArray[i]} key={dataArray[i].position}/>)
    }
    return (
        <div style={{
            display:'flex',
            alignItems: 'flex-end',
            height:'650px',
            width:'1200px',
        }}>
            {data}
        </div> 
    )
}

export default DataContainer
