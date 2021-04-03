import {useState} from 'react'
import DataContainer from './components/DataContainer';
import NavigationBar from './components/NavigationBar';

function App() {
  // Initialization Variables
  const [sortedColor, sortingColor, unsortedColor, quickSortPivotColor] = 
  ['#1509eb', '#e01f1f', '#18baf0', '#f0c818'] // Dark Blue, Red, Light Blue 

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
  const [dataArray, setDataArray] = useState(generateRandomData(50))
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

    animation: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 500 / animationSpeed)
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
        await buttonFunctions.animation()
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
        for (let i = 0; i < newData.length - currentPass; i++) {
          newData[i].color = sortedColor
        }
        setSorting(false)
        return setDataArray([...newData])
      }
      buttonFunctions.bubbleSort(currentPass+1) 
    },

    quickSort: async (arrayToSort=dataArray, left = 0, right = arrayToSort.length) => {
      if (left === right) {
        return setDataArray([...dataArray])
      }
      
      const pivot = arrayToSort[right - 1]
      arrayToSort[right - 1].color = quickSortPivotColor
      let lowerIndex = left
      for (let i = left; i < right; i ++) {
        arrayToSort[i].color = sortingColor
        if (arrayToSort[i].value < pivot.value) {
          const temp = arrayToSort[i]
          arrayToSort[i] = arrayToSort[lowerIndex]
          arrayToSort[i].color = sortingColor
          arrayToSort[lowerIndex] = temp
          lowerIndex += 1
        }
        await buttonFunctions.animation()
        setDataArray([...arrayToSort])
        arrayToSort[i].color = unsortedColor
        if (lowerIndex !== left) arrayToSort[lowerIndex - 1].color = unsortedColor
      }
      arrayToSort[right - 1] = arrayToSort[lowerIndex]
      arrayToSort[lowerIndex] = pivot
      arrayToSort[lowerIndex].color = sortedColor
  
      buttonFunctions.quickSort(arrayToSort, left, lowerIndex)
      buttonFunctions.quickSort(arrayToSort, lowerIndex + 1, right)
    }

    // quickSort: async (arrayToSort, left, right) => {
    //   if (arrayToSort.length === 1) return
    //   setSorting(true)
      
    //   const pivot = arrayToSort[arrayToSort.length - 1]
    //   let lowerIndex = 0
    //   for (let i = 0; i < arrayToSort.length; i ++) {
    //     if (arrayToSort[i] < pivot) {
    //       const temp = arrayToSort[i]
    //       arrayToSort[i] = arrayToSort[lowerIndex]
    //       arrayToSort[lowerIndex] = temp
    //       lowerIndex += 1
    //     }
    //   }
    //   arrayToSort[arrayToSort.length - 1] = arrayToSort[lowerIndex]
    //   arrayToSort[lowerIndex] = pivot

    //   quickSort()
    // }
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