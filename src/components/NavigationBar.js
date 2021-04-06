import NavigationButtons from './NavigationButtons';

const NavigationBar = ({ sorting, animationSpeed, buttonFunctions }) => {
    return (
        <div className="navigation-bar" style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            width:'100%'
        }}>
            <span style={{margin:'0 20px'}} className='buttonColumn'>
                <NavigationButtons sorting={sorting} text={'10'} onClick={() => buttonFunctions.randomizeData(10)}/>
                <NavigationButtons sorting={sorting} text={'50'} onClick={() => buttonFunctions.randomizeData(50)}/>
                <NavigationButtons sorting={sorting} text={'100'} onClick={() => buttonFunctions.randomizeData(100)}/>
                <NavigationButtons sorting={sorting} text={'200'} onClick={() => buttonFunctions.randomizeData(200)}/>
            </span>
            <span style={{margin:'0 20px'}} className='buttonColumn'>
                <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} text={1} onClick={() => buttonFunctions.changeAnimationSpeed(1)}/>
                <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} text={2} onClick={() => buttonFunctions.changeAnimationSpeed(2)}/>
                <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} text={5} onClick={() => buttonFunctions.changeAnimationSpeed(5)}/>
                <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} text={10} onClick={() => buttonFunctions.changeAnimationSpeed(10)}/>
                <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} text={50} onClick={() => buttonFunctions.changeAnimationSpeed(50)}/>
            </span>
            <span style={{margin:'0 20px'}} className='buttonColumn'>
                <NavigationButtons sorting={sorting} text={'BubbleSort'} onClick={() => buttonFunctions.bubbleSort(1)}/>
            </span>
            <span style={{margin:'0 20px'}} className='buttonColumn'>
                <NavigationButtons sorting={sorting} text={'QuickSort'} onClick={() => buttonFunctions.quickSort()}/>
            </span>
            <span style={{margin:'0 20px'}} className='buttonColumn'>
                <NavigationButtons sorting={sorting} text={'MergeSort'} onClick={() => buttonFunctions.mergeSort()}/>
            </span>
            <span style={{margin:'0 20px'}} className='buttonColumn'>
                <NavigationButtons sorting={sorting} text={'InsertionSort'} onClick={() => buttonFunctions.insertionSort()}/>
            </span>
            <span style={{margin:'0 20px'}} className='buttonColumn'>
                <NavigationButtons sorting={sorting} text={'HeapSort'} onClick={() => buttonFunctions.heapSort()}/>
            </span>

        </div>
    )
}

export default NavigationBar