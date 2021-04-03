import NavigationButtons from './NavigationButtons';

const NavigationBar = ({ sorting, buttonFunctions }) => {
    return (
        <div className="navigation-bar" style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            width:'100%'
        }}>
            <span>
                <NavigationButtons sorting={sorting} text={'10'} onClick={() => buttonFunctions.randomizeData(50)}/>
                <NavigationButtons sorting={sorting} text={'100'} onClick={() => buttonFunctions.randomizeData(100)}/>
                <NavigationButtons sorting={sorting} text={'200'} onClick={() => buttonFunctions.randomizeData(200)}/>
            </span>
            <span>
                <NavigationButtons sorting={sorting} text={'1x'} onClick={() => buttonFunctions.changeAnimationSpeed(1)}/>
                <NavigationButtons sorting={sorting} text={'2x'} onClick={() => buttonFunctions.changeAnimationSpeed(2)}/>
                <NavigationButtons sorting={sorting} text={'5x'} onClick={() => buttonFunctions.changeAnimationSpeed(5)}/>
            </span>
            
            <NavigationButtons sorting={sorting} text={'BubbleSort'} onClick={() => buttonFunctions.bubbleSort(1)}/>
        </div>
    )
}

export default NavigationBar