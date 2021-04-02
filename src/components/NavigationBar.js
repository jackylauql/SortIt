import NavigationButtons from './NavigationButtons';

const NavigationBar = ({ buttonFunctions }) => {
    return (
        <div className="navigation-bar" style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            width:'100%'
        }}>
            <NavigationButtons text={'10'} onClick={() => buttonFunctions.randomizeData(10)}/>
            <NavigationButtons text={'100'} onClick={() => buttonFunctions.randomizeData(100)}/>
            <NavigationButtons text={'200'} onClick={() => buttonFunctions.randomizeData(200)}/>
            <NavigationButtons text={'BubbleSort'} onClick={() => buttonFunctions.bubbleSort(1)}/>
        </div>
    )
}

export default NavigationBar