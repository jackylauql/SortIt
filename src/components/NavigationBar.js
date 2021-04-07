import NavigationButtons from './NavigationButtons';

const NavigationBar = ({ sorting, animationSpeed, buttonFunctions }) => {
    return (
        <div>
            <div className="navigation-bar" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width:'100%',
                height: '80px'
            }}>
                <div>
                    <h1 style={{textAlign: 'center'}}>Size of Data</h1>
                    <span style={{margin:'0 20px'}} className='buttonColumn'>
                        <NavigationButtons sorting={sorting} text={'10'} width={53} onClick={() => buttonFunctions.randomizeData(10)}/>
                        <NavigationButtons sorting={sorting} text={'50'} width={53} onClick={() => buttonFunctions.randomizeData(50)}/>
                        <NavigationButtons sorting={sorting} text={'100'} width={53} onClick={() => buttonFunctions.randomizeData(100)}/>
                        <NavigationButtons sorting={sorting} text={'200'} width={53} onClick={() => buttonFunctions.randomizeData(200)}/>
                    </span>
                </div>
                <div>
                    <h1 style={{textAlign: 'center'}}>Sorting Speed</h1>
                    <span style={{margin:'0 20px'}} className='buttonColumn'>
                        <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} width={53} text={1} onClick={() => buttonFunctions.changeAnimationSpeed(1)}/>
                        <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} width={53} text={2} onClick={() => buttonFunctions.changeAnimationSpeed(2)}/>
                        <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} width={53} text={5} onClick={() => buttonFunctions.changeAnimationSpeed(5)}/>
                        <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} width={53} text={10} onClick={() => buttonFunctions.changeAnimationSpeed(10)}/>
                        <NavigationButtons sorting={sorting} animationSpeed={animationSpeed} width={53} text={50} onClick={() => buttonFunctions.changeAnimationSpeed(50)}/>
                    </span>
                </div>

                <div>
                    <h1 style={{ textAlign: 'center'}}>Algorithms</h1>
                    <span style={{margin:'0 10px'}} className='buttonColumn'>
                        <NavigationButtons sorting={sorting} text={'MergeSort'} width={127} onClick={() => buttonFunctions.mergeSort()}/>
                    </span>
                    <span style={{margin:'0 20px'}} className='buttonColumn'>
                        <NavigationButtons sorting={sorting} text={'BubbleSort'} width={127} onClick={() => buttonFunctions.bubbleSort(1)}/>
                    </span>
                    <span style={{margin:'0 10px'}} className='buttonColumn'>
                        <NavigationButtons sorting={sorting} text={'QuickSort'} width={127} onClick={() => buttonFunctions.quickSort()}/>
                    </span>
                    <span style={{margin:'0 20px'}} className='buttonColumn'>
                        <NavigationButtons sorting={sorting} text={'HeapSort'} width={127} onClick={() => buttonFunctions.heapSort()}/>
                    </span>
                    <span style={{margin:'0 10px'}} className='buttonColumn'>
                        <NavigationButtons sorting={sorting} text={'InsertionSort'} width={127} onClick={() => buttonFunctions.insertionSort()}/>
                    </span>
                    

                </div>

            </div>
            <hr style={{
                position: 'relative',
                bottom: '5px',
                border: '1px solid #141414',
                width: '100%'
            }}></hr>
        </div>

    )
}

export default NavigationBar