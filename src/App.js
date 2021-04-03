import {useState} from 'react'
import DataContainer from './components/DataContainer';
import NavigationBar from './components/NavigationBar';

function App() {
  // Initialization Variables
  const [sortedColor, sortingColor, unsortedColor] = ['#1509eb', '#e01f1f', '#18baf0']

  const generateRandomData = (amountOfData) => {
    const dataArray = []
    for (let i = 0; i < amountOfData; i++) {
        const randomValue = Math.floor(Math.random() * 600)
        dataArray.push({
          value: randomValue,
          position: i,
          width: 1200/(amountOfData) - 1,
          color: unsortedColor
        })
    }
    return dataArray
  }

  // All States
  const [dataArray, setDataArray] = useState(generateRandomData(100))
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [sorting, setSorting] = useState(false)

  const buttonFunctions = {
    randomizeData: (amountOfData) => {
      const newData = generateRandomData(amountOfData)
      setDataArray(newData)
    },

    changeAnimationSpeed: (speed) => {
      setAnimationSpeed(speed)
    },

    animation: (animationSpeed) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 40 / animationSpeed)
      })
    },

    // Sorting Functions
    bubbleSort: async (currentPass) => {      
      let changes = false
      setSorting(true)
      const newData = dataArray
      
      for (let i = 0; i < newData.length - currentPass; i++) {
        newData[i].color = sortingColor
        newData[i+1].color = sortingColor
        await buttonFunctions.animation(animationSpeed)
        if (newData[i].value > newData[i+1].value) {
            const lower_value = newData[i+1]
            newData[i+1] = newData[i]
            newData[i] = lower_value
            changes = true
        }
        setDataArray([...newData]) // a new instance is mapped so the component rerenders
        newData[i].color = unsortedColor
        newData[i+1].color = unsortedColor
      }
      newData[newData.length - currentPass].color = sortedColor
      
      if (!changes) {
        setSorting(false)
        return setDataArray([...newData])
      }
      buttonFunctions.bubbleSort(currentPass+1) 
    }
  }

  return (
    <div className="container" style={{
      display: 'grid', placeItems: 'center'
    }}>
      <NavigationBar sorting={sorting} buttonFunctions={buttonFunctions} animationSpeed={animationSpeed}/>
      <DataContainer dataArray={dataArray}/>
    </div>
  );
}

export default App;