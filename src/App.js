import {useState} from 'react'
import DataContainer from './components/DataContainer';
import NavigationBar from './components/NavigationBar';

function App() {
  const generateRandomData = (amountOfData) => {
    const dataArray = []
    for (let i = 0; i < amountOfData; i++) {
        const randomValue = Math.floor(Math.random() * 500)
        dataArray.push({
          value: randomValue,
          position: i,
          width: 800/(amountOfData) - 1
        })
    }
    return dataArray
  }

  const [dataArray, setDataArray] = useState(generateRandomData(100))

  const buttonFunctions = {
    randomizeData: (amountOfData) => {
      const newData = generateRandomData(amountOfData)
      setDataArray(newData)
    },

    bubbleSort: (currentPass) => {      
      let changes = false
            
      for (let i=0; i<dataArray.length-currentPass; i++) {
        if (dataArray[i].value > dataArray[i+1].value) {
            const lower_value = dataArray[i+1]
            dataArray[i+1] = dataArray[i]
            dataArray[i] = lower_value
            changes = true
        }
      }
      if (!changes) return console.log(dataArray)
      setDataArray(dataArray)
      buttonFunctions.bubbleSort(currentPass+1) 
    }
  }

  return (
    <div className="container" style={{
      display: 'grid', placeItems: 'center'
    }}>
      <NavigationBar buttonFunctions={buttonFunctions}/>
      <DataContainer dataArray={dataArray}/>
    </div>
  );
}

export default App;
