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
  const [dataArray, setDataArray] = useState(generateRandomData(10))
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [sorting, setSorting] = useState(false)

  const buttonFunctions = {
    randomizeData: (amountOfData) => {
      const newData = generateRandomData(amountOfData)
      setDataArray(newData)
    },

    changeAnimationSpeed: (animationSpeed) => {
      setAnimationSpeed(animationSpeed)
    },

    animation: (animationSpeed) => {
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
        await buttonFunctions.animation(animationSpeed)
        setDataArray([...arrayToSort])
        arrayToSort[i].color = unsortedColor
        if (lowerIndex !== left) arrayToSort[lowerIndex - 1].color = unsortedColor
      }
      arrayToSort[right - 1] = arrayToSort[lowerIndex]
      arrayToSort[lowerIndex] = pivot
      arrayToSort[lowerIndex].color = sortedColor
  
      buttonFunctions.quickSort(arrayToSort, left, lowerIndex)
      buttonFunctions.quickSort(arrayToSort, lowerIndex + 1, right)
    },

    mergeSort: async () => {

      const mergeArrays = async (leftArray, rightArray, arrayToLeft, arrayToRight) => {
        
        const mergedArray = []
        
        // Change color of data to sortingColor
        for (let i = 0; i < leftArray.length; i ++) {
          if (leftArray[i]) leftArray[i].color = sortingColor
          if (rightArray[i]) rightArray[i].color = sortingColor
          const animationArray = [...arrayToLeft, ...leftArray, ...rightArray, ...arrayToRight]
          setDataArray([...animationArray])  
          await buttonFunctions.animation(animationSpeed)
        }

        // Sort the 2 given arrays
        while (leftArray.length && rightArray.length) {
          if (leftArray[0].value < rightArray[0].value) {
            mergedArray.push(leftArray.shift())
          } else {
            mergedArray.push(rightArray.shift())
          }
        }
        
        // Merge the sorted array with what is leftover from left/right array(...leftArray, ...rightArray)
        // and the original array(...arrayToLeft, ...arrayToRight)
        const newArray = [...arrayToLeft, ...mergedArray, ...leftArray, ...rightArray, ...arrayToRight]
        for (let i = 0; i < newArray.length; i ++) {
          newArray[i].color = unsortedColor
        }
        await buttonFunctions.animation(animationSpeed)
        setDataArray(newArray)
        
        return [...mergedArray, ...leftArray, ...rightArray]
      }
    
      const splitArray = async (arrayToSplit, arrayToLeft, arrayToRight) => {
          
          if (arrayToSplit.length < 2) {
            return arrayToSplit
          }
      
          const half = Math.ceil(arrayToSplit.length / 2)
          const halfArray = arrayToSplit.splice(0, half)

          const leftArray = await splitArray(halfArray, arrayToLeft, [...arrayToSplit, ...arrayToRight])
          const rightArray = await splitArray(arrayToSplit, [...arrayToLeft, ...leftArray], arrayToRight)          
          
          const mergedArray = await mergeArrays(leftArray, rightArray, arrayToLeft, arrayToRight)
          return mergedArray
      }
      
      const unsortedArray = [...dataArray]
      const sortedArray = await splitArray(unsortedArray, [], [])
      
      for (let i = 0; i < sortedArray.length; i ++) {
        sortedArray[i].color = sortedColor
        setDataArray([...sortedArray])
        await buttonFunctions.animation(animationSpeed * 30)
      }
      
    },

    insertionSort: async () => {
      
      let oldArray = dataArray
      for (let i = 1; i < oldArray.length; i ++) {
        let index = i
        oldArray[i].color = sortingColor
        setDataArray([...oldArray])
        await buttonFunctions.animation(animationSpeed)

        const sortedArray = oldArray.slice(0, i)
        const unsortedArray = oldArray.slice(i + 1)

        while (index > 0 && oldArray[i].value < oldArray[index - 1].value) {
            index -= 1
        }

        sortedArray.splice(index, 0, oldArray[i])

        const newArray = [...sortedArray, ...unsortedArray]

        setDataArray([...newArray])
        await buttonFunctions.animation(animationSpeed)
        newArray[index].color = unsortedColor
        oldArray = newArray
      }

      for (let i = 0; i < oldArray.length; i ++) {
        oldArray[i].color = sortedColor
        setDataArray([...oldArray])
        await buttonFunctions.animation(animationSpeed * 30)
      }
    },

    heapSort : async () => {

      const sortedArray = []
  
      const getParentIndex = (childIndex) => {
          return Math.floor((childIndex - 1) / 2)
      }
  
      const heapifyUp = (childIndex) => {
          if (childIndex === 0) return
          const parentIndex = (childIndex <= 2? 0 : getParentIndex(childIndex))
          if (dataArray[childIndex].value > dataArray[parentIndex].value) {
              const parentValue = dataArray[parentIndex]
              dataArray[parentIndex] = dataArray[childIndex]
              dataArray[childIndex] = parentValue
              heapifyUp(parentIndex)
          }
      }
  
      const heapifyDown = (index) => {
          const leftChildIndex = (index * 2) + 1
          const rightChildIndex = (index * 2) + 2
  
          if (!dataArray[leftChildIndex] && !dataArray[rightChildIndex]) return
          if (dataArray[leftChildIndex] && dataArray[rightChildIndex]) {
            if (dataArray[index].value < dataArray[leftChildIndex].value || dataArray[index].value < dataArray[rightChildIndex].value) {
              if (dataArray[leftChildIndex].value > dataArray[rightChildIndex].value) {
                  [dataArray[index], dataArray[leftChildIndex]] = [dataArray[leftChildIndex], dataArray[index]]
                  heapifyDown(leftChildIndex)
              } else {
                  [dataArray[index], dataArray[rightChildIndex]] = [dataArray[rightChildIndex], dataArray[index]]
                  heapifyDown(rightChildIndex)
              }
            }
          } else if (dataArray[leftChildIndex]) {
              if ((dataArray[index].value < dataArray[leftChildIndex].value)) {
                [dataArray[index], dataArray[leftChildIndex]] = [dataArray[leftChildIndex], dataArray[index]]
                heapifyDown(leftChildIndex)
              } 
          } else {
              if ((dataArray[index].value < dataArray[rightChildIndex].value)) {
                [dataArray[index], dataArray[rightChildIndex]] = [dataArray[rightChildIndex], dataArray[index]]
                heapifyDown(rightChildIndex)
              }
          }
      }
  
      const heapifySort = () => {
          if (!dataArray.length) return
          
          heapifyDown(0)
          
          const temp = dataArray[0]
          dataArray[0] = dataArray[dataArray.length - 1]
          dataArray[dataArray.length - 1] = temp
          sortedArray.splice(0, 0, dataArray.pop())
          heapifySort()
      }
  
  
      for (let i = 0; i < dataArray.length; i++) {
          const leftChildIndex = (i * 2) + 1
          const rightChildIndex = (i * 2) + 2
  
          if (!dataArray[leftChildIndex] && !dataArray[rightChildIndex]) continue
        
          if (dataArray[leftChildIndex] && dataArray[rightChildIndex]) {
            if (dataArray[i].value < dataArray[leftChildIndex].value || dataArray[i].value < dataArray[rightChildIndex].value) {
              if (dataArray[leftChildIndex].value < dataArray[rightChildIndex].value) {
                  [dataArray[i], dataArray[rightChildIndex]] = [dataArray[rightChildIndex], dataArray[i]]
                  heapifyUp(i)
                  heapifyUp(leftChildIndex)
              } else {
                  [dataArray[i], dataArray[leftChildIndex]] = [dataArray[leftChildIndex], dataArray[i]]
                  heapifyUp(i)
                  heapifyUp(rightChildIndex)
              }
            }
          } else if (dataArray[leftChildIndex]) {
            if (dataArray[i].value < dataArray[leftChildIndex].value) {
              [dataArray[i], dataArray[leftChildIndex]] = [dataArray[leftChildIndex], dataArray[i]]
              heapifyUp(i)
            }
          } else {
            if (dataArray[i].value < dataArray[rightChildIndex].value) {
              [dataArray[i], dataArray[rightChildIndex]] = [dataArray[rightChildIndex], dataArray[i]]
              heapifyUp(i)
            }
          }
      }
  
      [dataArray[0], dataArray[dataArray.length - 1]] = [dataArray[dataArray.length - 1], dataArray[0]]
      sortedArray.splice(0, 0, dataArray.pop())
      heapifySort()
      setDataArray(sortedArray)
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