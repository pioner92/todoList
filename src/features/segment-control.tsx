import SegmentedControl from '@react-native-segmented-control/segmented-control'
import React, {useState} from 'react'


type propsType = {
    values:Array<string>
    onChange:(index:number)=>void
}

export const SegmentedControlContainer:React.FC<propsType> = ({values, onChange}) => {
    const [index, setIndex] = useState(0)

    const changeIndex = (index:number) => {
        setIndex(index)
        onChange(index)
    }

    return (
        <SegmentedControl
            backgroundColor={'#dddddd'}
            values={values}
            tintColor={'#474848'}
            selectedIndex={index}
            onChange={(event) => changeIndex(event.nativeEvent.selectedSegmentIndex)}
        />
    )
}
